<template>
  <main v-if="quiz" class="main-quiz-details flex">
    <choose-player-modal
      v-if="isChoosePlayerOpen"
      :quiz="quiz"
      @toggleChooseModal="toggleChooseModal"
    ></choose-player-modal>
    <section class="details-sec">
      <img
        :src="quiz.img"
        onerror="this.onerror=null; this.src='https://image.freepik.com/free-photo/background-texture-printed-question-marks_124595-213.jpg'"
        alt="quiz-pic"
      />
      <quiz-icons :quiz="quiz"></quiz-icons>
      <h2 class="title">{{quiz.name}}</h2>
      <div class="sub-title">{{quiz.description}}</div>
      <div class="mode">
        <span>Mode:</span>
        {{(quiz.isPublic) ? 'Public' : 'Privte'}}
      </div>
      <div class="owner-name">
        <span>Created by:</span>
        {{quiz.ownerName}}
      </div>

      <button class="play" @click="toggleChooseModal">Play</button>
      <router-link
        class="edit"
        :class="{'is-public': quiz.isPublic}"
        :to="(quiz.isPublic) ? '' : `/game/${quiz._id}/edit` "
      >Edit</router-link>
    </section>

    <section class="questions-sec">
      <div class="qt-num">Questions ({{quiz.questions.length}})</div>
      <template v-for="(quest, idx) in quiz.questions">
        <quetion-preview
          :key="idx"
          @toggleIsActive="toggleIsActive"
          :ansIdxActive="ansIdxActive"
          :quest="quest"
          :questIdx="idx"
        ></quetion-preview>
      </template>
    </section>
  </main>
</template>

<script>
import QuizIcons from "../components/quiz-icons.vue";
import QuetionPreview from "../components/question-preview.vue";
import ChoosePlayerModal from "../components/choose-player-modal.vue";
import quizService from "../services/quiz.service.js";

export default {
  name: "quiz-details",
  data() {
    return {
      quiz: null,
      isChoosePlayerOpen: false,
      ansIdxActive: null
    };
  },
  components: {
    QuizIcons,
    QuetionPreview,
    ChoosePlayerModal
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    toggleChooseModal() {
      this.isChoosePlayerOpen = !this.isChoosePlayerOpen;
    },
    toggleIsActive(idx) {
      console.log("idx is", idx);
      console.log("this.ansIdxActive", this.ansIdxActive);
      if (idx === this.ansIdxActive) this.ansIdxActive = null;
      else this.ansIdxActive = idx;
      console.log("this.ansIdxActive", this.ansIdxActive);
    }
  },

  async created() {
    if (this.$route.params.quizId) {
      const { quizId } = this.$route.params;
      const foundQuiz = await quizService.getQuizById(quizId);
      this.quiz = foundQuiz;
      console.log(this.quiz);
    }
  }
};
</script>

<style lang="scss">
.main-quiz-details,
.main-edit {
  margin-top: 62px;
  margin-right: 20px;
  position: static;

  .details-sec {
    background-color: white;
    position: sticky;
    width: 400px;
    top: 0;
    height: 100vh;
    margin-right: 20px;

    > *:not(img):not(label) {
      margin-left: 10px;
      margin-right: 20px;
    }

    img,
    label {
      width: 100%;
      margin-bottom: 10px;
    }
    .quiz-icons {
      margin-bottom: 20px;
    }
    .title {
      font-size: 25px;
      margin-bottom: 5px;
      font-family: $fnt-montserrat-x-b;
    }
    .sub-title {
      margin-bottom: 10px;
    }
    .mode {
      margin-bottom: 5px;
    }
    .owner-name {
      margin-bottom: 20px;
    }

    span {
      font-family: $fnt-montserrat-b;
    }

    button.play,
    a.edit,
    button.save,
    button.delete {
      padding: 12px 40px;
      border-radius: 5px;
      box-shadow: inset 0px -7px 0px 0px rgba(0, 0, 0, 0.35);
      font-family: $fnt-montserrat-b;
      color: white;
      &.delete {
        background-color: $red-3;
      }

      &.play,
      &.save {
        background-color: $green-2;
      }

      &.edit {
        background-color: $blue-3;
        &.is-public {
          background-color: lighten($blue-3, 50%);
        }
      }
    }
  }

  .questions-sec {
    margin-top: 20px;
    flex-grow: 1;
    .qt-num {
      margin-bottom: 20px;
      font-family: $fnt-montserrat-b;
    }
  }

  @include for-w2-mobile-layout {
    flex-direction: column;
    margin-right: 0;

    .details-sec {
      position: relative;
      width: 100%;
      height: auto;
      padding-bottom: 15px;
    }

    .questions-sec {
      margin: 30px 15px 0 15px;
    }
  }

  @include for-normal-layout{
    .details-sec{
      width: 320px;
    }
  }
}
</style>