<template>
  <div class="cont">
    <car></car>
  </div>
</template>

<script>
import car from '../component/car'
export default {
  name: 'allPage',
  data () {
    return {
      
    }
  },
  components: {
    car
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
.cont{
  height:80%;
}
</style>
