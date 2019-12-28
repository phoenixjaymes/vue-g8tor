<template>
  <div class="main-container">
    <TheHeader></TheHeader>
    <main class="main-content m-b-0">
      <slot></slot>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '../TheHeader';
import TheFooter from '../TheFooter';

export default {
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>

<style>
.main-container {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
}
.main-content {
  flex: 1;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px; }
  .container::after {
    content: "";
    display: table;
    clear: both; }

  @media (min-width: 544px) {
    .container {
      max-width: 576px; } }

  @media (min-width: 768px) {
    .container {
      max-width: 720px; } }

  @media (min-width: 992px) {
    .container {
      max-width: 940px; } }
      
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px; } }

/* Home and About */
.section-one,
.section-two,
.section-three {
  padding: 34px 0;
}

.section-one {
  background: #F3F3F3;
  color: #000; }

.section-two {
  background: #2b2d2f;
  color: #fff; }

.section-three {
  background: transparent; }
</style>
