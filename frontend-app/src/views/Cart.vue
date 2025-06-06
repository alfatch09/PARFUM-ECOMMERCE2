<template>
  <b-container class="my-5">
    <b-card>
      <h2 class="mb-4">Your Cart</h2>
      <b-table :items="cartItems" :fields="fields" bordered>
        <template #cell(actions)="row">
          <b-button variant="danger" @click="removeFromCart(row.item)">Hapus</b-button>
        </template>
      </b-table>

      <div class="text-right mt-3">
        <h5>Total: {{ totalPriceFormatted }}</h5>
        <router-link to="/payment">
          <b-button variant="success">Checkout</b-button>
        </router-link>
      </div>
    </b-card>
  </b-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('cart', ['items']),
    cartItems() {
      return this.items
    },
    totalPrice() {
      return this.items.reduce((total, item) => total + item.price, 0)
    },
    totalPriceFormatted() {
      return `Rp ${this.totalPrice.toLocaleString()}`
    },
    fields() {
      return ['name', 'price', 'actions']
    }
  },
  methods: {
    ...mapMutations('cart', ['REMOVE_FROM_CART']),
    removeFromCart(item) {
      this.REMOVE_FROM_CART(item)
    }
  }
}
</script>
