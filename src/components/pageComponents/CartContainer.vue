<template>
  <div v-if="isEmpty">
    <h2 class="cart-container__message">Your cart appears to be empty.</h2>
  </div>

  <div class="cart-container" v-else>
    <CartContainerItem
      v-for="product in cart"
      v-bind:key="product.id"
      v-bind="product"
    ></CartContainerItem>
  </div>
</template>

<script>
  import { store } from '../../store';
import CartContainerItem from './CartContainerItem';

export default {
  name: 'CartContainer',
  data() {
    return { storeState: store.state } 
  },
  components: {
    CartContainerItem,
  },
  computed: {
    isEmpty() {
      const cart = this.storeState.cart;

      if (cart.length > 0) {
        return false;
      }

      return true;
    },
    cart() {
      return this.storeState.cart;
    }
  },
}
</script>

<style>
  .cart-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 290px;
    padding: 10px;
  }

  .cart-container__message {
    margin: 30px 0;
  }

  @media (min-width: 544px) {
    .cart-container {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
      max-width: none;
      padding: 15px;
    }
  }

  @media (min-width: 768px) {
    .cart-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 992px) {
    .cart-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>