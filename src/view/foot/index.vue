<template>
  <div class="wrapper">
    <section class="section">
        <list></list>
    </section>
  </div>
</template>

<script>
import list from './component/list'
export default {
  name: 'footPage',
  data () {
    return {
      
    }
  },
  components: {
    list
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
  overflow:hidden;
  font-size: 12px;
  background: #f7f7f7;
}
.section{
  flex: 1;
  overflow-y: scroll; 
}
</style>
