<template>
  <Transition name="fade">
    <!-- <Modal :rooms="rooms" :openedRoom="openedRoom" :isModalOpen="isModalOpen" :toggleModal="toggleModal"></Modal> -->
    <Modal :rooms="rooms" :openedRoom="openedRoom" :isModalOpen="isModalOpen" @closeModal="isModalOpen = false;"></Modal>
  </Transition>
  <!-- closeModal: 커스텀 이벤트(자식 컴포넌트가 $emit('closeModal', 데이터)로 closeModal이라는 메시지를 보내면 코드 실행) -->
  <div class="menu">
    <a v-for="(작명, index) in menus" :key="index" :id="`작명-${index}`">{{작명}}</a>
  </div>

  <div>{{ discountRate }}% 할인</div>

<!-- 
  <div :style="centerText">
    <div>
      <img src="/room0.jpg" alt="" class="thumbnail">
      <h4 @click="isModalOpen = true">{{ products[0] }}</h4>
      <p>xx</p>
      <button @click="increase(0)">허위매물신고</button>
      <span>신고수: {{ 신고수[0] }}</span>
    </div>
    <div>
      <img src="/room1.jpg" alt="" class="thumbnail">
      <h4>{{ products[1] }}</h4>
      <p>xx</p>
      <button @click="increase(1)">허위매물신고</button>
      <span>신고수: {{ 신고수[1] }}</span>
    </div>
    <div>
      <img src="/room2.jpg" alt="" class="thumbnail">
      <h4>{{ products[2] }}</h4>
      <p>xx</p>
      <button @click="increase(2)">허위매물신고</button>
      <span>신고수: {{ 신고수[2] }}</span>
    </div>
  </div>
-->

  <button @click="priceSort()">정렬</button>
  <button @click="sortBack()">정렬 되돌리기</button>

  <div :style="centerText">
    <!-- <Card  v-for="(room, i) in rooms" :room="room" :toggleModal="toggleModal"> </Card> -->
    <Card  v-for="(room, i) in rooms" :room="room" @openModal="isModalOpen = true; openedRoom = $event"> </Card>
  </div>

  <Discount :dcRate="discountRate"></Discount>

</template>

<script>
import rooms from './assets/oneroom.js'
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'

export default {
  name : 'App',
  data(){
    return {
      // price1: 60,
      // price2: 100,
      // 스타일: 'color:red',
      // products: [
      //   '역삼동원룸',
      //   '천호동원룸',
      //   '마포구원룸'
      // ],
      // 신고수: [0, 0, 0],
      centerText: "text-align: center",
      menus: ['Home', 'Shop', 'About'],
      isModalOpen: false,
      rooms: [...rooms],
      roomsOriginal: [...rooms],
      openedRoom: null,
      discountRate: 30,
    }
  },
  methods: {
    increase(index) {
      this.신고수[index]++
    },
    toggleModal(roomNumber) {
      this.isModalOpen = !this.isModalOpen;
      this.openedRoom = roomNumber;
    },
    priceSort() {
      this.rooms.sort((r1, r2) => r2.price - r1.price);
    }, sortBack() {
      this.rooms = [...this.roomsOriginal];
    }
  },
  components: {
    Discount,
    Modal,
    Card,
  },
  mounted() {
    let decreasement = setInterval(() => this.discountRate--, 1000);
    setTimeout(() => clearInterval(decreasement), 30000)
  },
}
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.thumbnail {
  width: 500px;
  margin-top: 80px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.5s;
}
.fade-leave-to {
  opacity: 0;
}

</style>