<template>
  <div class="search-bar"> 
    <div class="text"> 
      <span class="fa fa-search"></span> 
      <input class="fl f12 c_fff" placeholder="搜索宝贝" type="text">  
    </div>
    <a href="/#/search" class="submit">搜索</a>
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
.search-bar{
  height: 0.4rem;
  background: #242424;
  padding: 0.2rem;
  color: #fff;
  border-bottom: 1px solid #e5e5e5;
  display:-webkit-flex;
  box-sizing:border-box;
  position: relative;
  .text{
    height:0.25rem;
    width:90%;
    background: #1a1a1a;
    line-height: 0.3rem;
    position:relative;
    margin-top:-15px;
    input{
      border: none;
      height: 0.25rem;
      padding-left: 0.02rem;
      display:block;
      position:absolute;
      background: #1a1a1a;
      top:0;
      width:80%;
      margin-left:10%;
      left:0;
      color:#fff;
      font-size:0.12rem;
    }
    span{
      position:absolute;
      top:33%;
      font-size:0.12rem;
      padding-left:10px;
      color:#666;
    }
  }
  .submit{
    position: absolute;
    right: 5px;
    top: 0;
    display: block;
    width: 12%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size:0.1rem;
    background: #242424;
    border:none;
    color:#fff;
  }
}
</style>
