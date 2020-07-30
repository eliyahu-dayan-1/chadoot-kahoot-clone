<template>
  <main class="main-game flex column space-between align-center">
    <!--<progress-bar-v v-if="this.gameMode"  :gameMode="gameMode"></progress-bar-v>-->
    <!--<background-game></background-game>-->
    <choose-nick-name v-if="this.gameMode" :gameMode="this.gameMode" @setUserName="setUserName"></choose-nick-name>

    <intro-game v-if="this.gameMode == 'intro'" :introWord="this.introWord"></intro-game>

    <ans-statistic v-if="this.gameMode == 'showTrueAnswer'"></ans-statistic>
    <game-statistic v-if="this.gameMode == 'statistics'"></game-statistic>

    <div
      class="question-title"
      v-if="this.gameMode == 'showQuestion' || this.gameMode == 'showAnswers' "
    >{{this.quiz.questions[0].title}}</div>

    <answer-option
      v-if="this.gameMode == 'showTrueAnswer' || this.gameMode == 'showAnswers'"
      :gameMode="gameMode"
      :answers="this.quiz.questions[currQuestionIdx].answers"
      :chooseAnsIdx="chooseAnsIdx"
      @setChooseAns="setChooseAns"
    ></answer-option>
  </main>
</template>


<script>
import quizService from "@/services/quiz.service.js";
import ProgressBarV from "@/components/progress-bar-v.vue";
import BackgroundGame from "@/components/background-game.vue";
import AnswerOption from "@/components/answer-option.vue";
import ChooseNickName from "@/components/choose-nick-name.vue";
import IntroGame from "@/components/intro-game.vue";
import GameStatistic from "@/components/ans-statistic.vue";
import AnsStatistic from "@/components/game-statistic.vue";

export default {
  name: "game",
  data() {
    return {
      time: { showAns: 30, showQuestion: 5, startTime: null },
      quiz: null,
      gameMode: "nickName",
      startTime: null,
      gameInterval: null,
      introWord: null,
      currQuestionIdx: 0,
      isChooseIsCorrect: null,
      chooseAnsIdx: null,
      score: 0,
      user: null
    };
  },

  async created() {
    const { quizId } = this.$route.params;
    const foundQuiz = await quizService.getQuizById(quizId);
    this.quiz = foundQuiz;
    console.log(this.quiz);
  },

  computed: {},
  methods: {
    setUserName(ev) {
      this.startTime = Date.now();
      this.gameInterval = setInterval(this.setGameStutus, 1000);
      this.user = ev.target[0].value;
    },
    setChooseAns(isCorrectAns, idx) {
      console.log("chooseAnsIdx", this.chooseAnsIdx);
      if (
        this.isChooseIsCorrect ===
        null /*  && this.gameMode === "showAnswers" */
      ) {
        this.isChooseIsCorrect = isCorrectAns;
        this.score += isCorrectAns ? 20 : 0;
        this.chooseAnsIdx = idx;
        console.log("chooseAnsIdx", this.chooseAnsIdx);
      }
    },
    setGameStutus() {
      console.log("game mode is " + this.gameMode);
      console.log("game introWord is " + this.introWord);
      console.log("question is " + this.currQuestionIdx);

      let currTime = Date.now();
      let timePassed = currTime - this.startTime;

      if (timePassed <= 9000) {
        this.gameMode = "intro";
        if (timePassed < 3000) this.introWord = "ready";
        else if (timePassed < 6000) this.introWord = "set";
        else if (timePassed <= 9000) this.introWord = "go";
        return;
      }

      if (this.currQuestionIdx < this.quiz.questions.length) {
        let timePassedCurrQuest = (timePassed - 9000) % 25000;
        if (timePassedCurrQuest < 5000) this.gameMode = "showQuestion";
        else if (timePassedCurrQuest < 15000) this.gameMode = "showAnswers";
        else if (timePassedCurrQuest < 20000) this.gameMode = "showTrueAnswer";
        else if (timePassedCurrQuest < 24000) this.gameMode = "statistics";
        else if (timePassedCurrQuest >= 24000) {
          this.currQuestionIdx++;
          this.isChooseIsCorrect = null;
        }
      } else {
        clearInterval(this.gameInterval);
        this.gameMode = "gameOver";
        console.log("game over");
      }
    }
  },
  components: {
    ProgressBarV,
    AnswerOption,
    ChooseNickName,
    IntroGame,
    GameStatistic,
    AnsStatistic,
    BackgroundGame
  }
};
</script>

<style scoped lang="scss">
.main-game {
  // background-image: url("~@/assets/imgs/Snow.webm");
  height: 100vh;
  position: relative;
  padding: 0 10px 10px 10px;

  > *:first-child {
    margin: auto auto;
  }

  .question-title {
    font-family: $fnt-montserrat-b;
    font-size: 50px;
  }
}
</style>