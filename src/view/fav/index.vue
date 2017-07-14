<template>
  <div class="wrapper">
    <section>
      <div class="fav">
        <router-link to="/home/index/2">
          <img src="../../static/image/fav.png" alt="">
          <span>去首页看看</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'fav',
  data () {
    return {}
  },
  components: {
    
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: -webkit-flex;
  flex-direction: column;
  overflow:hidden;
  font-size: 16px;
}
section{
    flex: 1;
    overflow-y: scroll;
}
.fav{
  height: 100%;
  a{
    display: block;
    width: 30%;
    position: absolute;
    left: 35%;
    top: 20%;
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
