<template>
  <div class="wrapper">
    <headerBar></headerBar>
    <section class="section">
        <router-view></router-view>
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
import headerBar from '@/components/classHeader'
import footerBar from '@/components/Footer'
export default {
  name: 'homePage',
  data () {
    return {}
  },
  components: {
    headerBar,
    footerBar
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: -webkit-flex;
  flex-direction: column;
  background:#f7f7f7;
  font-size:16px;
}
.section{
    flex: 1;
    overflow-y: scroll;
}
</style>
