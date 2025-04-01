<template>
    <div v-for="item in list" :key="item.number">
        <h5>{{ item.title }}</h5>
        <p>{{ item.date }}</p>
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