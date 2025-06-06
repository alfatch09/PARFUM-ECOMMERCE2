<template>
  <b-container class="my-5">
    <h2 class="text-center mb-4">Our Perfumes</h2>
    <b-row>
      <b-col
        v-for="(product, index) in products"
        :key="index"
        md="4"
        class="mb-4"
      >
        <b-card
          :title="product.name"
          :img-src="product.image"
          img-top
          class="h-100"
        >
          <b-card-text>{{ product.description }}</b-card-text>
          <b-card-text><strong>${{ product.price }}</strong></b-card-text>
          <b-button variant="success" block @click="addToCart(product)">
            Add to Cart
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: 'Floral Breeze',
          description: 'A soft floral scent with hints of jasmine.',
          price: 29.99,
          image: 'https://via.placeholder.com/300x200?text=Floral+Breeze'
        },
        {
          name: 'Citrus Spark',
          description: 'Fresh citrus notes to energize your day.',
          price: 34.99,
          image: 'https://via.placeholder.com/300x200?text=Citrus+Spark'
        },
        {
          name: 'Woodland Mist',
          description: 'Earthy tones with subtle musk and cedar.',
          price: 39.99,
          image: 'https://via.placeholder.com/300x200?text=Woodland+Mist'
        }
      ]
    }
  },
  methods: {
    addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || []
      cart.push(product)
      localStorage.setItem('cart', JSON.stringify(cart))
      alert(`${product.name} added to cart!`)
    }
  }
}
</script>
