<template>
  <main class="main-home flex column align-center ">
    <!--<introduction></introduction>-->
    <quiz-filter  @setFilter="setFilter"></quiz-filter>
    <quiz-list v-if="this.quizs.length" :quizs="quizsToShow"></quiz-list>
  </main>
</template>  

<script>
import quizService from "@/services/quiz.service.js";
import QuizFilter from "@/components/quiz-filter.vue";
import Introduction from "@/components/introduction.vue";
import QuizList from "@/components/quiz-list.vue";

export default {
  name: "quiz-home",
  data() {
    return {
      quizs: [],
      filterBy: null
    };
  },
  computed: {
    quizsToShow() {
      var filter = this.filterBy;
      if (!filter) return this.quizs;
      var quizsToShow = [...this.quizs];
      return quizsToShow.filter(quiz => {
        return (
          quiz.name.toLowerCase().includes(filter.searchStr.toLowerCase()) ||
          quiz.description
            .toLowerCase()
            .includes(filter.searchStr.toLowerCase())
        );
      });
    }
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = { ...filterBy };
    }
  },

  async created() {
    this.quizs = await quizService.getQuizs();
    console.log(this.quizs);
    // eventBus.$on("quizSaved", this.saveQuiz);
  },
  components: {
    QuizFilter,
    QuizList,
    Introduction,
  }
};
</script>

<style lang="scss">
.main-home{
  padding-bottom: 20px;
}
</style>