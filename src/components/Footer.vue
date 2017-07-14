<template>
  <footer class="hello">
    <div v-for="item in navList">
      <router-link :to="item.Link" active-class="active">
          <i :class="item.icon"></i>
          <span>{{item.text}}</span>
      </router-link> 
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerNav',
  data () {
    return {
      navList: [
        {
          icon: 'fa fa-home',
          text: '首页',
          Link: '/home/index/2'
        },
        {
          icon: 'fa fa-bars',
          text: '分类',
          Link: '/classify'
        },
        {
          icon: 'fa fa-shopping-cart',
          text: '购物车',
          Link: '/shop'
        },
        {
          icon: 'fa fa-user',
          text: '我的',
          Link: '/user'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  height:0.5rem;
  border-top: 1px solid #ccc;
  font-size: 0.15rem;
  display: -webkit-flex;
  width: 100%;
  div{
    flex:1;
    text-align:center;
    padding-top:5px;
    color:#999;
    a{
      color:#999;
      font-size:0.15rem;
      padding-top:5px; 
      display: -webkit-flex;
      flex-direction:column;
      &.active{
          color:#801a2a;
      }
    }
  }
}

</style>
