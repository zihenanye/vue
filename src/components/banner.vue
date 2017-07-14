<template>
  <div class="banner swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in data">
            <img v-if="item.picture" :src="item.picture" >
            <img v-else :src="item.PictureWebp" alt="">
          </div>
      </div>
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import swiper from '@/static/js/swiper.js'
require('@/static/css/swiper.css')
export default {
  data () {
    return {
      swiperObj:""
    }
  },
  props:['data'],
  mounted () {
    this.swiperObj=new Swiper(this.$el,{
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:2000
    })
    
  },
  updated(){
    this.swiperObj.update();
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.banner{
    box-sizing: border-box;
    width: 100%;
    position: relative;
    background:#fff;
    .swiper-wrapper{
        width: 100%;
        display: -webkit-flex;
        .swiper-slide{
            width: 100%;
            img{
                width:100%;
                display:block;
            }
        }
    }
}
.swiper-pagination .swiper-pagination-bullet{
    width: 10px;
    height: 3px;
    background: red;

}
.swiper-pagination .swiper-pagination-bullet-active{
    width: 10px;
    height: 3px;
    background: red;
}
</style>
