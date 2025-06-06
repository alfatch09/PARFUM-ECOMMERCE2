<template>
  <b-container class="my-5">
    <b-card>
      <h2 class="mb-4">About Our Perfume Store</h2>
      <b-card-text>
        <p>We are passionate about bringing you the finest fragrances from around the world.</p>

        <h4 class="mt-4">Our Values</h4>
        <ul>
          <li>Quality ingredients sourced ethically</li>
          <li>Unique blends crafted by master perfumers</li>
          <li>Sustainable packaging</li>
          <li>Exceptional customer service</li>
        </ul>

        <h4 class="mt-4">Meet Our Team</h4>
        <b-row>
          <b-col md="4" v-for="(member, index) in team" :key="index">
            <b-card :title="member.name" :sub-title="member.role" class="mb-3">
              <b-card-text>{{ member.bio }}</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      team: [
        { name: "Sarah Johnson", role: "Founder & Master Perfumer", bio: "With over 20 years in the fragrance industry..." },
        { name: "Michael Chen", role: "Head of Operations", bio: "Ensuring our products reach you in perfect condition..." },
        { name: "Emma Wilson", role: "Customer Experience", bio: "Dedicated to making your shopping experience exceptional..." }
      ]
    }
  }
}
</script>
