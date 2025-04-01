<template>
<Navbar></Navbar>
<router-view :list="list"></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'
import List from './components/List.vue'
import list from './assets/data'

export default {
  name: 'App',
  components: {
    Navbar,
    List
  },
  data() {
    return {
      list
    }
  }
}
</script>

<style>
</style>
