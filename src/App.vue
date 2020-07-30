<template>
 <div class="app-container">
  <nav-bar></nav-bar>
   <router-view />
 </div>


</template>

<script>
import NavBar from '@/components/navbar';

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
