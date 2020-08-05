<template>
  <main class="main-game flex column space-between align-center">
    <!--<progress-bar-v v-if="this.gameMode"  :gameMode="gameMode"></progress-bar-v>-->
    <!--<background-game></background-game>-->
    <choose-nick-name v-if="this.gameMode" :gameMode="this.gameMode" @setUserName="setUserName"></choose-nick-name>

    <intro-game v-if="this.gameMode == 'intro'" :introWord="this.introWord"></intro-game>
    <game-over v-if="this.gameMode == 'gameOver'"></game-over>

<!---->
    <ans-statistic v-if="this.quiz && this.gameMode == 'showTrueAnswer'" :countAns="this.countAnswers[this.currQuestionIdx]" :answers="this.quiz.questions[this.currQuestionIdx].answers" ></ans-statistic>
    <game-statistic v-if="this.gameMode == 'statistics'" :scoreStatus="this.quiz.scoreStatus" ></game-statistic> 

    <div 
    class="question-preview-game flex column align-center"
    v-if="this.gameMode == 'showAnswers' || this.gameMode == 'showQuestion'"    
    >
      <div class="question-title">{{this.quiz.questions[this.currQuestionIdx].title}}</div>
      <img :src="this.quiz.questions[this.currQuestionIdx].img" />
    </div>

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
import AnsStatistic from "@/components/ans-statistic.vue";
import GameStatistic from "@/components/game-statistic.vue";
import GameOver from "@/components/game-over.vue";

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
      user: null,
      countAnswers: null
    };
  },
  components: {
    ProgressBarV,
    AnswerOption,
    ChooseNickName,
    IntroGame,
    GameStatistic,
    GameOver,
    AnsStatistic,
    BackgroundGame
  },
  async created() {
    const { quizId } = this.$route.params;
    this.quiz = await quizService.getQuizById(quizId);
    this.countAnswers = Array(this.quiz.questions.length).fill(0).map((question, idx) => Array(this.quiz.questions[idx].answers.length).fill(0))
    console.log(this.quiz);
  },

  computed: {},
  methods: {
    setUserName(ev) {
      this.startTime = Date.now();
      this.user = ev.target[0].value;
      this.gameMode = "intro";
      this.gameInterval = setInterval(this.setGameStutus, 500);
      this.quiz.scoreStatus = {[this.user]: 0, fj: 9};

    },
    setChooseAns(isCorrectAns, idx) {
      console.log("chooseAnsIdx", this.chooseAnsIdx);
      if (this.isChooseIsCorrect === null && this.gameMode === "showAnswers") {
        this.isChooseIsCorrect = isCorrectAns;
        this.score += isCorrectAns ? 20 : 0;
        this.quiz.scoreStatus[this.user] = this.score;
        this.quiz.scoreStatus = {...this.quiz.scoreStatus}
        this.chooseAnsIdx = idx;
        this.countAnswers[this.currQuestionIdx][idx]++;
        console.log("chooseAnsIdx", this.chooseAnsIdx);
      }
    },
    //players count
    //highscore count
    setGameStutus() {
      console.log("game mode is " + this.gameMode);
      console.log("this.introWord " + this.introWord);
      console.log("question is " + this.currQuestionIdx);

      // let currTime = ;
      let timePassed = Date.now() - this.startTime;

      if (
        timePassed <= 4500 &&
        this.currQuestionIdx === 0 &&
        this.gameMode === "intro"
      ) {
        console.log("timePassed", timePassed);
        if (timePassed < 1500) this.introWord = "ready";
        else if (timePassed < 3000) this.introWord = "set";
        else if (timePassed <= 4500) this.introWord = "go";
        return;
      }

      if (this.currQuestionIdx < this.quiz.questions.length) {
        let timePassedCurrQuest = (timePassed - 4500) % 24500;
        console.log(timePassedCurrQuest)
        if (timePassedCurrQuest < 5000) this.gameMode = "showQuestion";
        else if (timePassedCurrQuest < 15000) this.gameMode = "showAnswers";
        else if (timePassedCurrQuest < 20000) this.gameMode = "showTrueAnswer";
        else if (timePassedCurrQuest < 24000) this.gameMode = "statistics";
        else if (timePassedCurrQuest >= 24000) {
          this.currQuestionIdx++;
          this.isChooseIsCorrect = null;
          this.chooseAnsIdx = null;
        }
      } else {
        clearInterval(this.gameInterval);
        this.gameMode = "gameOver";
        console.log("game over");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.main-game {
  // background-image: url("~@/assets/imgs/Snow.webm");
  position: relative;
  padding: 0 10px 10px 10px;

  > *:first-child {
    margin: auto auto;
  }

  .question-preview-game {
    font-family: $fnt-montserrat-b;
    font-size: 50px;
    text-align: center;
    > *:not(:last-child) {
      margin-bottom: 20px;
    }
    img {
      height: 200px;
    }
  }
}
</style>