<template>
  <div>
      <div class="classify"> 
        <dl v-for="item in data">
          <dt><img :src="item.Picture" alt=""></dt>
          <dd>{{item.SlideName}}</dd>
        </dl>
      </div>
  </div>
</template>   

<script>
export default {
  data () {
    return {
      
    }
  },
  props:['data']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.classify{
  display: -webkit-box;
  width: 100%;
  background: #fff;
  dl{  
    width: 100%;
    flex:1;
    font-size: .14rem;
    text-align: center;
  }
  dt{
    font-size: .3rem;
    img{
      width: 100%;
    }
  }
  dd{
    padding:10px 0;
  }
  
}
</style>
