<template>
  <div id="app">
    <Navbar />
    <router-view class="top"></router-view>
    <!-- <page-footer /> -->
  </div>
</template>

<script>
import Navbar from './components/NavBar'
// import Footer from './components/PageFooter'

export default {
  name: 'App',
  components: {
    'Navbar': Navbar,
    // 'page-footer': Footer
  }
}
</script>

<style>
.top {
  margin-top: 5rem;
}

</style>
