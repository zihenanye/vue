<template>
  <div class="m-box">
    <banner :data=bannerList></banner>
    <classify :data=classifyList></classify>
    <everyday :data=everydayList1 :data1=everydayList2></everyday>
    <brand></brand>
    <groom :data=groomList></groom>
    <japan :data=japanList1 :data2=japanList2></japan>
    <watch :data=watchList1 :data2=watchList2></watch>
    <europe :data=europeList1 :data2=europeList2></europe>
    <buy v-for="item in product" :data=item></buy>
  </div>
</template>

<script>
import banner from '@/components/banner'
import classify from '../component/classify'
import everyday from '../component/everyday'
import brand from '../component/brand'
import groom from '../component/groom'
import japan from '../component/japan'
import watch from '../component/watch'
import europe from '../component/europe'
import buy from '@/components/buy'
export default {
  name:'indextab',
  data () {
    return {
      bannerList:"",
      classifyList:"",
      everydayList1:"",
      everydayList2:"",
      groomList:"",
      japanList1:"",
      japanList2:"",
      watchList1:"",
      watchList2:"",
      europeList1:"",
      europeList2:"",
      product:""
    }
  },
  components: {
    banner,
    classify,
    everyday,
    brand,
    groom,
    japan,
    watch,
    europe,
    buy
  },
  created(){
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('/api/dataList').then(function (response) {
        this.bannerList=response.data.data[0].Records;
        this.classifyList=response.data.data[1].Records;
        this.everydayList1=response.data.data[2].Records;
        this.everydayList2=response.data.data[3].Records;
        this.groomList=response.data.data[5].Records;
        this.japanList1=response.data.data[6].Records;
        this.japanList2=response.data.data[7].Records;
        this.watchList1=response.data.data[8].Records;
        this.watchList2=response.data.data[9].Records;
        this.europeList1=response.data.data[10].Records;
        this.europeList2=response.data.data[11].Records;
      }, function (response) {
         console.log(response)
      }),
      this.$http.get('/api/listList').then(function (response) {
        this.product=response.data.data;
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
  
</style>
