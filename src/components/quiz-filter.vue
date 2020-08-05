<template>
  <form class="flex justify-center">
    <div class="input-pin-game flex aling-center space-between">
      <input
        @input="filtered"
        type="text"
        placeholder="Find me a quiz about..."
        v-model="filterBy.searchStr"
      />
      <div class="search">search</div>
    </div>
    <div class="search-quiz flex aling-center space-between">
      <input
        @input="filtered"
        type="text"
        placeholder="Insert PIN game"
        v-model="filterBy.searchStr"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "quiz-filter",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ],
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
form {
  width: 100%;

  >*{
    &:not(:last-child){
      margin-right: 10px;
    }
  }
  .search-quiz, .input-pin-game {
    height: 50px;
    border: 2px solid $purple-2;
    border-radius: 5px;
    background-color: white;
    padding: 0 20px;
    margin-bottom: 30px;

    input {
      width: 100%;
      height: 100%;
      background: 0;
      border: 0;
      cursor: pointer;
    }

    .search {
      width: 20px;
    }
  }
}
</style>