<template>

  <section
    class="choose-player-modal flex align-center justify-center"
    :class="{'open': quiz.isPublic}"
  >
    <div class="flex column space-between choose-player-content"
    v-click-outside="hidePopup">
      <button @click="$emit('toggleChooseModal')">X</button>
    
      <div class="header flex justify-center">Choose game Mode</div>
      <div class="flex space-between">
        <router-link class="mode" :to="{ path: 'single-player'}" append>
          <div class="icon single-player-icon"></div>
          <div class="text">single player</div>
        </router-link>
        <router-link class="mode" :to="{ path: 'multyple-players'}" append>
          <div class="icon multy-player-icon"></div>
          <div class="text">multyple player</div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "choose-player-modal",
  props: ["quiz"],
  methods: {

  }
};
</script>

<style lang="scss">

.choose-player-modal {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(128, 128, 128, 0.415);
  z-index: 10;

  .choose-player-content {
    height: 300px;
    width: 500px;
    font-family: $fnt-montserrat-b;
    background-color: green;
    border-radius: 10px;
    padding: 30px 50px 40px;

    .header {
      font-size: 25px;
      text-align: center;
    }

    .mode {
      display: flex;
      align-items: center;
      flex-direction: column;

      .icon {
        margin-bottom: 10px;
        background-color: greenyellow;
        padding: 15px;
        border-radius: 50%;
      }

      .text {
      }
    }
  }
}
</style>