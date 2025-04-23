<template>
  <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="shownTab == 1"  @click="shownTab++">Next</li>
        <li v-if="shownTab == 2"  @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.svg" class="logo" />
    </div>

    <template v-if="false">
      <h4>안녕 {{ $store.state.name }}</h4>
      <button @click="$store.commit('changeName')">버튼</button>
      <h4>안녕 {{ $store.state.age }}</h4>
      <button @click="$store.commit('increaseAge', 10)">버튼</button>

      <p>{{ $store.state.more }}</p>
      <button @click="$store.dispatch('getData')">더보기 버튼</button>
    </template>

    <Container :posts="posts" :shownTab="shownTab" :fileUrl="fileUrl" @readContent="content=$event" :filter="filter"/>
    
    <template v-if="false">
    <button @click="more">더보기</button>

      <p>{{ now2 }} {{ 카운터 }}</p>;
      <button @click="카운터++">버튼</button>

      <p>{{ name }} {{ age }} {{ likes }} {{ 내이름 }}</p>
    </template>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" accept="image/*"/>
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

</template>

<script>
import Container from './components/Container.vue'
import posts from './assets/posts.js'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return {
      posts,
      num: 0,
      shownTab: 3,
      isOpened: false,
      fileUrl: '',
      content: '',
      filter: '',
      카운터: 0,
    }
  },
  methods: {
    ...mapMutations(['setMore', 'increaseAge']),
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.num}.json`)
        .then(result => {
          this.posts.push(result.data);
        })
        .then(() => this.num++);
    },
    upload(e) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image')) {
        alert('이미지만 업로드 하세요.');
        return;
      }
      this.shownTab = 1;
      this.fileUrl = URL.createObjectURL(file);
    },
    publish() {
      let newPost = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.fileUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.filter
      };

      this.posts.unshift(newPost);
      this.shownTab = 0;
    },
    now() {
      return new Date();
    },
  },
  computed: {
    now2() { // 최초 1회만 함수 실행하고 값을 저장해둠(계산 결과 저장용, 재사용 시 저장한 값 반환 -> 사용할 때 함수 호출 형식으로 사용하지 않음)
      return new Date();
    },
    name() {
      return this.$store.state.name;
    },
    ...mapState(['age', 'likes']),
    ...mapState({내이름: 'name'}),
  },
  mounted() {
    this.emitter.on('getFilterName', (name) => {
      this.filter = name;
    });
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
