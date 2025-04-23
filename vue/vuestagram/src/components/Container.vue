<template>
	<div>
		<div v-if="shownTab === 0">
			<Post v-for="post in posts" :post="post"/>
		</div>
		<!-- 필터선택페이지 -->
		<div v-if="shownTab === 1">
			<div class="upload-image" :style="{backgroundImage: `url(${fileUrl})`}" :class="filter"></div>
			<div class="filters">
				<span v-for="(filter, i) in filters" :key="i">
					<FilterBox :imageUrl="fileUrl" :filter="filter">
						<template v-slot:a>{{ filter }}</template>
						<template v-slot:b="scope"> {{ scope.msg }} </template>
					</FilterBox>
				</span>
			</div>
		</div>

		<!-- 글작성페이지 -->
		<div v-if="shownTab === 2">
			<div :class="filter" class="upload-image" :style="{backgroundImage: `url(${fileUrl})`}"></div>
			<div class="write">
				<textarea class="write-box" @change="readContent">write!</textarea>
			</div>
		</div>

		<div v-if="shownTab === 3">
			<MyPage :one="1"/>
		</div>
	</div>
</template>
<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';
import filters from '../assets/filterlist';
import MyPage from './MyPage.vue'

export default {
	data() {
		return {
			filters,
		}
	},
	props: {
		posts: Array,
		shownTab: Number,
		fileUrl: String,
		filter: String
	},
	components: {
		Post,
		FilterBox,
		MyPage,
	},
	methods: {
		readContent(e) {
			this.$emit('readContent', e.target.value);
		}
	},
}
</script>
<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>