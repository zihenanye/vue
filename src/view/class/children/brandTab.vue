<template>
   <div class="type">
     	<brand :data=brandList></brand>
  </div>
</template>

<script>
import brand from '../component/brand'
export default {
  data () {
    return {
    	brandList:""
    }
  },
  components: {
    brand
  },
  created(){
    this.getData()
  },
  methods: {
    getData () {
      this.$http.get('/api/brandList').then(function (response) {
      	this.brandList=response.data.data[0].Records;
      	//console.log(response.data.data[0].Records)
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
