<template>
  <div class="progress-bar">
    <div v-bind:style="timing"  class="trans">a</div>
    <b-progress :value="value" :max="max" variant="success" animated></b-progress>
  </div>
</template>

<script>
export default {
  name: "progress-bar-v",
  props: ["gameMode"],
  data() {
    return {
      value: 100,
      max: 100,
      timeInterval: null,
      timing: { animation: 'time ' + 2 + 's ' + '1'}
    };
  },
  methods: {
    timer() {
        this.value = ((1000 * this.time.while)  + this.time.start - Date.now() )/1000;
        console.log(this.value)
    },
    refreshTimer(){

    }
  },
  created() {
    setTimeout(()=>{
        this.timing = { animation: 'time ' + 4 + 's ' + '1'}
        }, 4000)
    this.value = this.time.while;
    this.max = this.time.while;
    this.timeInterval =  setInterval(this.timer, 1000)
  },
  mounted(){
      this.value = this.time.start;
      this.max = this.time.while;
  }
};
</script>

<style lang="scss">
.progress {
  // background-color: none;
  background: 0;
  border-radius: 0;
}
.progress-bar {
    // position: absolute;
    // top: 0;
    width: 100%;
     // background: 0;
}

.trans{
    background-color: blue;
    width: 0%;
    animation-timing-function: linear;
}

@keyframes time {
  0% {
    width: 100%;
  }
  100% {
      width: 0%;
  }
}

</style>