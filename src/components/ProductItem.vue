<template>
  <div class="product-item" @mouseenter="showOverlay = true" @mouseleave="showOverlay = false">
    <!-- Display product details using Material Design components -->
    <div class="card">
      <div class="card-image">
        <img :src="product.imageUrl" alt="Product Image">
        <span class="card-title">{{ product.name }}</span>
        <div class="overlay" v-if="showOverlay">
            <router-link :to="'/product/' + product.id" class="rounded">
                <button class="add-to-cart-btn waves-effect waves-light btn rounded" @click="addToCart">
                Add to Cart
                </button>
            </router-link>
        </div>

      </div>
      <div class="card-content">
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
      </div>
      <!-- Other Material Design components for actions, buttons, etc. -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showOverlay: false
    };
  },
  methods: {
    addToCart() {
      // Logic to add the product to the cart
      // You may emit an event to inform the parent component about adding this product to the cart
    }
  }
  // Other logic for the component
}
</script>

<style scoped>
/* Component-specific styles */
.product-item {
  position: relative;
  display: inline-block;
  /* Set the width, height, and other styles for the product item container */
}

.card {
  /* Define styles for the card */
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust the opacity and color of the overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px; /* Rounded edges for the overlay */
}

.overlay button {
  border-radius: 20px; /* Rounded edges for the button */
  /* Other styles for the button */
}

.product-item:hover .overlay {
  opacity: 1;
}
</style>
