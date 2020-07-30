<template>
  <section class="intruduction flex column justify-center align-center">
    <div class="intro-header">shape your chadoot with quiz</div>
    <form class="flex column" @submit.prevent="handleSubmit">
      <input class="input" placeholder="Join a game - enter PIN" type="text" v-model="gamePin" />
      <button class="button is-primary" type="submit">Enter</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "intruduction",
  data() {
    return {
      gamePin:null
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.gamePin);
      //     let user = new user({
      //     name: this.user.name,
      //     email: this.user.email,
      //     phone: this.user.phone
      //   });

      //   this.test = "AFTER SUBMIT";
    }
  }
};
</script>

<style lang="scss">
.intruduction {
    padding-top: 80px;
    padding-bottom: 40px;
    height: 100vh;
    animation: 10000ms ease-in-out infinite color-change;
    font-family: $fnt-montserrat-x-b;
    font-size: 50px;

  .intro-header {
    margin-bottom: 30px;
  }

  form {
    > * {
      width: 200px;
      height: 40px;

      &:not(last-child) {
        margin-bottom: 15px;
      }
    }
    input {
      font-weight: 700;
      font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
      background-color: rgb(255, 255, 255);
      border-width: 0.125rem;
      border-style: solid;
      border-color: rgb(204, 204, 204);
      border-image: initial;
      padding: 0.25rem 0.375rem;
      text-align: center;
    }

    &::placeholder {
      // text-align: center;
    }

    button {
      background-color: rgb(51, 51, 51);
      text-shadow: rgba(0, 0, 0, 0.25) 0px -1px 0px;
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-size: 20px;
      font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
      margin: auto;
      padding: 0.25rem 0.875rem;
      border-width: 0.0625rem;
      border-style: solid;
      border-image: initial;
      border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
      border-radius: 0.125rem;
      text-decoration: none;
      outline: 0px;
    }
  }
}

@keyframes color-change {
  0% {
    background-color: teal;
  }
  20% {
    background-color: gold;
  }
  40% {
    background-color: indianred;
  }
  60% {
    background-color: violet;
  }
  80% {
    background-color: green;
  }
  100% {
    background-color: teal;
  }
}
</style>