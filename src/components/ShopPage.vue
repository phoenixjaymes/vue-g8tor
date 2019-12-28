<template>
  <MainLayout>
    <HeroImage></HeroImage>

    <section class="section-one p-y-2">
      <h1 class=" hero__text">G8TOR tie-down products</h1>
    
      <div class="container">
        <ShopContainer></ShopContainer>
      </div>
    </section>

    <ShopItemSingle v-if="isSingleItemShown"></ShopItemSingle>
    
  </MainLayout>
</template>

<script>
import { store } from '../store';
import MainLayout from './layouts/MainLayout';
import HeroImage from './pageComponents/HeroImage';
import ShopContainer from './pageComponents/ShopContainer';
import ShopItemSingle from './pageComponents/ShopItemSingle';

export default {
  name: 'ShopPage',
  data() {
    return { storeState: store.state };
  },
  components: {
    MainLayout,
    HeroImage,
    ShopContainer,
    ShopItemSingle,
  },
  computed: {
    isSingleItemShown() {
      return this.storeState.isSingleItemShown;
    }
  }
}
</script>