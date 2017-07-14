<template>
  <div>
    <div class="type" v-for="item in bannerList">
      <!-- <div class="banner">
        <a><img :src="item.Picture" alt=""></a>     
      </div> 
      <div class="des" v-for="items in item.Records">
        <a>{{items.SlideName}}</a>
      </div> -->
      <div class="banner" v-for="items in item.Records" v-if="items.Picture">
        <a><img :src="items.Picture" alt=""></a>     
      </div> 
      <div class="des" v-else>
        <a>{{items.SlideName}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerList:[]
    }
  },
  created(){
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('/api/typeList').then(function (response) {
      	this.bannerList=response.data.data;
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
.type{
  background-color: #fff;
  margin-bottom: 10px;
  .banner{
    img{
      width:100%;
      display: block;
    }
  }
  .des{
    display: inline-block;
    a{
      padding: 5px 10px;
      border: 1px solid #e5e5e5;
      float: left;
      margin: 0 0 10px 10px;
      font-size:.12rem;

    }
  }
}
</style>
