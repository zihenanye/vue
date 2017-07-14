<template>
    <div class="brand">
	    <a v-for="item in data"> 
          <img :src="item.Picture"> 
          <div> 
              <p>{{item.SlideName}}</p> 
              <p>{{item.Description}}</p>
          </div> 
      </a>
    </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  props:['data']
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.brand{
  background: #fff;
  display: -webkit-flex;
  flex-wrap: wrap;
  overflow:hidden;
  a{
    display: block;
    width: 33.33%;
    img{
      width: 100%;
      display: block;
    }
    div{
      width: 85%;
      padding: 10px;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        font-size: .1rem;
        &:nth-child(1){
          color:#242424;
        }
        &:nth-child(2){
          color:#999;
        }
      }
    }
  }
}
</style>
