<template>
  <MainLayout>
    <HeroImage></HeroImage>

    <section class="section-one p-y-2">
      <h1>Shopping Cart</h1>
      
      <div class="container">
        <CartContainer></CartContainer>
      </div>  
    </section>

    <!-- Subtotal -->
    <section>
      <CartSubtotal></CartSubtotal>
    </section>

    <!-- Recently viewed items -->
    <section class="section-three">
      <CartItemsView></CartItemsView>
    </section>
  </MainLayout>
</template>

<script>
import MainLayout from './layouts/MainLayout';
import HeroImage from './pageComponents/HeroImage';
import CartContainer from './pageComponents/CartContainer';
import CartSubtotal from './pageComponents/CartSubtotal';
import CartItemsView from './pageComponents/CartItemsView';

export default {
  name: 'CartPage',
  components: {
    MainLayout,
    HeroImage,
    CartContainer,
    CartSubtotal,
    CartItemsView,
  },
}
</script>