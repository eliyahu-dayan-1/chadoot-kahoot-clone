<template>
  <section class="quizs-container">
    <template v-for="(quiz) in quizs">
      <quiz-preview :key="quiz._id" :quiz="quiz" />
    </template>
  </section>
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
.quizs-container {
  display: grid;
  grid-column: 2;
  grid-auto-rows: 1fr;
  align-items: center;
  justify-items: center; /* adjusted */
  grid-gap: 20px;
  grid-template-columns: repeat(4, 300px);

  @include for-wide-layout {
    grid-template-columns: repeat(3, 300px);
  }
  @include for-normal-layout {
    grid-template-columns: repeat(2, 300px);
  }
  @include for-w2-mobile-layout{
    grid-template-columns: repeat(1, 300px);
  }
}
</style>
