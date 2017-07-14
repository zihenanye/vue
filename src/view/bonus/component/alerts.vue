<template>
  <div class="alert">
    <div class="bonus-text"> 
      <i>提醒</i> 
      <p><span>1、红包/优惠券每个订单</span>只可使用一个</p> 
      <p><span>2、红包/优惠券金额大于订单应付金额时，</span>差额不予退回。</p> 
      <p><span>3、使用红包/优惠券的订单发生退款，红包/优惠券不予退回</span>（特殊未指定的除外）</p> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'car',
  data () {
    return {}
  },
  components: {
    
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
.alert{
  background: #fff;
  margin-top: 5px;
  .bonus-text{
    padding: 15px;
    line-height: 20px;
    background: #fff;
    color: #6a6a6a;
    font-size: .12rem;
    i{
      font-weight: 500;
      font-style: normal;
    }
    p{
      
    }
  }
  
}
</style>
