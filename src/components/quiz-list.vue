<template>
  <div class="bla">
    <section class="quizs-container">
      <div
        class="flex column"
        v-for="(quiz) in quizs"
        :key="quiz._id"
        @click="quizDetailsNav(quiz._id)"
      >
        <quiz-preview :quiz="quiz" />
      </div>
    </section>
  </div>
</template>

<script>
import quizPreview from "./quiz-preview.vue";

export default {
  name: "quiz-list",
  props: ["quizs"],
  methods: {
    quizDetailsNav(quizId) {
      this.$router.push(`/game/${quizId}`);
    },
    printQuiz(quiz, ev) {
      ev.stopPropagation();
      console.log(quiz, ev);
    }
  },
  components: {
    quizPreview
  },
  created() {
    console.log(this.quizs);
  }
};
</script>

<style lang="scss">
.bla{
  display: grid;
  grid-template-columns:  1fr 80vw 1fr;
}

.quizs-container {
  display: grid;
  grid-column: 2;

  grid-template-columns: repeat(auto-fill, 350px);
  grid-auto-rows: 1fr;
  align-items: center;
  justify-items: center; /* adjusted */

  //   grid-auto-rows:  350px;
  grid-gap: 30px;
  //   grid-auto-flow: row;
}
</style>
