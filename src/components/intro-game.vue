<template>
  <transition name="slide-fade" mode="out-in">
    <div :key="introWord" class="intro">{{introWord}}</div>
  </transition>
</template>

<script>
export default {
    name: 'intro-game',
    props: ['introWord']
};
</script>

<style lang="scss">

.intro {
//   animation: zoominoutsinglefeatured 2s ease-in;
    font-size: 100px;
    font-family: $fnt-montserrat-x-b;
}

.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: scale(0.1, 0.1);
  opacity: 0;
}
.slide-fade-leave-to {
  opacity: 0;
}

</style>