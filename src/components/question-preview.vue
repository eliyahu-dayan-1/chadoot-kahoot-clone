<template>
  <div
    class="question-preview flex column"
    :class="this.ansIdxActive === questIdx? 'question-show': '' "
  >
    <button class="question-details flex space-between" @click="onQuestionClick(questIdx)">
      <div class="question-text-cont flex column">
        <div class="quest-idx">{{questIdx}} - Qs</div>
        <div class="quest-title">{{quest.title}}</div>
      </div>
      <img
        :src="quest.img"
        onerror="this.onerror=null; this.src='https://education.healthcaresource.com/wp-content/uploads/2014/02/question.jpg'"
        alt="quiz-pic"
      />
      <div class="quest-time">{{quest.time/1000}} sec</div>
    </button>
    <div class="answers-details">
      <div
        class="flex space-between answer-details"
        v-for="(answer, idx) in quest.answers"
        :key="idx"
      >
        <div>{{answer.text}}</div>
        <div class="false-icon" v-if="!answer.isCorrect">%</div>
        <div class="true-icon" v-if="answer.isCorrect">@</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "question-preview",
  props: ["quest", "questIdx", "ansIdxActive"],
  data() {
    return {};
  },
  methods: {
    onQuestionClick(idx) {
      this.$emit("toggleIsActive", idx);
    }
  }
};
</script>

<style lang="scss">
.question-preview {
  width: 100%;
  margin-bottom: 30px;

  > *:not(last-child),
  .answers-details > *:not(last-child) {
    margin-bottom: 2px;
  }

  .question-details {
    overflow: hidden;

    position: relative;
    background-color: white;
    min-height: 100px;
    width: 100%;
    border-radius: 5px;
    .question-text-cont {
      padding: 20px 20px 20px 10px;
    }
    .quest-idx {
      margin-bottom: 10px;
    }

    .quest-title {
      font-family: Montserrat-b;
    }

    img {
      // height: -webkit-fill-available;
      object-fit: cover;
      width: 11.3125rem;
      height: 7.5625rem;
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
    display: none;

    .answer-details {
      min-height: 60px;
      padding: 10px;
      background-color: white;

      > * {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>