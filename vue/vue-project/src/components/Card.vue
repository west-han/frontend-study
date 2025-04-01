<template>
<div key="room.id" >
  <img :src="room.image" alt="" class="thumbnail">
  <!-- <h4 @click="toggleModal(room.id);">{{ room.title }}</h4> -->
  <h4 @click="$emit('openModal', room.id);">{{ room.title }}</h4> <!-- 부모 컴포넌트에게 room.id를 보내면서'openModal'이라는 이벤트 핸들러를 실행해 달라고 요청(커스텀 이벤트 실행)-->
  <p>{{ room.price }}</p>
</div>
</template>

<script>
export default {
    name: "Card",
    props: {
        room: Object,
        toggleModal: Function
    }
}
</script>

<style></style>