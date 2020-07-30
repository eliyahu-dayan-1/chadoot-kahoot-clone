<template>
  <div class="answers">
    <button
      v-for="(answer, idx) in answers"
      class="answer flex align-center space-between"
      :key="idx"
      @click="onAnsClicked(answer.isCorrect, idx)"
      :class="{ isTrue: answer.isCorrect, 'is-choose': chooseAnsIdx === idx }"
    >
      <div class="flex align-center">
        <div :class="shapes[idx] + ' icon'"></div>
        <div>{{answer.text}}</div>
      </div>
      <div v-if="gameMode === 'showTrueAnswer'" :class="{'true-icon': answer.isCorrect, 'false-icon': !answer.isCorrect}"></div>
    </button>
  </div>
</template>

<script>
export default {
  name: "answer-option",
  props: ["answers", "gameMode", "chooseAnsIdx"],
  data() {
    return {
      shapes: [
        "triangular-icon",
        "circle-icon",
        "rectangle-icon",
        "pentagon-icon"
      ]
    };
  },
  methods: {
    onAnsClicked(isCorrectAns, idx) {
      this.$emit("setChooseAns", isCorrectAns, idx);
    }
  }
};
</script>

<style lang="scss">
.answers {
  width: 100%;
  height: 40%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;

  .answer {
    border-radius: 10px;
    padding: 0 20px;
    font-family: $fnt-montserrat-b;
    color: white;
    font-size: 20px;

    .true-icon, .false-icon{
      width: 30px;
    }

    &.is-choose,
    &:active {
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
    }

    .icon {
      width: 50px;
      margin-inline-end: 20px;
    }
  }

  &.showTrueAns .answer {
    background-color: red;
    &.isTrue {
      background-color: greenyellow;
    }
  }

  > :nth-child(1) {
    background-color: $red-3;
    &.is-choose,
    &:active {
      background-color: lighten($red-3, 10%);
    }
  }
  > :nth-child(2) {
    background-color: $blue-2;
    &.is-choose,
    &:active {
      background-color: lighten($blue-2, 10%);
    }
  }
  > :nth-child(3) {
    background-color: $yellow-1;
    &.is-choose,
    &:active {
      background-color: lighten($yellow-1, 10%);
    }
  }
  > :nth-child(4) {
    background-color: $green-2;
    &.is-choose,
    &:active {
      background-color: lighten($green-2, 10%);
    }
  }
}
</style>

