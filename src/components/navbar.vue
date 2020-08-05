<template>
  <header class="flex space-between align-center full">
    <!--<div class="all-screen"></div>-->
    <router-link class="logo" to="/">chadooot</router-link>

    <nav class="flex">
      <router-link to="/">Home</router-link>
      <router-link class to="/login">Login/Signup</router-link>
      <router-link class to="/about">About</router-link>
      <router-link class to="/create">Create</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  position: fixed;
  top: 0px;
  padding: 0 0 0 20px;
  z-index: 10;
  width: 100%;
  background-color: rgba($purple-2, 0.95);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.75);

  nav {
    a {
      color: white;
      font-family: Montserrat-b;
    }

    > * {
      padding: 20px 0;
      padding-inline-start: 20px;
      padding-inline-end: 20px;
      border-inline-end: 1px solid
        darken($color: rgba($purple-2, 0.95), $amount: 6);

      &:first-child {
        border-inline-start: 1px solid
          darken($color: rgba($purple-2, 0.95), $amount: 6);
      }
    }

    .router-link-exact-active {
      background-color: darken($color: rgba($purple-2, 0.95), $amount: 3);
    }
  }
}

@include for-narrow-layout {
  .app-container {
    z-index: 2;
  }

  header {
    height: 62px;

    // .all-screen{
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   height: 100vh;
    //   background-color: rgba(117, 117, 117, 0.231);
    //   width: 100vw;
    // }

    nav {
      z-index: 7;
      position: absolute;
      right: 0;
      top: 0;
      height: 100vh;
      padding-top: 62px;
      background-color: inherit;
      flex-direction: column;
      transform: translateX(100%);

      > * {
        border-bottom: 2px solid
          darken($color: rgba($purple-2, 0.95), $amount: 6);

        &:hover a {
          color: darken($color: rgba($purple-2, 0.95), $amount: 6) !important;
        }

        &:first-child {
          border-top: 2px solid
            darken($color: rgba($purple-2, 0.95), $amount: 6);
        }
      }

      .router-link-exact-active {
        color: darken($color: rgba($purple-3, 0.95), $amount: 6);
        border-bottom: 2px solid
          darken($color: rgba($purple-3, 0.95), $amount: 6);
      }
    }
  }
}
</style>
