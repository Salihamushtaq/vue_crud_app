<script setup>
import { RouterView } from 'vue-router'
</script>

<template>


  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  display: flex;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: lightskyblue;
}
nav a:hover,
nav a:active,
nav a.active{
    border: 1px solid #c44a0b;
    border-radius: 1rem;
    color: #c44a0b;
    box-shadow: grey;
  }
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: right;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

}
</style>
