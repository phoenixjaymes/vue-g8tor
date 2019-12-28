<template>
  <MainLayout>
    <section class="hero-home">
      <h1 class="hero-home__text">The No Worry Tie-Down System</h1>
    </section>

    <section class="video">
      <div class="video__wrap container">
        <img src="assets/img/video-place-holder.jpg">
      </div>
    </section>

    <section class="section-two p-y-2">
      <div class="container">

        <div class="home-img-grid">
          <figure class="home-fig col-sm-6 offset-md-1 col-md-5 col-xl-4 offset-xl-2 p-b-1">
            <img class="home-fig__img" src="assets/img/g8tor-275.jpg">
            <figcaption class="home-fig__caption m-t-1">The complete G8tOR system will equip your vehicle or trailer with the ultimate tie down experience.</figcaption>
          </figure>

          <figure class="home-fig col-sm-6 col-md-5 col-xl-4 p-b-1">
            <img class="home-fig__img" src="assets/img/g8tor-pro-275.jpg">
            <figcaption class="home-fig__caption m-t-1">The G8tOR Pro was designed for use with heavier duty applications. It allows for chains, wire, or larger straps.</figcaption>
          </figure>
        </div>

        <a class="btn-shop" href="" v-on:click.prevent="handleActionClick">Get the G8TOR</a>

      </div>
    </section>

    <section class="section-three">
      <div class="container">
          <div>
            <p class="text">The G8tor will equip your vehicle or trailer with the ultimate tie down system to secure your load safely and securely.</p>
          </div> 
      </div>
    </section>
  </MainLayout>
</template>


<script>
import { store } from '../store';
import MainLayout from './layouts/MainLayout';

export default {
  name: 'HomePage',
  components: {
    MainLayout,
  },
  methods: {
    handleActionClick() {
      store.changeSection('shop');
    }
  }
}
</script>

<style>

.hero-home {
  position: relative;
  background: url("../assets/g8tor-hero-test1.jpg") center/cover no-repeat #fff;
  height: 200px;
  margin-top: 85px; }
  @media (min-width: 544px) {
    .hero-home {
      height: 250px;
      margin-top: 70px; } }
  @media (min-width: 768px) {
    .hero-home {
      height: 300px; } }
  @media (min-width: 992px) {
    .hero-home {
      height: 350px; } }
  @media (min-width: 1200px) {
    .hero-home {
      height: 400px; } }
  .hero-home__text {
    position: absolute;
    bottom: 20px;
    left: 0;
    color: #fff;
    margin-bottom: 0;
    text-shadow: 0px 1px 3px black;
    width: 100%; }
    @media (min-width: 768px) {
      .hero-home__text {
        font-size: 3em; }
}

.video {
  background: #F3F3F3;
  padding: 40px 0;
  text-align: center;
}

.video__wrap {
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

.home-img-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;

  margin: 0 auto;
  max-width: 700px;
}

@media (min-width: 544px) {
  .home-img-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.home-fig {
  text-align: center; }
  .home-fig__img {
    border-radius: 50%;
    padding: 0 40px; }
  .home-fig__caption {
    text-align: left; }

 .btn-shop {
  display: block;
  margin: 40px auto 20px;
  width: 150px;

  color: #0275d8;
  background-image: none;
  background-color: transparent;
  border: 1px solid #0275d8;

  line-height: 1.25;
  text-align: center;

  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;

  text-decoration: none;
}

.btn-shop:hover {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-shop:active {
  color: #fff;
  background-color: #014682;
  border-color: #01315a;
}

</style>