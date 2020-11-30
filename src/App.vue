<template>
  <div id="app">
    <!-- <div v-show="loader" class="loader">
      <PageLoader />
    </div>
    <Navbar v-show="!loader" />
    <router-view class="top" v-show="!loader" @hideloader="hideLoader" />
    <page-footer v-show="!loader" /> --> -->
    <div class="loader" v-show="elementVisible">
      <PageLoader />
    </div>
    <Navbar v-show="!elementVisible"/>  
    <router-view class="top" v-show="!elementVisible"></router-view>
    <page-footer v-show="!elementVisible"/>
  </div>
</template>

<script>
import Navbar from './components/NavBar'
import Footer from './components/PageFooter'
import PageLoader from './components/PageLoader'
/* eslint-disable no-unused-vars */

export default {
  name: 'App',
  components: {
    'Navbar': Navbar,
    'page-footer': Footer,
    PageLoader
  },
  data () {
    return {
      loader: true,
      loadCount: 0,
      elementVisible: true
    }
  },
  watch: {
    $route (to, from) {
      this.loader = true
    }
  },
  created() {
    setTimeout(() => this.elementVisible = false, 4000)
  }
}
</script>

<style>
.top {
  margin-top: 5rem;
}

.loader {
  height: 100vh;
  width: 100vw;
  background-color: #051429;
  overflow-y: auto;
}
router-view{
  position: absolute;
}

</style>
