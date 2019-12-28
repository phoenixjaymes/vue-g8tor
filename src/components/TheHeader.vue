<template>
  <header class="main-header">
    <div class="container">
      <nav class="main-nav">  
        <a class="main-nav__logo" href="#/" v-on:click.prevent="handleNavClick('home')"><img class="logo" src="assets/img/g8tor-logo.svg" alt="G8tor logo"></a>

        <ul class="main-menu main-nav__menu">
          <li class="main-menu__item">
            <a class="" href="#/" v-on:click.prevent="handleNavClick('home')">Home</a>
          </li>

          <li class="main-menu__item">
            <a class="" href="#about" v-on:click.prevent="handleNavClick('about')">About</a>
          </li>

          <li class="main-menu__item">
            <a class="" href="#shop" v-on:click.prevent="handleNavClick('shop')">Shop</a>
          </li>

          <li class="main-menu__item">
            <a class="" href="#cart" v-on:click.prevent="handleNavClick('cart')">Cart ( <span style="color:yellow;font-weight: bold"> {{cartTotal}}</span> )</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { store } from '../store';

export default {
  name: 'TheHeader',
  data() {
    return { storeState: store.state };
  },
  computed: {
    cartTotal() {
      const cart = this.storeState.cart;

      if (cart.length === 0) {
        return 0;
      }

      return cart.length;
    }
  },
  methods: {
    handleNavClick(section) {
      store.changeSection(section);
    }
  }
}
</script>

<style>
  .main-header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    background: #6C7071;
    height: 85px;
    width: 100%; 
  }

  @media (min-width: 544px) {
    .main-header {
      height: 70px;
    }
  }

  .main-nav {
  display: flex;
  flex-wrap: wrap;
  height: 85px;
  margin: 0;
  padding-top: 5px; }
  @media (min-width: 544px) {
    .main-nav {
      height: 70px;
      flex-wrap: nowrap; } }
  .main-nav__menu {
    flex-basis: 100%;
    margin-left: auto; }
    @media (min-width: 544px) {
      .main-nav__menu {
        flex-basis: auto; } }

  .logo {
  height: 45px; }
  @media (min-width: 544px) {
    .logo {
      height: 60px; } }

  .main-menu {
  list-style: none;
  margin-top: 3px;
  padding: 0;
  text-align: center;
  transition: top .5s ease-out;
  width: 100%; }
  @media (min-width: 544px) {
    .main-menu {
      margin-top: 17px;
      text-align: right; } }
  .main-menu a {
    font-weight: bold;
    text-decoration: none; }
    .main-menu a:link, .main-menu a:visited {
      color: #fff; }
    .main-menu a:hover, .main-menu a:active {
      color: #FFE800; }
  .main-menu__item {
    display: inline-block;
    padding: 0 10px; }
</style>