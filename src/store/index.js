import { createStore } from 'vuex'

import actions from './actions'
import mutations from './mutations'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 19.99,
        imageUrl: 'https://source.unsplash.com/random/400x300'
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
        imageUrl: 'https://source.unsplash.com/random/400x301'
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description for Product 3',
        price: 29.99,
        imageUrl: 'https://source.unsplash.com/random/400x302'
      },
      {
        id: 4,
        name: 'Product 4',
        description: 'Description for Product 4',
        price: 14.99,
        imageUrl: 'https://source.unsplash.com/random/400x303'
      },
      {
        id: 5,
        name: 'Product 5',
        description: 'Description for Product 5',
        price: 39.99,
        imageUrl: 'https://source.unsplash.com/random/400x304'
      },
      {
        id: 6,
        name: 'Product 6',
        description: 'Description for Product 6',
        price: 49.99,
        imageUrl: 'https://source.unsplash.com/random/400x305'
      },
      {
        id: 7,
        name: 'Product 7',
        description: 'Description for Product 7',
        price: 54.99,
        imageUrl: 'https://source.unsplash.com/random/400x306'
      },
      {
        id: 8,
        name: 'Product 8',
        description: 'Description for Product 8',
        price: 19.99,
        imageUrl: 'https://source.unsplash.com/random/400x307'
      },
      {
        id: 9,
        name: 'Product 9',
        description: 'Description for Product 9',
        price: 64.99,
        imageUrl: 'https://source.unsplash.com/random/400x308'
      },
      {
        id: 10,
        name: 'Product 10',
        description: 'Description for Product 10',
        price: 74.99,
        imageUrl: 'https://source.unsplash.com/random/400x309'
      }
      // Add more products if needed
    ], // Store your products here, replace this with your actual product data
    cart: [],
    selectedProduct: null, // Store the selected product details
    checkoutTotal: 0,
    checkoutProducts: []
  },
  mutations: mutations,
  actions: actions,
  getters: {
    // Getter to retrieve the selected product
    getSelectedProduct: state => state.selectedProduct,
    getProductById: state => id => {
      return state.products.find(product => product.id === id);
    }
  }
});
