<template>
  <div class="wrapper">
    <div class="header"> 
      <div class="text"> 
        <span class="fa fa-search"></span> 
        <input class="fl f12 c_fff" placeholder="搜索宝贝" type="text">  
      </div>
      <a href="/#/search" class="submit">搜索</a>
    </div>
    <section class="section">
      <div class="search-hot"> 
        <h3>热搜宝贝</h3>
        <div class="cle">
          <span v-for="item in hotList">{{item}}</span>
        </div> 
      </div>
    </section>
    <footer>
    </footer>
  </div>
</template>

<script>


export default {
  name: 'homePage', 
  data () {
    return {
      hotList:[]
    }
  },
  created(){
    this.getData()
  },
  methods: { 
    getData () {
      this.$http.get('/api/searchList').then(function (response) {
        this.hotList=response.data.data;
         //console.log(response.data.data)
      }, function (response) {
         console.log(response)
      })
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
.wrapper{
  background: #f7f7f7;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow:hidden;
  font-size:16px;
}
.header{
  height: 0.4rem;
  background: #fff;
  padding: 0.2rem;
  color: #fff;
  border-bottom: 1px solid #e5e5e5;
  display:-webkit-flex;
  box-sizing:border-box;
  position: relative;
  .text{
    height:0.25rem;
    width:90%;
    background: #f7f7f7;
    line-height: 0.3rem;
    position:relative;
    margin-top:-12px;
    input{
      border: none;
      height: 0.25rem;
      padding-left: 0.02rem;
      display:block;
      position:absolute;
      background: #f7f7f7;
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
    border:none;
    color:#242424;
  }
}
.section{
    flex:1;
    overflow-y: scroll;
    .search-hot{
      background: #fff;
      padding: 10px;
      font-size: .12rem;
      h3{
        font-weight: normal;
        margin-bottom: 10px;
      }
      .cle{
        span{
          display: inline-block;
          line-height: .2rem;
          padding: 0 .1rem;
          border: 1px solid #e5e5e5;
          margin-bottom: .1rem;
          margin-right: .05rem;
        }
      }
    }
}
</style>
