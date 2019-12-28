<template>
  <div class="shop-container">
    <ShopContainerItem
      v-for="product in inventory"
      v-bind:key="product.id"
      v-bind="product"
    ></ShopContainerItem>
  </div>
</template>

<script>
  import { store } from '../../store';
  import ShopContainerItem from './ShopContainerItem';

  export default {
    name: 'ShopContainer',
    data() {
      return { storeState: store.state } 
    },
    components: {
      ShopContainerItem,
    },
    computed: {
      inventory() {
        return this.storeState.inventory;
      },
    },
    methods: {
      handleViewClick(itemIndex) {
        store.viewItem(itemIndex);
      },
    }
  }
</script>

<style>
  .shop-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 290px;
    padding: 10px;
  }

  @media (min-width: 544px) {
    .shop-container {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      max-width: none;
      padding: 15px;
    }
  }

  @media (min-width: 768px) {
    .shop-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 992px) {
    .shop-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>