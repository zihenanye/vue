<template>
  <div>
    <div class="product"> 
        <img  v-for="item in data" :src="item.Picture" alt="">
        <img  v-for="item in data1" :src="item.Picture" alt="">
    </div>
  </div>
</template>   

<script>
export default {
  data () {
    return {
      
    }
  },
  props:['data','data1']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.product{
  img{
      width:100%;
      display:block;
  }
}
</style>
