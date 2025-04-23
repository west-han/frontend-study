<template>
	<div :class="filter + ' filter-item'" :style="`background-image: url(${imageUrl})`">
		<slot name="a"></slot>
		<slot name="b" :msg="msg"></slot>
		<button @click="fire">버튼</button>
	</div>
</template>
<script>
export default {
	name: 'FilterBox',
	data() {
		return {
			msg: ' hello'
		}
	},
	props: {
		imageUrl: String,
		filter: String,
	},
	methods: {
		fire() {
			this.emitter.emit('getFilterName', this.filter);
		}
	}
}
</script>
<style>
	.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>