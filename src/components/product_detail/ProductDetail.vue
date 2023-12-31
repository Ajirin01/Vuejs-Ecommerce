<template>
  <div class="product-detail">
    <div class="product-detail-left">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    </div>
    <div class="product-detail-right">
      <h2>{{ product.name }}</h2>
      <p>Description: {{ product.description }}</p>
      <p>Price: ${{ price }}</p>
      <!-- Add other properties or details here -->

      <div class="quantity">
        <label for="quantityInput">Quantity:</label>
        <div class="quantity-controls">
          <button @click="decreaseQuantity"><i class="material-icons">keyboard_arrow_left</i></button>
          <input type="number" id="quantityInput" v-model="quantity" min="1" />
          <button @click="increaseQuantity"><i class="material-icons">keyboard_arrow_right</i></button>
        </div>
      </div>

      <button class="btn rounded" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: ['productId'],

  data() {
    return {
      quantity: 1
    };
  },
  computed: {
    product() {
      const productId = parseInt(this.$route.params.id); // Parse the ID to an integer
      return this.$store.getters.getProductById(productId);
    },

    price( ){
        console.log(this.product.price)
        console.log(this.quantity)
        return this.product.price * this.quantity
    }
  },

  methods: {
    addToCart() {
      // Logic to add the product to the cart
      // You may emit an event to inform the parent component about adding this product to the cart
      console.log(`Added ${this.quantity} ${this.product.name}(s) to cart`);
      let cartItem = {
        product_id: this.product.id,
        quantity: this.quantity
      }
      this.$store.dispatch('ADD_TO_CART', cartItem)
      console.log(this.$store.state.cart)
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }
  }
  // Other logic for the component
};
</script>

<style scoped>
    /* Component-specific styles */
    .product-detail {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    margin-top: 70px
    }

    .product-detail-left {
    flex: 1;
    }

    .product-detail-right {
    flex: 2;
    margin-left: 20px;
    }

    .product-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    }

    .quantity {
    margin-top: 20px;
    }

    .quantity-controls {
    display: flex;
    align-items: center;
    }

    .quantity-controls button {
    padding: 5px 10px;
    font-size: 1rem;
    }

    .rounded{
        border-radius: 50px;
        margin-top: 20px
    }

    .add-to-cart-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }

    .add-to-cart-btn:hover {
    background-color: #0056b3;
    }

    #quantityInput{
        width: 50px;
        text-align: center
    }
</style>
