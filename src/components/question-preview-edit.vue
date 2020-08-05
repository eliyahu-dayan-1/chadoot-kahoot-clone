<template>
  <div
    class="question-preview-edit flex column"
    :class="this.ansIdxActive === questIdx? 'question-show': '' "
  >
    <div class="question-details flex space-between">
      <div
        class="up-arrow"
        :class="{'answer-shown': answerShown}"
        @click="answerShown = !answerShown"
      ></div>

      <div class="flex input-question column">
        <b-input-group size="sm" :prepend="'question ' + questIdx">
          <b-form-textarea class="edit-title" v-model="quest.title"></b-form-textarea>
        </b-input-group>

        <b-input-group size="sm" :prepend="quest.time + ' sec'" class="sec-form">
          <b-form-input v-model="quest.time" type="range" min="5" max="60"></b-form-input>
        </b-input-group>

        <b-input-group size="sm" class="flex number-ans">
          <b-form-radio v-model="quest.answerMode" :name="'quest' + questIdx" :value="2">Two answer</b-form-radio>
          <b-form-radio v-model="quest.answerMode" :name="'quest' + questIdx" :value="4">Four answer</b-form-radio>
        </b-input-group>
      </div>

      <label class="flex relative">
        <img
          :src="quest.img"
          onerror="this.onerror=null; this.src='https://education.healthcaresource.com/wp-content/uploads/2014/02/question.jpg'"
          alt="quiz-pic"
        >
        <div class="upload-icon"></div>
        <input type="file" @change="uploadQuizPic" accept="image/png, image/jpeg" hidden />
      </label>
    </div>

    <div class="answers-details">
      <div
        class="flex answer-details"
        v-for="(answer, idx) in quest.answers"
        :key="idx"
        v-if="answerShown"
      >
        <b-input-group size="sm" class="answer-input grow-1" :prepend="'answer ' + (idx + 1)">
          <b-form-input v-model="answer.text"></b-form-input>
        </b-input-group>

        <div class="flex align-center">
          <div class="false-icon" v-if="!answer.isCorrect">%</div>
          <div class="true-icon" v-if="answer.isCorrect">@</div>
          <div>
            <b-form-checkbox
              v-model="answer.isCorrect"
              :name="'quest' + questIdx + 'answer' + idx"
              switch
            ></b-form-checkbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadImg } from "../services/cloudinaryService.js";

export default {
  name: "question-preview-edit",
  props: ["quest", "questIdx", "ansIdxActive"],
  data() {
    return {
      answerShown: false
    };
  },
  methods: {
    onQuestionClick(idx) {
      this.$emit("toggleIsActive", idx);
    },
    toggleAnswer() {
      console.log("toggle answer");
    },
    async uploadQuizPic(ev) {
      const newImgUrl = await uploadImg(ev);
      if (newImgUrl) this.quest.img = newImgUrl.url;
    }
  }
};
</script>

<style lang="scss">
.question-preview-edit {
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  > *:not(last-child),
  .answers-details > *:not(last-child) {
    margin-bottom: 2px;
  }

  .up-arrow {
    position: absolute;
    bottom: 6px;
    left: 6px;
    width: 15px;
    transition: 0.3s;
    &.answer-shown {
      transform: rotate(180deg);
    }
  }

  .question-details {
    padding-left: 20px;
    overflow: hidden;
    position: relative;
    background-color: white;
    min-height: 100px;
    width: 100%;
    border-radius: 5px;

    .input-question {
      width: 100%;
      padding: 10px 30px 15px 0;
      > *:not(:last-child) {
        padding-bottom: 10px;
      }

      .number-ans{
        > *:not(:last-child){
          margin-inline-end: 10px;
        }
      }
    }

    img {
      // height: -webkit-fill-available;
      object-fit: cover;
      width: 11.3125rem;
      height: 7.5625rem;
    }

    .sec-form {
      .range-form {
        width: 4px;
      }

      .form-control {
        width: 70px;
      }
    }

    .quest-time {
      position: absolute;
      border-radius: 2px;
      bottom: 10px;
      right: 10px;
      padding: 1px 6px;
      color: white;
      font-family: Montserrat-b;
      font-size: 0.75rem;

      background-color: rgba(0, 0, 0, 0.469);
    }
  }

  &.question-show {
    .answers-details {
      display: block !important;
    }
  }

  .answers-details {
    .answer-details {
      padding: 10px;
      background-color: white;

      > *:not(:last-child) {
        margin-right: 30px;
      }

      .true-icon,
      .false-icon {
        margin-right: 10px;
      }
    }
  }

  .custom-control-input:checked ~ .custom-control-label::before {
    background-color: green;
    border-color: green;
  }
  .custom-switch .custom-control-label::before {
    background-color: rgb(255, 56, 56);
    border-color: rgb(250, 63, 63);
  }
  .custom-switch .custom-control-label::after {
    background-color: white;
  }

  textarea.form-control {
    height: none;
  }
}
</style>