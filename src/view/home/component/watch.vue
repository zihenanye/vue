<template>
  <div>
      <div class="watch"> 
          <h4>
               <img v-for="item in data" :src="item.Picture" alt="">
          </h4>
          <div class="img-box"> 
            <div class="img-list">
                <a v-for="item in data2"> 
                  <img :src="item.Picture" alt="">
                  <div> 
                    <p>{{item.SlideName}}</p>
                    <b>{{item.Description}}</b>
                  </div>
                </a>
            </div>
          </div>  
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props:['data','data2']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.watch{
  margin-bottom:0.1rem;
  padding:0.1rem;
  background:#fff;
   h4{
      img{
          width:100%;
          display:block;
      }
   }
   .img-box{
      background: #fff;
      width: 100%;
      height: 140px;
      overflow-x: auto;
      .img-list{
        width: 100%;
        height: 100%;
        display:-webkit-box;
        a{
          display:block;
          width: 28%;
          img{
              width:100%;
              display:block;
          }
          div{
              text-align:center;
              p{
                  font-size:0.12rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  text-align: center;
              }
              b{
                  font-size:0.12rem;
                  color:#999;
                  display:block;
              }
          }
      }
      }
   }
}
</style>
