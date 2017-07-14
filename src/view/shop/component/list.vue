<template>
  <div class="wrap">
    <h4>大家都在买的宝贝</h4>
    <div class="list">
      <dl class="item" v-for="item in data"> 
        <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID}}">
          <dt><img :src="item.Pictures"></dt>
          <dd> 
            <span>{{item.Subject}}</span>
            <b>￥ {{item.FinalPrice}}</b>
          </dd>
        </router-link>
      </dl>
    </div>
  </div> 
</template>

<script>

export default {
  name: 'list',
  data () {
    return {}
  },
  props:['data']
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
.wrap{
  box-sizing:border-box;
  text-align:center;
  overflow: hidden;
  background: #fff;
  h4{
      font-size:.12rem;
      height:.4rem;
      line-height:.4rem;
      font-weight:normal;
      background: #fff;
      border-bottom: 1px solid #eee;
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
        span{
          display: block;
          overflow: hidden;
          width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding:0.05rem;
          color: #999;
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
