<template>
  <div id="app">
    <component v-bind:is="componentName"></component>
  </div>
</template>

<script>
import { store } from './store';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import CartPage from './components/CartPage';

export default {
  name: 'app',
  components: {
    HomePage,
    AboutPage,
    ShopPage,
    CartPage,
  },
  data() {
    return {
      storeState: store.state,
    }
  },
  computed: {
    componentName() {
      const section = this.storeState.section;
      const sectionUCase = section.charAt(0).toUpperCase() + section.substring(1);
      return sectionUCase + 'Page';
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans:400,600");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fff;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

h1 {
  font-size: 2em;
  font-family: "Bree Serif", "Helvetica Neue", Helvetica, serif;
  font-weight: 500;
  margin-bottom: 20px;
}

h1, h2, h3 {
  line-height: 1.1;
  text-align: center;
}

h3 {
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  border-radius: 5px;
}

.text {
  margin: 0 auto;
  max-width: 730px;
  padding: 10px 0;
}
</style>
