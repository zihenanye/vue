<template>
  <div class="car">
    <router-link to="/home/index/2">
      <img src="../../../static/image/order.png" alt="">
      <span>去首页看看</span>
    </router-link>
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
.car{
  height:80%;
  text-align: center;
  margin: 0 auto;
  position: relative;
  a{
    display: block;
    width: 30%;
    text-align: center;
    position: absolute;
    left: 35%;
    top: 40%;
    img{
      display: block;
      width: 100%;
      margin-bottom: 10%;
    }
    span{
      display: block;
      margin: 0 auto;
      width: 70%;
      line-height: .2rem;
      border: 1px solid #000;
      color: #000;
      text-align: center;
      font-size: .12rem;
    }
  }
}
</style>
