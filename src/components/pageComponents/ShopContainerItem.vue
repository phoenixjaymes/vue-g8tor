<template>
  <div>
    <figure class="p-y-1 shop-fig">
      <img v-on:click="handleImageClick" class="shop-fig__img" v-bind:src="'assets/img/' + image">
      <figcaption class="shop-fig__caption">
        <p>{{name}}<br />
        ${{price}}<br />
        </p>
      </figcaption>

      <button
        type="button"
        class="shop-button"
        v-on:click="handleButtonClick"
        v-if="qty > 0"
      >{{buttonMsg}}</button>

      <div class="out-of-stock" v-else>Out of Stock</div>
    </figure>
  </div>
</template>

<script>
import { store } from '../../store';

export default {
  name: 'ShopContainerItem',
  props: {
    id: String,
    name: String,
    price: Number,
    image: String,
    qty: Number,
  },
  data() {
    return { buttonMsg: 'Add To Cart' };
  },
  methods: {
    handleButtonClick() {
      const cartItem = {
        id: this.id,
        name: this.name,
        price: this.price,
        image: this.image,
        qty: 1,
      };

      store.addToCart(cartItem);
      this.buttonMsg = 'Item in cart';

    },
    handleImageClick() {
      store.addSingleItemDetail(this.id);
      store.showSingleItem();
      store.addToRecentlyViewed(this.id);
    }
  }
}
</script>

<style>
  .shop-fig {
    background: #fff;
    border: solid 1px #000;
    border-radius: 5px;
    padding: 10px 10px;
    text-align: center;
  }

  .shop-fig__img {
    border-radius: 5px;
    cursor: pointer; }

  .shop-fig__caption {
    margin-bottom: 10px;
  }

  .shop-button {
    background: #0275d8;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: .875rem;
    height: 32px;
    line-height: 32px;
    padding: 0 8px;
    width: 90px;
  }

  .shop-button:hover {
    background-color: #025aa5;
  }

  .shop-button:active {
    background-color: #014682;
  }

.out-of-stock {
  color: red;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
  padding: 3px;
}

  @media (min-width: 544px) {
    .shop-fig {
      padding: 15px 15px;
    }
  }

  @media (min-width: 768px) {
    .shop-fig {

    }
  }

  @media (min-width: 992px) {
    .shop-fig {

    }
  }
</style>