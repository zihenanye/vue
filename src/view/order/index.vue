<template>
  <div class="wrapper">
    <nav>
      <ul>
        <li v-for="item in titleData">
          <router-link :to="item.Link" active-class="on">{{item.Title}}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>  
  </div>
</template>

<script>

export default {
  name: 'orderPage',
  data () {
    return {
      titleData:[
        {
          Title:"全部",
          Link:"/order/all"
        },
        {
          Title:"待付款",
          Link:"/order/pay"
        },
        {
          Title:"待发货",
          Link:"/order/send"
        },
        {
          Title:"待收货",
          Link:"/order/take"
        },
        {
          Title:"待退款",
          Link:"/order/refund"
        }
      ]
    }
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
.section{
    flex: 1;
    overflow-y: scroll;
}
nav{
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  ul{
    height: 40px;
    line-height: 40px;
    font-size: .12rem;
    display: -webkit-flex;
    li{
      flex:1;
      text-align: center;
      a{
        display: block;
        line-height: 38px;
        width: 60%;
        margin-left: 20%;
      }
    }
  }
}
.on{
    border-bottom: 2px solid #242424;
    color: #242424
}
</style>
