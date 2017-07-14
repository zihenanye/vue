<template>
  <div>
      <div class="brand"> 
          <h4>严选品牌</h4>
          <div class="pic"> 
              <div class="left">
                  <a><img src="//img.haimi.com/FojyqPOoPcb_iozPd2n0Nj7Gz4ij"></a>
                  <a><img src="//img.haimi.com/FhUaqFBlvdqeBwftFyzC5e7GDQnn"></a>
              </div>
              <div class="right">
                  <a><img src="//img.haimi.com/FjtR_vZBEQTrHyw5IAcUmvUtHqZ7"></a>
              </div>
          </div> 
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
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
      position: relative;
      display:-webkit-flex;
      div{
          flex:5.5;
          img{
            width:100%;
            display:block;
          }
      }
      .right{
          flex:5.1;
          img{
            width:100%;
          }
      }
   }
}
</style>
