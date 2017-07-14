<template>
  <div class="wrapper">
    <section class="section">
        <banner :data=bannerList></banner>
        <div class="info">
          <div class="title">{{title}}</div>
          <div class="price"> 
            <i>￥{{price}}</i>    
            <span>月销{{MonthSalesNum}}件</span> 
          </div> 
          <div class="other">
            邮费0元
          </div>  
        </div>
        <div class="color">
            <div class="other"> 
              <ul> 
                <li class="promises">
                  <span v-for="item in Promises"><i class="fa fa-check-circle-o"></i>{{item}}</span>
                </li>  
              </ul> 
            </div>
            <div class="other">
              <ul>
                 <li @click="show">
                    <a href="javascript:;">请选择：颜色分类</a>
                    <i class="fa fa-angle-right"></i>
                 </li> 
               </ul>
            </div>
        </div>
        <div class="comment">
          <p>
            <span>宝贝评分</span>
            <span>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </span>
            <span>{{ProductScore}}分</span>
          </p>
          <div class="comment-list" v-for="item in commentList">
              <div class="comment-info">
                <div class="avatar">
                  <img :src="item.Buyer.Avatar">
                </div>
                <div class="nickname">{{item.Buyer.NickName}}</div>
                <div class="createTime">{{item.CreateTime}}</div>
              </div>
              <p class="text">{{item.BuyerNote}}</p>
              <div class="comment-img"> 
                <imgGroup v-if="item.BuyerPicturesThumbWebp" :imageArr="item.BuyerPicturesThumbWebp.split(',')"></imgGroup>
             </div>
          </div>
          <a class="all">全部评价({{ReviewCount}})</a>
        </div>
        <div class="logo">
          <div class="shop-box">
              <dl>
                <dt><img :src="LogoSrc" alt=""></dt>
                <dd>
                  <b>{{MallName}}</b>
                  <p>{{Introduction}}</p>
                </dd>
              </dl>
          </div>
          <div class="shop-brand">
            <a>
              发现更多
              <span>{{BrandName}}</span>
              良品 
            </a>
          </div>
        </div>
        <div class="details-box">
          <h3 class="title">商品详情</h3>
          <div class="weixin"> 
            <p></p> 
            <p>
              <img src="http://img.haimi.com/Fpf_7URcK8ypvJq3cz3JySMSN6MI"></p> 
          </div>
          <div v-html="Descriptioin" class="content">
              
          </div>
        </div>
    </section>
    <footer class="footer">
        <div>
          <i class="fa fa-home"></i>
          <i class="fa fa-star-o"></i>
          <i class="fa fa-shopping-cart"></i>
        </div>
        <div @click="show">加入购物车</div>
        <div><button @click="show">立即购买</button></div>
    </footer>
    <div class="buy-popup">
      <div class="buy-bg" @click="hide"></div>
      <div class="buy-info">
        <div class="info"> 
          <img :src="pics"> 
          <div>
             <p class="price">¥ {{price}}</p> 
             <p class="stock">( 库存{{Stock}}件 )</p> 
             <p class="chance" v-if="AttrInfo">请选择：颜色分类</p> 
           </div> 
        </div>
        <div class="sku" v-if="AttrInfo"> 
          <h3>颜色分类</h3>
          <div class="list"> 
            <span v-for="j in AttrInfo" class="spec" @click="spec">{{j}}</span>
          </div> 
        </div> 
        <div class="nums"> 
          <span>购买数量</span>
          <div class="fr"> 
            <button class="rem" @click="rem">－</button> 
            <input type="tel" value=1 class="number">
            <button class="add" @click="add()">＋</button> 
          </div> 
        </div>
        <div class="submit">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '@/components/banner'
