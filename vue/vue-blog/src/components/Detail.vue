<template>
    <div>
        <h3>{{ list[$route.params.id].title }}</h3>
        <p>{{ list[$route.params.id].date }}</p>
        <p>{{ list[$route.params.id].content }}</p>
    </div>
</template>
<script>
export default {
    name: 'Detail',
    props: {
        list: Array
    }
}
</script>
<style lang="">
    
</style>