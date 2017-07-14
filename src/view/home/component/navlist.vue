<template>
  <div class="nav">
    <div class="nav-list swiper-wrapper">
       <span class="swiper-slide" v-for="item in navList">
          <router-link :to="item.Link+'/'+item.NavID" class="nav-item" active-class="on">{{item.Title}}</router-link> 
       </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList:"",
      swipers:""
    }
  },
  mounted () {
    this.getNav(),
    this.swipers=new Swiper('.nav', {
        slidesPerView: 6,
        spaceBetween: 0,
        freeMode: true
    })
  },
  updated(){
    this.swipers.update();
  },
  methods: {
    getNav () {
      this.$http.get('/api/navList').then(function (response) {
        this.navList=response.data.data
     
      }, function (response) {
        console.log(response)
      })
    }
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .nav{
      height:0.4rem;
      border-bottom:1px solid #ccc;
      background:#fff;
      .nav-list{
          display:-webkit-flex;
          height: 0.4rem;
          line-height: 0.38rem;
          span{
              display: block;
              text-align: center;
              a{
                  display: block;
                  width:70%;
                  margin-left: 15%;
                  font-size:0.12rem;
                  color:#242424;  
              }
          }
      }
  }
.on{
  border-bottom: 3px solid #242424;
}
</style>