import imgGroup from '@/components/imgGroup'
export default {
  name: 'userPage',
  data () {
    return {
      data:"",
      bannerList:[],
      pics:"",
      title:"",
      price:"",
      Stock:"",
      ProductScore:"",
      Promises:"",
      MonthSalesNum:"",
      commentList:"",
      ReviewCount:"",
      BrandName:"",
      Descriptioin:"",
      LogoSrc:"",
      MallName:"",
      Introduction:"",
      AttrInfo:""
    }
  },
  components: {
    banner,
    imgGroup
  },
  methods:{
    show(){
      var buyPopup=document.querySelector(".buy-popup");
      buyPopup.style.display="block";  
    },
    hide(){
      var buyPopup=document.querySelector(".buy-popup");
      buyPopup.style.display="none";  
    },
    rem(){
      var number= document.querySelector(".number").value;
      number--;
      if(number>=1){
          number=1;
      }
    },
    add(){
      var number= document.querySelector(".number").value;
      number=number++;
      //console.log(number);
    },
    spec(){
      this.className+="on";
    }
  },
  created () {
    let ProductID = this.$route.params.ProductID;
    // console.log(ProductID)
    this.$http.jsonp("http://m.haimi.com/api/product/detail-cdn?ProductID="+ProductID+"&platform=WAP",
      {
          jsonp: '_callback'
      }
      
    ).then(function(res){
        let data = res.data.data;
        let that=this;
        this.LogoSrc=data.Mall.LogoSrc;
        this.MallName=data.Mall.MallName;
        this.Introduction=data.Mall.Introduction;
        this.title=data.Subject;
        this.price=data.FinalPrice;
        this.Stock=data.Stock;
        this.Promises=data.Promises;
        this.ProductScore=data.ProductScore;
        this.MonthSalesNum=data.MonthSalesNum;
        this.commentList=data.TopReviews;
        this.ReviewCount=data.ReviewCount;
        this.BrandName=data.BrandName;
        this.Descriptioin=data.Descriptioin;
        this.bannerList = JSON.parse( data.ProductPictures );
        this.pics=this.bannerList[0].picture;
        if(data.AttrInfo){
          this.AttrInfo=data.AttrInfo=JSON.parse(data.AttrInfo).颜色分类.split(",");
        }
        //console.log(data)
         
    },function(res){
        alert(res)
    })
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"> 
.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: -webkit-flex;
  flex-direction: column;
  overflow:hidden;
  font-size: 16px;
  background: #f7f7f7;
  a{
    color: #242424;
  }
}
.section{
    flex: 1;
    overflow-y: scroll;
    .info{
      background: #fff;
      padding:10px;
      padding-bottom: 0;
      margin-bottom: 10px;
      .title{
        line-height: 25px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        font-size: .14rem;
      }
      .price{
        padding: 10px 0; 
        border-bottom: 1px solid #eee;
        color: #991f33;
        font-size: .13rem;
        i{
          font-style: normal;
        }
        span{
          color: #999;
          float: right;
        }
      }
      .other{
        line-height: 30px;
        color: #999;
        font-size: .12rem;
        padding-left: 3%;
      }
    }
    .color{
      .other{
        margin-bottom: 10px;
        background: #fff;
        height: 30px;
        line-height: 30px;
        ul li{
          padding:0 10px;
          font-size: .12rem;
          span{
            display: inline-block;
            padding-right: 10px;
            .fa{
              color: #991f33;
              font-size: 16px;
              padding: 0 2px;
              float: left;
            }
          }
          .fa{
            float: right;
            line-height: 30px;
            font-size: 18px;
            color: #666;
          }
        }
      }
    }
    .comment{
      background: #fff;
        margin-bottom: 10px;
      p{
        padding:10px;
        font-size: .12rem;
        border-bottom: 1px solid #eee;
        span{
          padding-right: 10px;
          i{
            color: #991f33;
          }
          &:nth-child(3){
             color: #991f33;
          }
        }
      }
      .comment-list{
        padding:10px;
        border-bottom: 1px solid #eee;
        .comment-info{
          line-height: 30px;
          .avatar{
            width: 20px;
            height: 20px;
            overflow: hidden;
            float: left;
            img{
              width: 100%;
            }
          }
          .nickname{
            float: left;
            font-size: .13rem;
            color: #999;
            margin-left: 5%;
          }
          .createTime{
            float: right;
            font-size: .13rem;
            color: #999;

          }
        }
        .text{
          clear: both;
          padding: 10px;
          padding-top: 0;
          line-height:20px;
          border: none;
        }
        .comment-img{
          overflow: hidden;
          .fl{
            width: 40px;
            height: 40px;
            overflow: hidden;
            margin-right: 10px;
            float: left;
            display: inline-block;
            img{
              width: 100%;
            }
          }
        }
      }
      .all{
        line-height: 40px;
        border-top: 1px solid #eee;
        text-align: center;
        display: block;
        font-size: .13rem;
        color: #666;
      }
    }
    .logo{
      height: 110px;
      margin-bottom: 10px;
      font-size: .13rem;
      .shop-box{
        background: #fff;
        padding: 10px;
        height: 50px;
        margin-bottom: 10px;
        dl{
          display: -webkit-box;
          dt{
            -webkit-box-flex:2;
            height: 50px;
            img{
              height: 100%;
            }
          }
          dd{
            -webkit-box-flex:1;
            margin-left: 10%;
            b{
              font-weight: normal;
              line-height: 30px;
            }
            p{
              line-height: 20px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #666;
            }
          }
        }
      }
      .shop-brand{
        background: #fff;
        line-height: 30px;
        padding: 0 15px;
        span{
          color: #991f33;
        }
      }
    }
    .details-box{
      background: #fff;
      padding: 0 10px;
      font-size: .13rem;
      h3{
        line-height: 40px;
        font-weight: normal;
      }
      .weixin{
        text-align: center;
        margin-bottom: 15px;
        img{
          width: 100%;
          display: block;
          margin: 0 auto;
        }
      }
      .content{
        img{
          display: block;
          width: 100%;
        }
      }
    }
}
.footer{
  height: 50px;
  border-top:1px solid #ccc;
  display: -webkit-box;
  background: #fff;
  div{
    -webkit-box-flex:1;
    text-align: center;
    line-height: 50px;
    &:nth-child(1){
      -webkit-box-flex:2;
      .fa{
        display: inline-block;
        width: 28%;
        color: #999;
        border-right: 1px solid #ccc;
      }
    }
    &:nth-child(2){
      font-size: .13rem;
    }
    &:nth-child(3){
      height: 100%;
      button{
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        background: #801a2a;
        color: #fff;
      }
    }
  }
}
.buy-popup{
  display: none;
  .buy-bg{
    position: fixed;
    z-index: 104;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
  }
  .buy-info{
    background: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 106;
    font-size: .13rem;
    .info{
      padding: 10px;
      border-bottom: 1px solid #e0e0e0;
      display: -webkit-flex;
      height: 60px;
      img{
        height: 80%;
        display: inline-block;
        margin-right: 10px;
        margin-top: 2%;
      }
      div{
        font-size: .13rem;
        padding: 5px;
        display: -webkit-flex;
        flex-direction:column;
        p{
          flex:1;
          &:nth-child(1){
            color:#991f33;
          }
          &:nth-child(2){
            color:#999;
            font-size: .12rem;
          }
          &:nth-child(3){
            color:#666;
          }
        }
      }
    }
    .sku{
      padding: 10px;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 0;
      h3{
        font-weight: normal;
        font-size: .13rem;
        padding-bottom: 10px;
      }
      .list{
        overflow: hidden;
        span{
          display: inline-block;
          margin-right: .1rem;
          margin-bottom: .1rem;
          line-height: .2rem;
          padding: 0 .05rem;
          white-space: nowrap;
          border: 1px solid #eee;
          color: #ccc;
          float: left;
          &.on{
            border: 1px solid #000;
            color: #000;
          }
        }
      }
    }
    .nums{
      padding: 10px;
      height: .4rem;
      line-height: .4rem;
      span{
        display: inline-block;
        float: left;
      }
      .fr{
        float: right;
        display: -webkit-flex;
        margin-top: 5px;
        height: 25px;
        button{
          width: 20px;
          border: 1px solid #ccc;
          display: block;
          text-align: center;
          background: #fff;
        }
        input{
          width: 40px;
          display: block;
          text-align: center;
          background: #fff;
          border: none;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
        }
      }
    }
    .submit{
      line-height: .4rem;
      text-align: center;
      background: #801a2a;
      color: #fff;
    }
  }
}
</style>
