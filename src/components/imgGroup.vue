<template>
  <div>
    <div class="m-image-group">
      <img v-for="(item,index) in imageArr" :src="item" @click="lookImg(index)">
    </div>
    <div class="image-group-mark" :style="{display: display}" @click="lookImg()">
        <banner ref="swiper" :data="SwiperSlide" style="z-index: 101" zoom="true"></banner>
    </div>
  </div>
</template>

<script>
import banner from '@/components/banner'
export default {
  data () {
    return { 
      'SwiperSlide':[],
      'display':'none'
    }
  },
  props:['imageArr'],
  created(){
    let that=this;
    this.imageArr.forEach(function(e,i){
      that.SwiperSlide.push({
        picture:e
      })
    })
  },
  components:{
    banner
  },
  updated () {
    if(this.display!=''){
      //console.log(this.$refs.swiper.swiperObj)
      this.$refs.swiper.swiperObj.update()
    }
  },
  methods:{
    lookImg(index){
      if(this.display=="none"){
          this.display="-webkit-flex";
      }else{
        this.display="none"
      }
    },
    createMark(){
      var mark=document.createElement("div");
      mark.className="image-group-mark";
      document.body.appendChild(mark);
      
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.m-image-group{
  img{
    width: 10%;
    margin-right: 10px;
  }
}
.image-group-mark{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: 100;
  height: 100%;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  display: none;
}
</style>
