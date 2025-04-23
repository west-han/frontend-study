<template>
  <div v-for="item in list" :key="item.number">
    <!-- <router-link to="/detail" :item="item"> -->
      <h5 @click="$router.push('/detail/' + item.number)">{{ item.title }}</h5>
      <p>{{ item.date }}</p>
    <!-- </router-link> -->
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    list: Array
  }
}
</script>
<style lang="">
    
</style>