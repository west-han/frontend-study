<template>
<div class="discount">
  <h4>지금 결제하면 {{ dcRate }}% 할인</h4>
</div>
</template>

<script>
export default {
    name: 'Discount',
    props: {
        dcRate: Number
    }
}
</script>

<style>
</style>