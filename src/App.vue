<template>
  <div class="h-screen">
    <Header/>

    <!--content-->
    <router-view></router-view>

    <!--footer-->
    <Footer/>
  </div>
</template>
<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name:'AppComponent',
  components:{
    Header,
    Footer
  }
}
</script>
<style lang="">
  
</style>