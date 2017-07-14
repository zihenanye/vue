<template>
  <div class="list">
    <dl v-for="item in product">
      <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID}}">
        <dt><img :src="item.Products.Pictures" alt=""></dt>
        <dd>
          <p>{{item.Products.Subject}}</p>
          <b>￥ {{item.Products.FinalPrice}}</b>
        </dd>
      </router-link>
    </dl>
  </div>
</template>

<script>

export default {
  name: 'listPage',
  data () {
    return {
      product:[] 
    }
  },
  created(){
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('/api/footList').then(function (response) {
        this.product=response.body.data;
        //console.log(response.body.data)
      }, function (response) {
        console.log(response)
      })
    }
  }   
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
.list{
  background: #fff;
  font-size: .13rem;
  dl{
    height: 100px;
    padding: 10px;
    dt{
      float: left;
      width: 30%;
      img{
        width: 100%;
      }
    }
    dd{
      float: right;
      width: 70%;
      line-height: 30px;
      b{
        font-weight: normal;
        color: #991f33;
      }
    }
  }
}
</style>
