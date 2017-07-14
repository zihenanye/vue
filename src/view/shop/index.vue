<template>
  <div class="wrapper">
    <section class="section">
       <car></car>
       <list :data="shopList"></list>
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '@/components/Footer'
import car from './component/car'
import list from './component/list'

export default {
  name: 'shopPage',
  data () {
    return {
        shopList:""
    }
  },
  components: {
    footerBar,
    car,
    list
  },
  created(){
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('/api/shopList').then(function (response) {
          this.shopList=response.body.extra.Suggest;
          //console.log(response.body.extra.Suggest)
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
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: -webkit-flex;
  flex-direction: column;
  background:#f7f7f7;
  overflow:hidden;
  font-size: 16px;
}
.section{
    flex: 1;
    overflow-y: scroll;
}
</style>
