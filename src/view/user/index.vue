<template>
  <div class="wrapper">
    <section class="section">
      <div class="user-info"> 
        <span class="avatar">
          <input type="file">
          <img src="//m.haimi.com/static/images/web/default-avatar-square.png?imageView2/1/w/100/h/100">
        </span>
        <span class="nickname">海蜜_jxtrzl</span>
        <i class="fa fa-edit"></i> 
      </div>
      <div class="user-menu">
          <router-link to="/order">
            <div class="line">
              我的订单
              <span>查看全部订单<i class="fa fa-angle-right"></i></span>
            </div>
          </router-link>
          <div class="column">
            <router-link to="/order/pay">
              <dl>
                <dt><i class="fa fa-credit-card"></i></dt>
                <dd><span>待付款</span></dd>
              </dl>
            </router-link>
            <router-link to="/order/send">
              <dl>
                <dt><i class="fa fa-credit-card-alt"></i></dt>
                <dd><span>待发货</span></dd>
              </dl>
            </router-link>
            <router-link to="/order/take">
              <dl>
                <dt><i class="fa fa-truck"></i></dt>
                <dd><span>待收货</span></dd>
              </dl>
            </router-link>
            <router-link to="/order/all">
              <dl>
                <dt><i class="fa fa-drivers-license-o"></i></dt>
                <dd><span>评价</span></dd>
              </dl>
            </router-link>
            <router-link to="/order/refund">
              <dl>
                <dt><i class="fa fa-money"></i></dt>
                <dd><span>退款</span></dd>
              </dl>
            </router-link>
          </div>
          <router-link to="/fav">
            <div class="line">
              <i class="fa fa-star"></i>收藏宝贝
              <span><i class="fa fa-angle-right"></i></span>
            </div>
          </router-link>
          <router-link to="/bonus">
            <div class="line">
              <i class="fa fa-money"></i>红包优惠券
              <span><i class="fa fa-angle-right"></i></span>
            </div>
          </router-link>
          <router-link to="/foot">
            <div class="line">
              <i class="fa fa-truck"></i>足迹
              <span><i class="fa fa-angle-right"></i></span>
            </div>
          </router-link>
          <div class="line">
            <i class="fa fa-bar-chart"></i>积分商城
            <span><i class="fa fa-angle-right"></i></span>
          </div>
          <div class="line">
            <i class="fa fa-credit-card-alt"></i>收货地址
            <span><i class="fa fa-angle-right"></i></span>
          </div>
          <div class="line">
            <i class="fa fa-mobile-phone" style="font-size: 20px;"></i>绑定手机
            <span>13522868746<i class="fa fa-angle-right"></i></span>
          </div>
          <div class="line">
            <i class="fa fa-headphones"></i>海蜜服务
            <span><i class="fa fa-angle-right"></i></span>
          </div>
      </div>
    </section>
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '@/components/Footer'

export default {
  name: 'userPage',
  data () {
    return {
      navData:[]
    }
  },
  components: {
    footerBar
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
  overflow:hidden;
  font-size: 12px;
  background: #f7f7f7;
}
.section{
    flex: 1;
    overflow-y: scroll;
    .user-info{
      height: 40px;
      padding: 10px;
      background: #fff;
      margin-bottom: 10px;
      .avatar{
        position: relative;
        display: block;
        float: left;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        background: none;
        input{
          position: absolute;
          z-index: 100;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          opacity: 0;
        }
        img{
            width: 40px;
            height: 40px;
            vertical-align: top;
        }
      }
      .nickname{
        line-height: 40px;
        display: block;
        overflow: hidden;
        height: 40px;
        padding-right: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        float: left;
        font-size: .13rem;
      }
      .fa{
        line-height: 40px;
        color: #999;
        font-size: 16px;
      }
    }
    .user-menu{
      background: #fff;
      padding: 0 10px;
      .line{
        border-bottom: 1px solid #eee;
        height:40px;
        line-height: 40px;
        position: relative;
        .fa{
          color: #999;
          padding-right: 10px;
          font-size: 15px;
        }
        span{
          position: absolute;
          right: 0px;
          color: #999;
          .fa{
            padding: 0 5px;
            font-size: 16px;
          }
        }
      }
      .column{
        height: 60px;
        display: -webkit-flex;
        border-bottom: 10px solid #f7f7f7;
        a{
          display: inline-block;
          flex:1;
          dl{
            -webkit-box-flex:1;
            color: #333;
            line-height: 25px;
            margin-top: 5px;
            text-align: center;
            dt{
              font-size: 16px;
              color: #999;
            }
          }
        }
        
      }
    }
}
</style>
