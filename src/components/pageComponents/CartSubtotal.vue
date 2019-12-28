<template>
  <div class="container subtotal" v-if="isShown">
    <p>
      <span v-if="eligible">Eligible for FREE Shipping!</span>
      <span v-else>Purchases of $200 or more are eligible for free shipping</span>
    </p>
    <p class="subtotal__total">Subtotal ({{cartCount}} items): <span>${{cartTotal}}</span></p>
  </div>
</template>

<script>
import { store } from '../../store';

export default {
  name: 'CarSubtotal',
  data() {
    return {
      storeState: store.state,
    };
  },
  computed: {
    isShown() {
      return this.storeState.cart.length;
    },
    eligible() {
      if (this.cartTotal >= 200) {
        return true;
      }
      return false;
    },
    cartTotal() {
      const intialValue = 0;
      const sum = this.storeState.cart.reduce((accumulator, item) => {
        return accumulator + (item.qty * item.price);
      }, intialValue);

      return sum.toFixed(2);
    },
    cartCount() {
      const intialValue = 0;
      const sum = this.storeState.cart.reduce((accumulator, item) => {
        return accumulator + item.qty;
      }, intialValue);

      return sum;
    }
  },
}
</script>

<style>
.subtotal {
  margin-bottom: 20px;
  padding-top: 10px;
}

.subtotal {
  border-bottom: 1px solid #555;
  font-weight: bold;
}

.subtotal__total {
  text-align: right;
}
.subtotal__total span {
    color: #226;
}
</style>