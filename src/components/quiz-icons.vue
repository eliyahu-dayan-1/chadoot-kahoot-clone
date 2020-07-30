<template>
  <section class="quiz-icons flex space-between">
      <div class="prev-game">
        <div class="prev-game-icon"></div>
        <div>{{quiz.playersCount}}</div>
      </div>
      <div class="high-score">
        <div class="high-score-icon"></div>
        <div>{{quiz.highscore}}</div>
      </div>
      <div class="audience">
        <div class="audience-icon"></div>
        <div>{{quiz.audience}}</div>
      </div>
    </section>
</template>

<script>
export default {
    name: "quiz-icons",
    props: ["quiz"],

}
</script>

<style lang="scss">
  .quiz-icons{
    > * {
      display: flex;
      justify-content: center;
      align-content: center;
      :first-child{
        width: 20px;
        margin-right: 5px;
      }
    }
  }
</style>