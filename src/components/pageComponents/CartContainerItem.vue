<template>
  <div class="cart-item m-b-1">
    <img class="cart-item__img" v-bind:src="'assets/img/' + image" v-bind:alt="name">

    <p class="cart-item__description">
      <span class="cart-item__name">{{name}}</span><br>
      <span class="cart-item__in-stock">In stock: {{itemsOnHand}}</span><br>
      <span>Price: ${{price}}</span><br>
      <a href="" v-on:click.prevent="handleDeleteClick(id)">Delete</a>
    </p>
    
    <div class="cart-item__price-wrap">
      <span class="cart-item__price">${{computedPrice}}</span>
      <input
        class="cart-item__quantity"
        type="number"
        value=""
        maxlength="3"
        name="qnt"
        id="qnt"
        min="1"
        v-bind:max="itemQtyMax"
        v-model.number="itemQty"
        v-on:input="handleQuantityInput(itemQty)">
    </div>
  </div>
</template>

<script>
import { store } from '../../store';

export default {
  name:'CartContainerItem',
  props: {
    id: String,
    name: String,
    price: Number,
    image: String,
    qty: Number,
    onHand: Number,
  },
  data(){
    return {
      itemQty: this.qty,
      onHandQty: this.onHand,
      itemQtyMax: this.onHand,
    }
  },
  computed: {
    computedPrice() {
      return (this.price * this.itemQty).toFixed(2);
    },
    itemsOnHand() {
      return this.onHand - this.itemQty;
    }
  },
  methods: {
    handleQuantityInput(itemQty) {
      store.updateCartQuantity(this.id, itemQty);
    },
    handleDeleteClick(idToRemove) {
      store.removeFromCart(idToRemove);
    },
  }
}
</script>

<style>
.cart-item {
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%; }
  
  .cart-item__img {
    height: 100px;
    width: 100px; }

  .cart-item__description {
    flex: 1;
    padding-left: 10px; }

  .cart-item__name {
    font-weight: bold; }

  .cart-item__in-stock {
    color: green; }

  .cart-item__price-wrap {
    display: flex;
    flex-basis: 100%;

    background: #fff;
    border-radius: 5px;
    line-height: 30px;
    margin-top: 10px;
    padding-left: 5px;
  }

  .cart-item__price {
    flex: 1;
  }

  .cart-item__quantity {
    border: solid 1px #ccc;
    border-radius: 5px;
    height: 30px;
    padding: 0 1px 0 2px;
    width: 50px;
  }
</style>