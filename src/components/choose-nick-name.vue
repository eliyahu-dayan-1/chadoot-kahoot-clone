<template>
  <form v-if="this.gameMode === 'nickName'" class="nickname-form flex justify-center align-center column" @submit="onNameSub">
    <input v-model="user" placeholder="Your nickname" />
    <button>start</button>
  </form>
</template>

<script>
export default {
  name: "choose-nick-name",
  data() {
    return {
      user: ''
    }
  },
  props: ["gameMode"],
  methods: {
    onNameSub(ev) {
      ev.preventDefault();
      this.$emit("setUserName", ev);
    }
  }
};
</script>

<style lang="scss">
  .nickname-form{
    background-color: greenyellow;
    border-radius: 10px;
    width: 400px;
    height: 250px;

    input{
      margin-bottom: 30px;
      background: 0;
      border: 0;
      border-bottom: 0.1px solid black;
      font-size: 20px;
      padding-bottom: 10px;

    }

    button{
      width: max-content;
      padding: 12px 40px;
      border-radius: 5px;
      box-shadow: inset 0px -7px 0px 0px rgba(0, 0, 0, 0.35);
      font-family: $fnt-montserrat-b;
      color: white;
      background-color: $green-2;
      transition: .2s;
      &:active{
         box-shadow: none;

      } 
      
    }
  }

  .pentagon-icon{
    width: 20px;
  }

</style>