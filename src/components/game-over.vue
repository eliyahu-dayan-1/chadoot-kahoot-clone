<template>
  <section class="game-over-sec flex wrap justify-center">
    <div class="text">game over</div>
    <router-link class="back" to="/">
      <div class="back-icon"></div>
      <div>back</div>
    </router-link>
    <button class="refresh" @click="()=>{this.$router.go();}">
      <div class="refresh-icon"></div>
      <div>reload</div>
    </button>
  </section>
</template>

<script>
export default {
  name: "game-ower"
};
</script>

<style lang="scss">
.game-over-sec {
  .text {
    width: 100%;
    font-size: 100px;
    font-family: $fnt-montserrat-x-b;
    margin-bottom: 50px;
    text-align: center;
  }

  .back {
    margin-right: 80px;
  }

  .refresh,
  .back {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $fnt-montserrat-b;
    .refresh-icon,
    .back-icon {
      width: 30px;
    }

    > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>