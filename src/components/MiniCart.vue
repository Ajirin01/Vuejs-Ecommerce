<template>
  <div class="mini-cart">
    <span class="cart-total">₦{{ cartTotal }}</span>
    <span class="cart-icon" @click="toggleCart">
      <i class="material-icons">shopping_cart</i>
    </span>
    <span class="cart-count">{{ cartItemCount }}</span>

    <!-- Cart content to be displayed when toggled -->
    <div v-if="showCartContent" class="cart-content">
      <div class="mini-cart-container grey lighten-4" style="max-height: 400px; overflow-y: auto;">
        <!-- Upper Container for Product Details -->
        <div>
            <i class="material-icons ml-12 cloas-mini-cart" @click="toggleCart">clear</i>
        </div>
        <div class="upper-container">
            <!-- Two Columns: Product Image and Quantity x Price -->
            <div class="row" v-for="cartItem in cart" :key="cartItem.product_id">
                <!-- Column for Product Image -->
                <div class="col s6">
                    <!-- Product Image Placeholder -->
                    <router-link :to="'/product/' + cartItem.product_id" @click="closeMiniCart">
                        <img class="mini-cart-item-img" :src="getProductById(cartItem.product_id).imageUrl" alt="Product Image">
                    </router-link>
                </div>
                <!-- Column for Quantity x Price -->
                <div class="col s6">
                    <span class="right material-icons remove-from-cart" style="margin-top: 30px" @click="removeFromCart(cartItem.product_id)">delete_forever</span>
                    <div class="left">
                        <p class="mini-cart-product-name">{{ getProductById(cartItem.product_id).name }}</p>
                        <p class="mini-cart-product-quantity">{{ cartItem.quantity }} x ₦{{ getProductById(cartItem.product_id).price }}</p>
                        <!-- Display Quantity multiplied by Price for the product -->
                    </div>
                </div>
            </div>

        </div>

        <!-- Lower Container for Checkout Button and Cart Total -->
        <div class="lower-container">
            <!-- Two Rows: Subtotal and Checkout Button -->
            <div class="row">
                <!-- Upper Row for Subtotal -->
                <div class="col s10 right-align">
                    <!-- Display Subtotal -->
                    <p><b>Subtotal: ₦{{ cartTotal }}</b></p>
                </div>
            </div>
            <div class="row">
                <!-- Lower Row for Checkout Button -->
                <div class="col s12">
                    <!-- Checkout Button -->
                    <button class="btn waves-effect black checkout-btn" @click="closeMiniCart">Checkout</button>
                    <router-link :to="'/cart'">
                        <button class="btn waves-effect black checkout-btn" @click="closeMiniCart">Manage Cart</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showCartContent: false, // Initial state for cart content display
            // cartTotal: 0
        };
    },
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
            
            return Math.ceil(total)
        },
        shouldShowCartContent() {
        return this.showCartContent ? 'show' : '';
        },
        cart() {
            return this.$store.state.cart
        }
    },

    methods: {
        toggleCart() {
            this.showCartContent = !this.showCartContent; // Toggle cart content on icon click
            console.log(this.showCartContent)
        },
        getProductById(id) {
            return this.$store.getters.getProductById(id)
        },
        removeFromCart(id) {
            let deleteConfirm = confirm("Are you sure you want to remove this item from your cart?")

            if(deleteConfirm){
                this.$store.dispatch('REMOVE_FROM_CART', id)
            }
        },
        closeMiniCart(){
            console.log("hello")
            this.showCartContent = false
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

    .remove-from-cart:hover{
        cursor: pointer
    }

    .checkout-btn{
        width: 100%
    }

    .mini-cart-product-name{
        margin-top: -0px
    }

    .mini-cart-product-quantity{
        margin-top: -50px
    }


    .mini-cart-item-img{
        width: 60px;
        height: 60px;
        margin-top: 20px
    }

    .cart-icon {
    font-size: 24px;
    margin-right: 10px;
    cursor: pointer
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

    /* Style for cart content */
    .cart-content {
        position: absolute;
        top: 40px;
        right: 0;
        width: 350px;
        background: #fff;
        border: 1px solid #ccc;
        padding: 10px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        z-index: 10;
        display: block; /* Initially hidden */
        color: black
    }

    .cart-content.show {
    display: block; /* Display when showCartContent is true */
    }

    .cloas-mini-cart{
        cursor: pointer
    }

    .cloas-mini-cart:hover{
       opacity: .5
    }
</style>
