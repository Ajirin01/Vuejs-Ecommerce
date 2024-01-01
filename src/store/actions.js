// Define actions object
const actions = {
    selectProduct({ commit }, productId) {
      commit('setSelectedProduct', productId);
    },
  
    ADD_TO_CART({ commit }, product) {
      commit('addToCart', product);
    },
  
    REMOVE_FROM_CART({ commit }, productId) {
      commit('removeFromCart', productId);
    },

    UPDATE_CART_ITEMS({ commit }, updatedItems) {
        commit('updateCart', updatedItems);
    },

    SET_CHECKOUT_TOTAL({ commit }, checkoutTotal) {
        commit('setCheckoutTotal', checkoutTotal);
    }
  
    // Other actions if needed
};
  
  // Export the actions object
export default actions;
  