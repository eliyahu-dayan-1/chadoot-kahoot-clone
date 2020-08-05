<template>
  <router-link class="flex column quiz" :to="`/game/${quiz._id}`">
    <div class="img-container">
      <img
        :src="quiz.img"
        onerror="this.onerror=null; this.src='https://image.freepik.com/free-photo/background-texture-printed-question-marks_124595-213.jpg'"
        alt="quiz-pic"
      />
      <div class="question-num">{{quiz.questions.length}} Qs</div>
    </div>
    <div class="text-container">
      <h3 class="title">{{quiz.name}}</h3>
      <div class="sub-title">{{quiz.description}}</div>
    </div>
    <quiz-icons :quiz="quiz"></quiz-icons>
  </router-link>
</template>

<script>
import QuizIcons from "./quiz-icons.vue";

export default {
  name: "QuizPreview",
  props: ["quiz"],
  components: {
    QuizIcons
  }
};
</script>

<style lang="scss">
.quiz {
  border-radius: 5px;
  box-shadow: 0px 0px 6px -1px rgb(193, 187, 193);
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 20px;

  > *:not(.img-container) {
    padding: 0 10px;
  }

  .img-container {
    position: relative;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .question-num {
      position: absolute;
      bottom: 10px;
      right: 0;
      padding: 1px 6px;
      color: white;
      font-family: Montserrat-b;
      font-size: 0.75rem;

      background-color: rgba(0, 0, 0, 0.469);
    }
  }

  .text-container {
    margin-bottom: 30px;
    flex-grow: 1;

    .title {
      font-size: 1rem;
      font-family: Montserrat-x-b;
      margin-bottom: 10px;
    }

    .sub-title {
      font-size: 0.8rem;
      font-family: Montserrat-r;
    }
  }
}
</style>