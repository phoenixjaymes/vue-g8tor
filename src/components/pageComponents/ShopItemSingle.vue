<template>
  <div class="view-item">
    <div class="view-item__close">
      <button v-on:click="handleCloseClick" type="button" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <h4 class="view-item__name">{{itemName}}</h4>
    
    <img v-bind:src="'assets/img/' + itemImage" v-bind:alt="itemName">

    <p>${{itemPrice}}</p>
  </div>
</template>

<script>
import { store } from '../../store';

export default {
  name: 'ShopItemSingle',
  data() {
    return { storeState: store.state };
  },
  computed: {
    itemName() {
      return this.storeState.singleItemDetail.name;
    },
    itemImage() {
      return this.storeState.singleItemDetail.image;
    },
    itemPrice() {
      return this.storeState.singleItemDetail.price;
    }
  },
  methods: {
    handleCloseClick() {
      store.hideSingleItem();
    }
  }
}
</script>

<style>
.view-item {
  position: fixed;
  left: calc(50% - 150px);
  top: calc(50% - 200px);

  background: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  height: 400px;
  padding: 10px;
  text-align: center;
  width: 300px;
}

.view-item__name {
  margin-bottom: 10px;
}

.view-item__close {
  position: relative;
  height: 26px;
  margin-bottom: 10px;
}

.view-item__close button {
  position: absolute;
  right: 0;
  top: 0;

  background: none;
  border: none;
  color: #bbb;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
}

.view-item__close button:hover {
  color: #888;
}
</style>