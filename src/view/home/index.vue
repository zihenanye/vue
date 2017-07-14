<template>
  <div class="wrapper">
    <headerBar></headerBar>
    <section class="section">
        <navlist v-position-static=""></navlist>
        <router-view></router-view>
    </section>
    <footer>
      <footerBar></footerBar>
    </footer>
  </div>
</template>

<script>
import headerBar from '@/components/Header'
import footerBar from '@/components/Footer'
import navlist from './component/navlist'
import positionStatic from '@/directive/positionStatic'

export default {
  name: 'homePage', 
  data () {
    return {}
  },
  components: {
    headerBar,
    navlist,
    footerBar
  },
  direvtives:{
    positionStatic
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
.wrapper{
  background: #f7f7f7;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow:hidden;
  font-size:16px;
}
header{
  position:absolute;
  top:0;
  width: 100%;
}
.section{
    position: absolute;
    width: 100%;
    top: 0.4rem;
    bottom:0.5rem;
    overflow:hidden;
    overflow-y: scroll;
}
footer{
  position:absolute;
  bottom:0;
  width: 100%;
}
</style>
