<template>
  <div class="header">
      <ul>
          <li v-for="item in titleData">
            <router-link :to="item.Link" active-class="on">{{item.Title}}</router-link>
          </li>
      </ul>
  </div>
</template>   

<script>
export default {
  data () {
    return {
      titleData:[
        {
          Title:"分类",
          Link:"/classify/typetab"
        },
        {
          Title:"品牌",
          Link:"/classify/brandtab"
        }
      ]
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  ul{
    li{
      display:inline-block;
      font-size:.14rem;
      padding:0 10px;

      a{
        color:#666;
        padding-bottom:10px;
      }
    }
  }
}
.on{
    border-bottom: 2px solid #242424;
    color: #242424
}
</style>
