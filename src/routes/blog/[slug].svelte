<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return {
        post: data
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { stores } from '@sapper/app';
  import { onDestroy, onMount } from 'svelte';
  import Sidebar from '../../components/Nav/Sidebar.svelte';
  import SocialToolbox from '../../components/Shared/SocialToolbox.svelte';
  import Bio from '../../components/Bio.svelte'
  import { sendEventGA } from '../../utils/analytics';
  import disqus from '../../utils/disqus';
  import highlightCode from '../../utils/highlightCode';
  import toggleImage from '../../utils/openImage';
  import { formatPostContent } from '../../utils/postHelper';
  import readingTime from '../../utils/readingTime';
  import { CalendarIcon, BookOpenIcon, UserIcon } from 'svelte-feather-icons'
  import { timeFormatter } from '../../utils/dateHelper';



  export let post;
  let allHeadingContents = []
  let allHeadingTexts = []
  let isStickySidebar = false
  let isSocialToolBoxFloating = false
  let postContentElement
  let observer
  let disqusElement
  let windowWidth
  const unSubscribePageChanges = stores().page.subscribe(({ params }) => {
    if (postContentElement) {
      allHeadingTexts = Array.from(postContentElement.querySelectorAll('h2')).map(element => ({
        innerText: element.innerText,
        element: element,
        isActive: false
      }))
      if (observer) {
        observer.disconnect()
        windowWidth > 992 && formatContentAndWatchElements(true)
      }
      disqus.refresh()
      highlightCode()
    }
  })
  const onResizeWindow = () => windowWidth > 992 && formatContentAndWatchElements()
  const onObserveElements = entries => {
    entries.forEach(entry => {
      const currentElementIndex = allHeadingTexts.findIndex(heading => heading.element.id === entry.target.attributes['data-ref'].value)
      if (entry.intersectionRatio > 0) {
        allHeadingTexts[currentElementIndex].isActive = true
      } else {
        allHeadingTexts[currentElementIndex].isActive = false
      }
    })
    allHeadingTexts = [...allHeadingTexts]
  }
  const formatContentAndWatchElements = (format) => {
    if (format || !document.querySelector('.heading-content')) formatPostContent(postContentElement)
    observer = new IntersectionObserver(onObserveElements)
    allHeadingContents = Array.from(document.querySelectorAll('.heading-content'))
    allHeadingContents.forEach(element => observer.observe(element, { threshold: 1.0 }))
    checkScrollPosition()
  }
  const init = () => {
    highlightCode()
    disqus.init()
    allHeadingTexts = Array.from(postContentElement.querySelectorAll('h2')).map(element => ({
      innerText: element.innerText,
      element: element,
      isActive: false
    }))
    if (windowWidth > 992) {
      formatContentAndWatchElements(true)
    }
  }
  const checkScrollPosition = () => {
    const navBar = document.querySelector('nav.Nav')
    isStickySidebar = window.pageYOffset > navBar.offsetTop
    isSocialToolBoxFloating = isStickySidebar && (disqusElement.offsetTop - disqusElement.offsetHeight) > window.pageYOffset
  }
  const onTemaryClick = item => {
    const { element } = allHeadingTexts.find(element => element.innerText === item)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    sendEventGA('post', 'temary', 'item-click')
  }
  const postContentClick = event => {
    if (event.srcElement.tagName === 'IMG') {
      toggleImage(event.srcElement)
    } else if (event.srcElement.querySelector('img.opened')) {
      toggleImage(event.srcElement.querySelector('img.opened'))
    }
  }
  onMount(() => {
    document.readyState === 'complete' ? init() :
      document.addEventListener('readystatechange', async () => document.readyState === 'complete' && init())
  })
  onDestroy(unSubscribePageChanges)
</script>

<style>
  .Post-container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: minmax(200px, 2fr) 1fr;
  }

  .Post {
    background-color: white;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
  }

  .Post-image {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    top: 0;
    left: 0;
  }

  .Post-title {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, .75);
    padding: 10px;
    color: white;
    box-sizing: border-box;
    bottom: 0;
  }

  .Post-title p time,
  .Post-title p span,
  .Post-title span {
    display: inline-flex;
    align-items: center;
  }

  .Post-title h2 {
    margin: 0
  }

  .Post-title p {
    margin: 0
  }

  .Post-content {
    padding: 10px;
    transition: all ease .5s;
  }

  .Post-comments {
    margin: 2em 0 0 0 0;
    padding: 10px;
  }

  .Social-media-container {
    background-color: white;
    display: flex;
    width: fit-content;
    padding: 0;
    border-radius: 10px;
    -webkit-box-shadow: 0 8px 30px rgba(0, 0, 0, .12);
    -moz-box-shadow: 0 8px 30px rgba(0, 0, 0, .12);
    box-shadow: 0 8px 30px rgba(0, 0, 0, .12);
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: scale(0) translateX(-120%) translateY(100px);
    transition: all ease .25s;
    opacity: 0;
  }

  .Social-media-container:hover {
    -webkit-box-shadow: 0 8px 30px rgba(0, 0, 0, .2);
    -moz-box-shadow: 0 8px 30px rgba(0, 0, 0, .2);
    box-shadow: 0 8px 30px rgba(0, 0, 0, .2);
  }

  .Social-media-container.isFloating {
    opacity: 1;
    height: auto;
    width: auto;
    transform: scale(1) translateX(-50%) translateY(0);
  }

  @media screen and (max-width: 992px) {
    .Post-container {
      grid-template-columns: minmax(200px, 2fr);
    }
  }
