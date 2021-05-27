<script>
  export let segment;
</script>


<style>
  nav {
    display: flex;
    flex: 1;
    /* align-items: flex-end; */
    align-items: center;
    font-family: Rubik, sans-serif;
    font-weight: 700;
    /* justify-content: flex-end; */
    justify-content: center;
    text-transform: uppercase;
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: '';
    position: absolute;
    transition: transform .3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #AAA;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
  }
</style>

<nav>
  <a class='{segment === undefined ? "selected" : ""}' href='.'>home</a>
  <a class='{segment === "about" ? "selected" : ""}' href='about'>about</a>
  <a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
  <a rel=prefetch class='{segment === "logros" ? "selected" : ""}' href='logros'>logros</a>
</nav>