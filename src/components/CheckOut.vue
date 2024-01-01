<template>
  <div class="container">
    <h1>Checkout</h1>

    <!-- Shipping Details Form -->
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" v-model="first_name">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" v-model="last_name">
          <label for="last_name">Last Name</label>
        </div>
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" v-model="email">
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="phone" type="tel" class="validate" v-model="phone">
          <label for="phone">Phone</label>
        </div>
        <input type="hidden" v-model="getTotalPrice">
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="address" class="materialize-textarea" v-model="address"></textarea>
          <label for="address">Address</label>
        </div>
      </div>
      <!-- Other shipping details fields -->

      <div class="row">
        <div class="input-field col s12">
          <button class="btn waves-effect waves-light" type="submit" name="action" @click="makePayment">Proceed to Pay
            <i class="material-icons right">payment</i>
          </button>

            <!-- <flutterwave-pay-button
                :tx_ref="generateReference()"
                :amount=20
                currency='NGN'
                payment_options="card,ussd"
                redirect_url=""
                class="class-name"
                style=""
                :meta="{counsumer_id: '7898' ,consumer_mac: 'kjs9s8ss7dd' }"
                :customer="{ name: 'Demo Customer  Name',
                email: 'customer@mail.com', 
                phone_number: '0818450****' }"
                :customizations="{  title: 'Customization Title' ,
                description: 'Customization Description'  ,
                logo : 'https://flutterwave.com/images/logo-colored.svg' }"
                :callback="makePaymentCallback"
                :onclose="closedPaymentModal"
            >   Click To Pay </flutterwave-pay-button> -->
        </div>
      </div>
    </form>

    <!-- Order Details -->
    <div class="row">
      <h5>Order Summary</h5>
      <ul class="collection">
        <li class="collection-item" v-for="(product, index) in orderProducts" :key="index" style="display: flex; justify-content: space-evenly">
          <div> {{ getProductById(product.product_id).name }} - ₦{{ getProductById(product.product_id).price }} </div>
          <div><span>X</span> {{product.quantity}}</div>
        </li>
      </ul>
      <h6>Total: ₦{{ getTotalPrice }}</h6>
    </div>
  </div>
</template>

<script>
// import Flutterwave from 'flutterwave';
// import {FlutterwavePayButton} from "flutterwave-vue-v3"
export default {
  name: 'CheckOut',

//   components: { FlutterwavePayButton },

  data() {
    return {
        first_name: '',
        last_name: '',
        address: '',
        email: '',
        phone: ''
    }
  },

  computed: {
    orderProducts() {
      // Assuming you have access to order details in your Vuex store or component data
      return  this.$store.state.cart
    },

    getTotalPrice() {
      // Calculate total price of the order
      return this.$store.state.checkoutTotal;
    },
  },

  methods: {
    getProductById(id) {
        return this.$store.getters.getProductById(id)
    },
    makePayment(){
        event.preventDefault()
        console.log(this.first_name, this.last_name, this.address, this.email, this.getTotalPrice, this.phone)
        let name = this.first_name + " "+ this.last_name
        console.log(window)
        window.FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-fac2c00f396fddbc07310db113fd17c2-X",
            tx_ref: this.generateReference,
            amount: this.getTotalPrice,
            currency: "NGN",
            payment_options: "card, mobilemoneyghana, ussd",
            redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
            meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
            email: this.email,
            phone_number: this.phone,
            name: name,
            },
            customizations: {
            title: "Ajirinibi Vuejs Store",
            description: "Payment for an orders",
            logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
            },
            callback: this.paymentCallback,
            onclose: this.closedPaymentModal,
        });
    },
    paymentCallback(response) {
      // Handle payment response
      console.log('Payment response:', response);
    },
    closedPaymentModal() {
      // Handle closed payment modal
      console.log('Payment modal closed.');
    },
    generateReference() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 10; // Adjust the length of the reference number as needed
        let ref = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            ref += chars[randomIndex];
        }

        return ref;
    }

  }
};
</script>

<style scoped>
/* Add Materialize styles or customize as needed */
/* Additional styles can be added here */
</style>