</style>

<svelte:head>
  <title> {post.meta_title || post.title}</title>

  <meta name="description" content="{post.meta_description || post.excerpt}">
  <link rel="canonical" href="https://erickmarcia.github.io/blog/{post.slug}">

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@Emarcia14" />
  <meta name="twitter:creator" content="@Emarcia14" />
  <meta name="twitter:title" content="{post.meta_title || post.title}" />
  <meta name="twitter:description" content="{post.meta_description || post.excerpt}" />
  <meta name="twitter:image" content="https://erickmarcia.github.io/{post.image}" />

  <meta property="og:title" content="{post.meta_title || post.title}" />
  <meta property="og:site_name" content="erickmarcia.github.io" />
  <meta property="og:description" content="{post.meta_description || post.excerpt}" />
  <meta property="og:image" content="https://erickmarcia.github.io/{post.image}" />
  <meta property="og:url" content="https://erickmarcia.github.io/blog/{post.slug}" />
  <meta property="og:locale" content="es_ES">
  <meta property="og:type" content="article">
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} on:scroll={checkScrollPosition} on:resize={onResizeWindow} />

<!-- <div class="post">
  <div class="post__container">
    <div class="post__image" style="background-image: url({post.feature_image})">
      <div class="post__title-container">
        <h2 class="post__title">{post.title}</h2>
        <div class="post__details">
          <span class="post__details-author">
            <UserIcon size="20" />
            &nbsp;&nbsp;{post.author}
          </span>
          &nbsp;&nbsp;•&nbsp;&nbsp;
          <time class="post__details-time" datetime={post.date}>
            <CalendarIcon size="20" />
            &nbsp;&nbsp;{timeFormatter(post.date)}&nbsp;&nbsp;
          </time>
          <span class="post__details-reading-time">
            <BookOpenIcon size="20" />
            &nbsp;&nbsp;{readingTime(post.html)}
          </span>
        </div>
      </div>
    </div>
    <div class="post__content" bind:this={postContentElement} on:click={postContentClick}>
    {@html post.html}
    </div>
    <SocialToolbox commentsElement={disqusElement} text={post.meta_title || post.title}
      postUrl="https://erickmarcia.github.io/blog/{post.slug}" twitterUsername="dartilesm"
      hashtags={post.primary_tag.slug} isFloating={isSocialToolBoxFloating} />
    <div class="post__comments">
      <div id="disqus_thread" bind:this={disqusElement} />
    </div>
  </div>
  <Sidebar currentPost={post} temary={allHeadingTexts} {onTemaryClick} {isStickySidebar} showTemary={windowWidth> 992}>
  </Sidebar>
</div> -->

<div class="Post-container">
  <div class="Post">
    <div class="Post-image" style="background-image: url({post.feature_image})">
      <div class="Post-title">
        <h2>{post.title}</h2>
        <p>
          <time datetime={post.date}>
            <CalendarIcon size="20" />
            &nbsp;&nbsp;{timeFormatter(post.date)}&nbsp;&nbsp;
          </time>
          <span>
            <BookOpenIcon size="20" />
            &nbsp;&nbsp;{readingTime(post.html)}
          </span>
        </p>
      </div>
    </div>
    <div class="Post-content" bind:this={postContentElement} on:click={postContentClick}>
      <!-- <div class="container"> -->
      <article class="content">
        {@html post.html}

        <p>Y esto es todo. Espero que te pueda servir.</p>

        <p><b>Si te gusta mi contenido</b>, puedes "invitarme" a un café ☕️ para
          apoyarme. 👇🏻</p>
        <div class="mb-3"><a href="https://ko-fi.com/C0C44WHUS#checkoutModal" target="_blank"><img
              src="/media/ko-fi.png" alt="¿Me invitas a un café?"></a></div>

        <div>
          <!-- <div class="categories">
            <a href="/blog/category/github" class="categories__item"><span>#</span>{post.primary_tag}</a>
            <a href="/blog/category/github" class="categories__item"><span>#</span>{post.secondary_tag}</a>
             </div> -->
        </div>

      </article>
      <Bio />
      <!-- </div> -->
    </div>
    <div class="Social-media-container" class:isFloating={isSocialToolBoxFloating}>
      <SocialToolbox commentsElement={disqusElement} buttonText="Compartir" text={post.meta_title || post.title}
        postUrl="https://erickmarcia.github.io/blog/{post.slug}" twitterUsername="@Emarcia14" />
    </div>
    <div class="Post-comments">
      <div id="disqus_thread" bind:this={disqusElement} />
    </div>
  </div>
  <Sidebar currentPost={post} temary={allHeadingTexts} {onTemaryClick} {isStickySidebar} showTemary={windowWidth> 992}>
  </Sidebar>
</div>