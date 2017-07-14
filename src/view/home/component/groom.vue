<template>
  <div>
      <div class="brand"> 
          <h4>推荐好物</h4>
          <div class="pic"> 
              <a v-for="item in data"><img :src="item.Picture" alt=""></a>
          </div> 
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props:['data']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.brand{
  margin-top:0.1rem;
  background:#fff;
   h4{
      height:0.4rem;
      line-height: 0.4rem;
      border-bottom: 1px solid #eee;
      text-align: center;
      font-weight:normal;
      font-size:.12rem
   }
   .pic{
      background: #fff;
      display: -webkit-flex;
      flex-wrap: wrap;
      a{
        width: 50%;
        display: block;
        img{
          width: 100%;
          height: 100%;
          display: block;
        }
      }
   }
}
</style>
