<template>
  <section class="sec-game-score">
    <div class="user-score flex align-center space-between" v-for="(value, name, idx) in scoreStatus" :key="idx">
    <div class="user-name">{{ name }}</div>
    <div class="user-val">{{ value }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "game-statistic",
  props: ["scoreStatus"]
};
</script>

<style scope lang="scss">
  .sec-game-score{
      background-color: burlywood;
      min-width: 300px;
      padding: 15px 30px;
      border-radius: 10px;
      .user-name{
        //   margin-right: 100px;
          padding: 10px 0;
      }

  }

</style>