<template>
  <div class="family">
      <div class="banner" v-if="pic!=''">
        <img :src="pic" alt="">
      </div>
     <buy :data=classPage></buy>
  </div>
</template>

<script>
import buy from '@/components/buy'
export default {
  data () {
    return {
    	pic:"",
      classPage:""
    }
  },
  components: {
    buy
  },
  watch:{
  	"$route":"getData"
  },
  created(){
    this.getData()
  },
  methods: { 
    getData () {
    	var pageId=this.$route.params.id;
    	this.$http.get('/api/jujia'+pageId).then(function (response) {
         this.pic=response.body.data[0].Records[0].Picture;
      }, function (response) {
         console.log(response)
      })
      this.$http.get('/api/classPage'+pageId).then(function (response) {
         this.classPage=response.body.data[0];
         //console.log(response.body.data[0])
      }, function (response) {
         console.log(response)
      })
    }
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.family{
  box-sizing:border-box;
  text-align:center;
  overflow: hidden;
  .banner{
      img{
        width: 100%;
        display: block;
      }
  }
  h4{
      font-size:.12rem;
      height:.4rem;
      line-height:.4rem;
      font-weight:normal;
      background: #eee;
  }
  .list{
    overflow: hidden;
    width: 100%;
    background: #eee;
    .item{
      width: 50%;
      float: left;
      box-sizing: border-box;
      margin-bottom: 0.06rem;
      &:nth-child(even){
        padding-left:0.03rem;
      }
      &:nth-child(odd){
        padding-right:0.03rem;
      }
      dt{
        width: 100%;
        position: relative;
        img{
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
        }
        &:after{
          content: "";
          padding-top: 100%;
          display: block;
          width: 100%;
        }
      }
      dd{
        background: #fff;
        width: 100%;
        padding:0.1rem;
        box-sizing: border-box;
        font-size: .12rem;
        text-align: left;
        span{
          display: block;
          overflow: hidden;
          width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding:0.05rem;
        }
        b{
          font-weight: normal;
          padding:0.05rem;
        }
      }
    }  
  }
}
</style>
