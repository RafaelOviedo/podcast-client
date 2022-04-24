<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
    }
  },
}

</script>

<style>
#app {
  font-family: Poppins-Black;
}

html::-webkit-scrollbar {
  display: none;
}
</style>
