<template>
  <section class="answers-score flex">
    <div v-for="(count, idx) in countAns" class="answer-score flex column align-center" :key="idx">
      <div class="count-score-val flex justify-center align-center">
        <div class="count">{{count}}</div>
        <div :class="(answers[idx].isCorrect)? 'black-true-icon' : 'black-false-icon'"></div>
      </div>
      <div class="count-score" :style="{'height': (count)? 100 * count/highCountAns + 'px' : '0'}"></div>
      <div class="icon-wraper flex justify-center align-center">
        <div :class="shapes[idx] + ' icon'"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ans-statistic",
  props: ["countAns", "answers"],
  created() {
    this.highCountAns = Math.max(...this.countAns);
  },
  data() {
    return {
      highCountAns: null,
      shapes: [
        "triangular-icon",
        "circle-icon",
        "rectangle-icon",
        "pentagon-icon"
      ]
    };
  }
};
</script>

<style scope lang="scss">
.answers-score {
  min-width: 300px;
  padding: 15px 30px;
  align-items: flex-end;

  border-radius: 10px;

  .answer-score {
    width: 120px;
    
    .count {
      margin-right: 15px;
    }

    .black-true-icon,
    .black-false-icon {
      width: 20px;
    }

    > * {
      width: 100%;
      &:not(:last-child) {
        // margin-inline-end: 20px;
        margin-bottom: 10px;
      }
    }

    &:not(:last-child) {
      margin-inline-end: 25px;
    }

    .count-score {
      min-height: 10px;
    }

    .icon-wraper {
      padding: 10px 55px;
      .icon {
        width: 30px;
      }
    }
  }

  > :nth-child(1) > *:not(:first-child) {
    background-color: $red-3;
  }
  > :nth-child(2) > *:not(:first-child) {
    background-color: $blue-2;
  }
  > :nth-child(3) > *:not(:first-child) {
    background-color: $yellow-1;
  }
  > :nth-child(4) > *:not(:first-child) {
    background-color: $green-2;
  }
}
</style>