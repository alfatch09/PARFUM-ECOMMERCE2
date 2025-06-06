<template>
  <b-container class="my-5">
    <b-card>
      <h2 class="mb-4">Payment</h2>

      <b-form @submit.prevent="submitPayment">
        <b-form-group label="Full Name" label-for="name">
          <b-form-input id="name" v-model="form.name" required />
        </b-form-group>

        <b-form-group label="Address" label-for="address">
          <b-form-textarea id="address" v-model="form.address" rows="3" required />
        </b-form-group>

        <b-form-group label="Payment Method" label-for="paymentMethod">
          <b-form-select id="paymentMethod" v-model="form.method" :options="methods" required />
        </b-form-group>

        <b-button type="submit" variant="success">Pay Now</b-button>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        address: '',
        method: 'QRIS'
      },
      methods: ['QRIS', 'Transfer Bank', 'COD']
    }
  },
  methods: {
    submitPayment() {
      // Sementara hanya alert, nanti bisa disambungkan ke backend
      alert(`Thank you, ${this.form.name}! Your order will be processed.`)
      this.$router.push('/')
    }
  }
}
</script>
