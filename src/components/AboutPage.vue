<template>
  <MainLayout>
    <HeroImage></HeroImage>

    <section class="section-one">
      <h1>Tie-downs for Consumer Safety</h1>
      
      <div class="container">
        <p class="text"><b>The G8tOR</b> system will equip your vehicle or trailer with the ultimate tie down experience. This system includes: four stake pocket anchor points that have been universally designed to fit most stake pockets, two straps with ratchets, and two G8tORs installed to the strap ends. One end has the small G8tOR that can attach to any G8tOR anchor point. The other end has the Large G8tOR which gives you the advantage of being able to wrap around objects and re-secure them to the original starting point utilizing only one anchor point. This system gives you the advantage and confidence to safely secure large, heavy, and irregular shaped objects while at the same time the needed flexibility to handle more delicate projects where the traditional S or J style hooks would easily become unfastened.</p>
      </div>
    </section>

    <section class="section-two">
      <div class="container">
        <div class="about-img-grid">
          <div>
            <img src="assets/img/about-img1.jpg">
          </div>

          <div>
            <img src="assets/img/about-img2.jpg">
          </div>

          <div>
            <img src="assets/img/about-pro-img1.jpg">
          </div>

          <div>
            <img src="assets/img/about-pro-img2.jpg">
          </div>
        </div>
      </div>
    </section>

    <section class="section-three">
      <div class="container">
        <p class="text">According to the newest regulations from the U.S. Department of Transportation; "proper use of tie downs require each tie down be attached and secured in a manner that prevents it from becoming loose, unfastening, opening or releasing while the vehicle is in transit." (FMCSA, 2006) This is exactly what The G8tOR does! It is safe, secure, and very reliable!</p>
      </div>
    </section>
  </MainLayout>  
</template>

<script>
import MainLayout from './layouts/MainLayout';
import HeroImage from './pageComponents/HeroImage';

export default {
  name: 'AboutPage',
  components: {
    MainLayout,
    HeroImage,
  },
}
</script>

<style>
.about-img-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  margin: 0 auto;
  max-width: 650px;
}
</style>