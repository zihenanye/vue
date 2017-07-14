<template>
  <div class="cont">
    <alerts></alerts>
    <cards></cards>
    <cards></cards>
    <cards></cards>
  </div>
</template>

<script>
import alerts from '../component/alerts'
import cards from '../component/cards'
export default {
  name: 'allPage',
  data () {
    return {
      
    }
  },
  components: {
    alerts,
    cards
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 

</style>
