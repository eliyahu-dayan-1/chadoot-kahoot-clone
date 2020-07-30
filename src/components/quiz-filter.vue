<template>
  <form class="flex align-center justify-center">
    <div class="flex aling-center space-between search-quiz">
      <input
        @input="filtered"
        type="text"
        placeholder="Find me a quiz about..."
        v-model="filterBy.searchStr"
      />
      <div class="search">search</div>
    </div>
  </form>
</template>

<script>
export default {
  name: "quiz-filter",
  data() {
    return {
      filterBy: {
        searchStr: ""
      }
    };
  },
  methods: {
    filtered() {
      this.$emit("setFilter", { ...this.filterBy });
    }
  }
};
</script>

<style lang="scss">
.search-quiz {
  width: 500px;
  height: 50px;
  border: 2px solid $purple-2;
  border-radius: 5px;
  background-color: white;
  padding: 0 20px;
  margin: 30px 0;
  
  input{
    width: 100%;
    height: 100%;
    background: 0;
    border: 0;
    cursor: pointer;
  }

  .search{
    width: 20px;
  }
}
</style>