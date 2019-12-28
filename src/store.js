import { products } from './data/products';

export const store = {
  state: {
    inventory: products, 
    section: 'home',
    qty: '',
    cart: [],
    suggestedItems: ['3', '5', '7', '12'],
    itemsViewed: [],
    addToCartMsg: '',
    isSingleItemShown: false,
    singleItemDetail: {
      name: '',
      image: '',
      price: '',
    },
  },
  changeSection(name) {
    this.state.section = name;
    this.hideSingleItem();
  },
  addToCart(itemToAdd) {
    const cart = this.state.cart;
    const cartCount = cart.length;
    let inCart = false;
    let newCartCount;

    for (let item of cart) {
      if (itemToAdd.id === item.id) {
        inCart = true;
        break;
      }
    }

    if (cartCount === 0 || inCart === false) {
      const inventoryItem = this.state.inventory.filter(item => itemToAdd.id === item.id);
      itemToAdd.onHand = inventoryItem[0].qty;
      newCartCount = this.state.cart.push(itemToAdd);
    }

    if (newCartCount > cartCount) {
      this.state.addToCartMsg = 'Item added to cart';
    } else {
      this.state.addToCartMsg = 'Unable to add item to cart';
    }
  },
  removeFromCart(idToRemove) {
    const newCart = this.state.cart.filter(item => item.id !== idToRemove);

    this.state.cart = newCart;
  },
  showSingleItem() {
    this.state.isSingleItemShown = true;
  },
  hideSingleItem() {
    this.state.isSingleItemShown = false;
  },
  addSingleItemDetail(index) {
    const itemToAdd = this.state.inventory.filter(item => item.id === index);
    this.state.singleItemDetail = itemToAdd[0];
  },
  addToRecentlyViewed(index) {
    if (!this.state.itemsViewed.includes(index)) {
      this.state.itemsViewed.push(index);
    }
  },
  updateCartQuantity(itemId, qty) {

    const newCart = this.state.cart.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          qty: qty,
        }
      }
       return item;
    });

    this.state.cart = newCart;
  },
}