<template>
    <div class="m-shopping-wrap"> 
        <h4 v-if="data.Title">{{data.Title}}</h4>
        <div class="m-shopping-list">
          <dl v-for="item in data.Products" class="shopping-item"> 
            <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID}}">
              <dt><img :src="item.Pictures"></dt>
              <dd> 
                <span class="name">{{item.Subject}}</span>
                <b>¥ {{item.FinalPrice}}</b>
              </dd>
            </router-link>
          </dl>
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
.m-shopping-wrap{
    box-sizing:border-box;
    text-align:center;
    overflow: hidden;
    h4{
        font-size:.12rem;
        height:.3rem;
        line-height:.3rem;
        font-weight:normal;
    }
    .m-shopping-list{
      overflow: hidden;
      width: 100%;
      background: #eee;
      .shopping-item{
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
          font-size: .13rem;
          text-align: left;
          color:#242424;
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
