<template>
  <header class="flex space-between align-center full">
    <router-link class="logo" to="/">chadooot</router-link>

    <nav class="flex">
      <router-link to="/">Home</router-link>
      <router-link class="logo" to="/login">Login/Signup</router-link>
      <router-link class="logo" to="/About">About</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  position: fixed;
  top: 0px;
  padding: 0 20px;
  z-index: 10;
  width: 100%;
  background-color: $purple-2;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.75);
  // margin-bottom: 40px;

  nav {
    font-family: Montserrat-b;
    > * {
      padding: 20px 0;
    }

    > *:not(last-child) {
      padding-left: 10px;
    }
    > *:not(first-child) {
      padding-right: 10px;
    }
  }

  a {
    color: white;
  }

}
</style>
