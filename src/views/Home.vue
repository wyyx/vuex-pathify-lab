<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <button @click="toggleIsLoading">Toggle isLoading</button>
      <button @click="toggleStreet">Toggle street</button>
      <button @click="updateIsLoadingAndStreet">
        Update isLoading and street
      </button>
      <input type="text" v-model="mobile" />
      <h1><span class="property"> user:</span> {{ user }}</h1>
      <h1><span class="property">isLoading:</span> {{ isLoading }}</h1>
      <h1><span class="property">street:</span> {{ street }}</h1>
      <h1><span class="property">address:</span> {{ formatAddress }}</h1>
      <h1>
        <span class="property">address + isLoading:</span>
        {{ formatAddressAndIsLoading }}
      </h1>
      <h1>
        <span class="property">mobile:</span>
        {{ mobile }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { get, sync } from 'vuex-pathify'
import {
  mobile,
  isLoading,
  street,
  formatAddress,
  formatAddressAndIsLoading,
  updateIsLoadingAndStreetAction
} from '@/store/product/product.paths'
import { user } from '@/store/root.paths'

export default Vue.extend({
  name: 'home',
  computed: {
    // vuex-pathify
    ...get({
      // root property
      user,
      // product property
      isLoading,
      street,
      formatAddress,
      formatAddressAndIsLoading
    }),
    // read/write
    mobile: sync(mobile)
  },
  components: {},
  methods: {
    toggleIsLoading() {
      const newIsLoading = (this as any).isLoading ? false : true
      ;(this.$store as any).set(isLoading, newIsLoading)
    },
    toggleStreet() {
      const newStreet =
        (this as any).street === 'People road' ? 'Garden road' : 'People road'
      ;(this.$store as any).set(street, newStreet)
    },
    updateIsLoadingAndStreet() {
      this.$store.dispatch(updateIsLoadingAndStreetAction, {
        isLoading: true,
        street: 'Garden road'
      })
    }
  },
  watch: {
    isLoading(newVal, oldVal) {
      console.log(`isLoading changed to ${newVal}`)
    },
    street(newVal, oldVal) {
      console.log(`street changed to ${newVal}`)
    }
  }
})
</script>
<style lang="scss" scoped>
.property {
  color: gray;
}
</style>
