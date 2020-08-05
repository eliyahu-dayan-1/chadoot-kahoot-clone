<template>
  <button class="add-list-btn flex justify-center align-center"
  @click="$emit('addQuestionFunc')"
  >
    <div class="plus-white"></div>
  </button>
</template>

<script>
export default {
  name: 'add-question'
};
</script>

<style lang="scss">

.add-list-btn {
  z-index: 2;
  right: 60px;
  bottom: 60px;
  position: fixed;
  box-shadow: 0 0 0 1px rgba(111, 119, 130, 0.15),
    0 5px 20px 0 rgba(21, 27, 38, 0.424);
  border-radius: 50%;
  padding: 15px;
  background-color: rgba($color: $purple-2, $alpha: .9) ;
  cursor: pointer;
  width: 50px;
  height: 50px;
  transition: 0.25s;
  animation: add-list-btn 0.3s linear;
  &:hover {
    transform: translate(5px, 5px) rotate(90deg);
    width: 60px;
    height: 60px;
    div {
      width: 20px;
      height: 20px;
    }
  }
}

@keyframes add-list-btn {
  0% {
    visibility: hidden;
  }
  20% {
    background-color: black;
    visibility: hidden;
  }
  21% {
    width: 300px;
    height: 50px;
    right: 60px;
    bottom: 200px;
    border-radius: 4px;
  }

  100% {
    visibility: visible;
    width: 60px;
    height: 60px;
    right: 60px;
    bottom: 60px;
    transform: translate(5px, 5px);
  }
}
</style>