<script>
  import { TwitterIcon, GithubIcon, GitlabIcon } from 'svelte-feather-icons';
  // import { FacebookIcon } from 'vue-feather-icons'

</script>

<div class="social_icons my-5" wfd-id="251">
  <a href="https://twitter.com/Emarcia14" target="_blank">
    <TwitterIcon size="24" class="twitter-icon" currentColor="yellow" />
  </a>
  <a href="https://github.com/erickmarcia" target="_blank">
    <GithubIcon size="24" class="Github-icon" currentColor="yellow" />
  </a>
  <a href="https://gitlab.com/mar_cia14" target="_blank">
    <GitlabIcon size="24" class="Gitlab-icon" currentColor="yellow" />
  </a>
  <!-- <GitlabIcon size="1.5x" class="custom-class" /> -->
</div>


<style>
  /*effect hover (img-portfolio)*/

  .im .twitter-icon {
    width: 350px;
    height: 190px;
  }

  .mar {
    margin: 12px;
  }

  .social_icons a {
    /* color: rgba(5, 54, 77, .5); */
    font-size: 20px;
    display: inline-block;
    margin-right: 16px;
    cursor: pointer;
    -webkit-transition: all .4s ease 0s;
    -moz-transition: all .4s ease 0s;
    -o-transition: all .4s ease 0s;
    transition: all .4s ease 0s;
  }
</style>