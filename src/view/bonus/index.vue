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
          Title:"可用",
          Link:"/bonus/can"
        },
        {
          Title:"已使用",
          Link:"/bonus/employ"
        },
        {
          Title:"已过期",
          Link:"/bonus/overdue"
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
    border-bottom: 2px solid #991f33;
    color: #991f33
}
</style>
