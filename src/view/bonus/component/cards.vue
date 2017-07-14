<template>
  <div class="bonus-list">
    <div class="bonus-content"> 
      <div class="b-amount">
        <p><i>¥</i><span>10</span></p> 
        <em>满60使用</em> 
      </div> 
      <div class="bonus-info"> 
        <p> 新人注册礼 </p> 
        <em>2017.05.19-2017.05.26</em>   
      </div>  
    </div> 
    <div class="bonus-extra"> 
      <p class="handle-show">使用说明</p>   
    </div> 
  </div>
</template>

<script>

export default {
  name: 'cards',
  data () {
    return {}
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
.bonus-list{
  margin-bottom: 10px;
  .bonus-content{
    background: #fff;
    padding: 10px;
    margin: 10px;
    margin-bottom: 0;
    border-bottom: 1px solid #eee;
    position: relative;
    .b-amount{
      border-right: 1px solid #eee;
      position: absolute;
      left: 20px;
      top: 20px;
      color: #991f33;
      padding-right: 20px;
      p{
        line-height: 20px;
        i{
          font-style: normal;
        }
        span{
          font-size: .26rem;
        }
      }
      em{
        font-weight: 500;
        font-style: normal;
        font-size: .12rem;
      }
    }
    .bonus-info{
      padding: 10px 0 0 1rem;
      font-size: .13rem;
      p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: .08rem;
      }
      em{
        font-weight: 500;
        font-style: normal;
        color: #999;
      }
    }
  }
  .bonus-extra{
    background: #fff;
    padding: 10px;
    margin: 10px;
    margin-top: 0;
    position: relative;
    p{
      color:#999;
      font-size: .13rem;
    }
  }
}
</style>
