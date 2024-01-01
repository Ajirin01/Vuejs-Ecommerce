<template>
  <div>
    <h1>{{ title }}</h1>
    <table class="striped">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Select</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="index">
            <td style="display: flex; justify-content: left">
                <img :src="getProductById(item.product_id).imageUrl" width="100" height="100"> 
                <span style="margin-top: 40px; margin-left: 50px">{{ getProductById(item.product_id).name }}</span>
            </td>
            <td>₦{{ getProductById(item.product_id).price }}</td>
            <td>
                <div class="quantity-controls">
                    <button @click="decreaseQuantity(item)"><i class="material-icons">keyboard_arrow_left</i></button>
                    <input type="number" v-model="item.quantity" min="1" style="width: 50px; text-align: center;" />
                    <button @click="increaseQuantity(item)"><i class="material-icons">keyboard_arrow_right</i></button>
                </div>
            </td>
            <td>₦{{ getProductById(item.product_id).price * item.quantity }}</td>
            <td>
                <label>
                <input type="checkbox" v-model="item.selected" @change="calculateSubTotal(item)">
                <span></span>
                </label>
            </td>
        </tr>
      </tbody>
    </table>
    <div>
        <button class="btn black right" @click="updateCart">Update Cart</button>
      <h5>Checkout Amount: ₦{{ checkoutAmount }}</h5>
      <router-link :to="'/checkout'" class="btn black" @click="addItemToCheckoutSelection">Proceed to Checkout</router-link>
      <br><br><br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManageCart',

  data() {
    return {
      title: 'Cart'
    };
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    checkoutAmount() {
      // Calculate checkout amount based on selected cart items
        const selectedItems = this.cart.filter(item => item.selected);
        const CheckoutTotal = Math.ceil(selectedItems.reduce((total, item) => total + (this.$store.getters.getProductById(item.product_id).price * item.quantity), 0));
        this.$store.dispatch('SET_CHECKOUT_TOTAL', CheckoutTotal)
        return CheckoutTotal
    }
  },

  methods: {
    calculateSubTotal(item) {
    //   console.log("@@@@@@@",item.product_id)
      const selectedItems = this.cart.filter(cartItem => cartItem.selected == item.selected);
      this.$store.dispatch('SET_CHECKOUT_PRODUCTS', selectedItems)
        console.log(item)
    },

    addItemToCheckoutSelection() {
      // Perform action when 'Proceed to Checkout' button is clicked
      const selectedItems = this.cart.filter(item => item.selected);
    //   this.$store.dispatch('selectProduct', selectedItems)
      console.log('Selected items for checkout:', selectedItems);
      // Proceed with checkout logic
    },

    getProductById(id) {
        return this.$store.getters.getProductById(id)
    },

    increaseQuantity(item) {
      item.quantity++;
    },
    
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },

    updateCart(){
        this.$store.dispatch('UPDATE_CART_ITEMS', this.cart)
    }
  }
};
</script>


<style scoped>
    /* Default table styles */
    table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px; /* Add margin for spacing */
    }

    th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left; /* Align content to the left */
    }

    /* Table styles for smaller screens */
    @media (max-width: 600px) {
        /* Hide table header */
        table thead {
            display: none;
        }
        
        /* Set table rows to display as block elements */
        table tr {
            display: block;
            margin-bottom: 10px; /* Add margin between rows */
            border: 1px solid #ccc; /* Add border to separate rows */
        }
        
        /* Style table data cells for smaller screens */
        td {
            display: block;
            text-align: left; /* Align content to the left */
        }
    }
</style>
