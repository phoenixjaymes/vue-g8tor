<template>
  <div class="container">
    <h3>{{heading}}</h3>

    <div class="viewed">
      <div class="viewed__nav">
        <span class="viewed__nav-left" v-on:click="handleLeftClick"><NavCheveron chev-direction="left"></NavCheveron></span>
        <span class="viewed__nav-right" v-on:click="handleRightClick"><NavCheveron chev-direction="right"></NavCheveron></span>
      </div>
      
      <div class="viewed__wrap"
        v-bind:style="styleObject"
        ref="viewedWrap"
      >
        <figure class="viewed__figure"
          v-for="item in itemsToView"
          v-bind:key="item.id"
        >
          <img class="viewed__img" v-bind:src="'assets/img/' + item.image" v-bind:alt="item.name">
        </figure>
      </div>
    </div>
  </div>
</template>


<script>
import { store } from '../../store';
import NavCheveron from './NavCheveron';

export default {
  name: 'CartViewedItems',
  data() {
    return { 
      storeState: store.state,
      xlImgShowing: 7,
      styleObject: { left: '0' },
    };
  },
  components: { NavCheveron },
  computed: {
    heading() {
      if (this.storeState.itemsViewed.length) {
        return 'Recently Viewed Items';
      }
      return 'Suggested Items';
    },
    itemsToView() {
      let itemsToView;
      
      if (this.storeState.itemsViewed.length) {
        itemsToView = this.storeState.itemsViewed;
      } else {
        itemsToView = this.storeState.suggestedItems;
      }

      const viewed = this.storeState.inventory.filter((item) => {
        return itemsToView.includes(item.id); 
      });

      return viewed;
    },
    cntCartItems() {
      return this.storeState.cart.length;
    }
  },
  methods: {
    getMaxPixelsLeft() {
      let viewedCount;
      
      if (this.storeState.itemsViewed.length) {
        viewedCount = this.storeState.itemsViewed.length;
      } else {
        viewedCount = this.storeState.suggestedItems.length;
      }

      const viewedRef = this.$refs.viewedWrap;
      const viewedRefWidth = viewedRef.clientWidth;
      const viewedRefChildWidth = viewedRef.childNodes[0].clientWidth;

      // Amount of children that will fit in parent
      const itemsInView = Math.floor(viewedRefWidth/viewedRefChildWidth);
      // How many pixels needed to show all children
      if (itemsInView < viewedCount) {
        return (viewedCount - itemsInView) * viewedRefChildWidth
      }
      return 0;
    },
    handleRightClick() {
      const viewedRef = this.$refs.viewedWrap;
      const leftOffset = viewedRef.offsetLeft;
      const childWidth = viewedRef.childNodes[0].clientWidth;
      const maxPixelsLeft = this.getMaxPixelsLeft();

      // Move condition
      if (maxPixelsLeft !== 0 && leftOffset > (-maxPixelsLeft) ) {
        this.styleObject = { left: leftOffset + (-childWidth) +  'px' };
      }
    },
    handleLeftClick() {
      const viewedRef = this.$refs.viewedWrap;
      const leftOffset = viewedRef.offsetLeft;
      const childWidth = viewedRef.childNodes[0].clientWidth;
      const maxPixelsLeft = this.getMaxPixelsLeft();

      // Move condition
      if (maxPixelsLeft !== 0 && leftOffset < 0 ) {
        this.styleObject = { left: leftOffset + childWidth +  'px' };
      }
    }
  }
}
</script>

<style>
  .viewed {
    position: relative;

    height: 160px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .viewed__nav {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;

    height: 160px;
    width: 100%;
  }

  .viewed__nav-left,
  .viewed__nav-right {
    position: absolute;

    background: rgba(200, 200, 200, .6);
    cursor: pointer;
    height: 70px;
    padding-top: 15px;
    width: 40px;
  }

  .viewed__nav-left:hover,
  .viewed__nav-right:hover {
    background: rgba(200, 200, 200, .8);
  }

  .viewed__nav-right {
    right: 0;
  }

  .viewed__wrap {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;

    height: 160px;
    width: 100%;
  }

  @media (min-width: 768px) {
    
  }

  .viewed__figure {
    flex: 1 0 160px;


    height: 160px;
    padding: 10px;
    text-align: center;
  }

  .viewed__img {
    border-radius: 5px;
    cursor: pointer;
    max-height: 100%;
  }

  .viewed__caption {
    text-align: left; }


@media (min-width: 768px) {

}

@media (min-width: 992px) {

}

@media (min-width: 1200px) {

}
</style>