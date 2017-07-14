<template>
  <div class="cont">
    <alerts></alerts>
    <quan></quan>
  </div>
</template>

<script>
import alerts from '../component/alerts'
import quan from '../component/quan'
export default {
  name: 'overduePage',
  data () {
    return {
      
    }
  },
  components: {
    alerts,
    quan
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 

</style>
