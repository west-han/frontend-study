<template>
    <div class="black-bg" v-if="isModalOpen">
    <div class="white-bg">
      <img :src="rooms[openedRoom].image" alt="room image" class="thumbnail">
      <h4>{{ rooms[openedRoom].title }}</h4>
      <p>{{ rooms[openedRoom].content }}</p>
      <p>{{ rooms[openedRoom].price }}</p>

      <input @input="month = $event.target.value; amount = month * rooms[openedRoom].price">
      <!-- <input v-model.number="month"> -->
      <p>최종 금액: <span>{{ amount }}</span></p>

      <!-- <button @click="toggleModal()">닫기</button> -->
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        rooms: Array,
        isModalOpen: Boolean,
        openedRoom: Number,
        toggleModal: Function
    },
    data() {
        return {
            month: 0,
            amount: 0
        }
    },
    watch: {
        month(newValue, oldValue) {
          // 함수명을 감시하고자 하는 데이터명으로 작명
          if (isNaN(newValue)) {
            alert('숫자만 입력');
            this.month = 1;
            document.querySelector('input').value = this.month;
          }
        }
    },
    beforeUpdate() {
        if (this.month === '2') {
            alert('nono');
            this.month = 3;
        }
    }
}
</script>

<style>
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>