<template>
	<div style="padding : 10px">
		<h4>팔로워</h4>
		<input placeholder="?" @change="search"/>
		<div class="post-header" v-for="follower in followers" :key="follower.id">
			<div class="profile" :style="`background-image: url(${follower.image})`"></div>
			<span class="profile-name"> {{ follower.name }} </span>
		</div>
	</div>
	{{ one }}
</template>

<script setup>
import {onMounted, ref, reactive, defineProps} from 'vue';
import axios from 'axios';
import {useStore} from 'vuex'

let followers = ref([]);
let test = reactive({name: 'kim'});

// set(props) 함수 내부에서는 let {one, two, three} = toRefs(props); 형태로 사용
const one = defineProps({one: {type: Number}});

let store = useStore();
console.log(store.state.name);

onMounted(() => {
	axios.get('/follower.json')
		.then(data => {
			followers.value = data.data;
		});
});

const search = $event => {
	const query = $event.target.value;
	followers.value = followers.value.filter(item => item.name.includes(query));
};

</script>
<style lang="">
	
</style>