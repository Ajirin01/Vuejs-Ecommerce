// Inside your Vue component or main.js (or main entry point)
import 'materialize-css/dist/css/materialize.min.css'; // Import Materialize CSS

// Import Materialize JS or specific components as needed
import M from 'materialize-css/dist/js/materialize.min.js'; // Import Materialize JS

const mutations = {
    setSelectedProduct(state, productId) {
      // Find the product based on productId and set it as the selected product
      state.selectedProduct = state.products.find(product => product.id === productId);
    },

    addToCart(state, newItem) {
      const existingItem = state.cart.find(item => item.product_id === newItem.product_id);
  
      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If the item doesn't exist, push the new item to the cart
        state.cart.push(newItem);
      }

      M.toast({html: "Item Successfully added to cart!"});
    },

    removeFromCart(state, productId) {
      const index = state.cart.findIndex(item => item.product_id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
      M.toast({html: "Item Successfully removed!"});
    },

    updateCart(state, items) {
      state.cart = items; 
      M.toast({html: "Cart Successfully updated!"});
    },

    setCheckoutTotal(state, chechoutTotal) {
      state.checkoutTotal = chechoutTotal
    }
    // Other mutations if needed
  }
export default mutations