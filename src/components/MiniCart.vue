<template>
  <div class="mini-cart">
    <span class="cart-total">${{ cartTotal }}</span>
    <span class="cart-icon">
      <i class="material-icons">shopping_cart</i>
    </span>
    <span class="cart-count">{{ cartItemCount }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    cartItemCount() {
      return this.$store.state.cart.length; // Example cart item count (Replace with your logic)
    },
    cartTotal() {
        let total = 0;

        this.$store.state.cart.forEach(cartItem => {
            // Find the product based on the product_id from the cart item
            let product = this.$store.state.products.find(prod => prod.id === cartItem.product_id);

            // If product is found, calculate the total cost
            if (product) {
                total += product.price * cartItem.quantity;
            }
        })

        return total
    }
  }
};
</script>

<style scoped>
/* Add styles for the mini cart */
.mini-cart {
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 40px
}

.cart-icon {
  font-size: 24px;
  margin-right: 10px;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -4px;
  color: white;
  font-size: 15px;
  padding: 4px;
  border-radius: 50%;
  height: 20px
}
</style>
