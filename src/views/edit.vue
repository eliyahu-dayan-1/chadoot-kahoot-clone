<template>
  <main class="main-edit flex" v-if="quiz">
    <add-question @addQuestionFunc="addQuestionFunc"></add-question>
    <section class="details-sec">
      <label>
        <img
          :src="quiz.img"
          onerror="this.onerror=null; this.src='https://image.freepik.com/free-photo/background-texture-printed-question-marks_124595-213.jpg'"
          alt="quiz-pic"
        />
        <div class="upload-icon"></div>
        <input type="file" @change="uploadQuizPic" accept="image/png, image/jpeg" hidden />
      </label>
      <b-input-group size="sm" prepend="title">
        <b-form-input v-model="quiz.name"></b-form-input>
      </b-input-group>

      <b-input-group size="sm" prepend="desctiption">
        <b-form-textarea v-model="quiz.description"></b-form-textarea>
      </b-input-group>
      <b-input-group size="sm" prepend="public quiz">
        <b-input-group-append is-text>
          <b-form-checkbox v-model="quiz.isPublic" switch></b-form-checkbox>
        </b-input-group-append>
      </b-input-group>

      <button class="save" @click="saveQuiz">Save</button>
      <button v-if="this.$route.params.quizId" class="delete" @click="deleteQuiz">Delete</button>
    </section>

    <section class="questions-sec">
      <div class="qt-num">Questions ({{quiz.questions.length}})</div>
      <template v-for="(quest, idx) in quiz.questions">
        <quetion-preview-edit :key="idx" :quest="quest" :questIdx="idx"></quetion-preview-edit>
      </template>
    </section>
  </main>
</template>

<script>
import quizService from "../services/quiz.service.js";
import { uploadImg } from "../services/cloudinaryService.js";
import QuetionPreviewEdit from "../components/question-preview-edit.vue";
import addQuestion from "../components/add-question.vue";

export default {
  name: "edit-quiz",
  components: {
    QuetionPreviewEdit,
    addQuestion
  },
  data() {
    return {
      quiz: null,
      picked: "Public",
      emptyQuiz: {
        ownerId: "null yet",
        name: "",
        description: "",
        img: "",
        audience: "",
        isPublic: true,
        createdAt: null,
        playersCount: 0,
        questions: []
      },
      emptyQuestion: {
        title: "",
        img: "",
        time: 10,
        answerMode: 4,
        answers: [
          {
            text: "",
            isCorrect: false
          },
          {
            text: "",
            isCorrect: true
          },
          {
            text: "",
            isCorrect: false
          },
          {
            text: "",
            isCorrect: false
          }
        ]
      },
      emptyAnswer: {
        text: "",
        isCorrect: true
      }
    };
  },
  async created() {
    const { quizId } = this.$route.params;
    if (quizId) this.quiz = await quizService.getQuizById(quizId);
    else this.quiz = this.emptyQuiz;
  },
  methods: {
    addQuestionFunc() {
      console.log("add question function");
      this.quiz.questions.push(this.emptyQuestion);
    },
    saveQuiz() {
      console.log("savequiz");
    },
    deleteQuiz() {
      console.log("deleteQuiz");
    },
    async uploadQuizPic(ev) {
      const newImgUrl = await uploadImg(ev);
      if (newImgUrl) this.quiz.img = newImgUrl.url;
    }
  }
};
</script>

<style lang="scss">
.main-edit {
  label {
    position: relative;
    width: min-content;
    height: min-content;
  }

  .upload-icon {
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba($color: gray, $alpha: 0.2);
    padding: 15px;
    border-radius: 10px;
  }

  .input-group {
    width: auto;
  }

  .details-sec {
    > *:not(img) {
      margin-bottom: 20px;
    }
  }
  .questions-sec {
  }
}
</style>