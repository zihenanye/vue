<template>
  <div class="wrapper">
    <section class="section">
      <div class="login"> 
        <div class="tips">请输入手机号码验证码直接登录</div> 
        <div class="box">
          <div class="cle">
            <span>手机号：</span> 
            <input type="tel" class="inp" v-model="userPhone" id ="phoneNum" @focus="phoneNum" >  
            <b class="close" @click="clear"> x </b>
          </div> 
          <div class="cle"> 
            <span>验证码：</span> 
            <input type="tel" class="inp" v-model="userCode"> 
            <span class="num" v-if="sendSmsFlg" @click="sendSms">发送验证码</span> 
            <span class="num-time" v-else @click="sendSms">{{sendTime}}秒后重新发送</span> 
          </div> 
          <button class="loginBtn" @click=loginDo>登录</button> 
          <div class="pop"></div>
        </div> 
      </div>
    </section>
    
  </div>
</template>

<script>

export default {
  name: 'loginPage',
  data () {
    return {
      isShow:false,
      sendSmsFlg:true,
      sendTime:60,
      userPhone:"",
      userCode:"",
      smsCode:""
    }
  },
  watch:{
    len:function(val){
      this.isShow=val.length >0 ? true : false
    }
  },
  methods:{
    clear(){
      this.userPhone=''
    },
    sendSms(){
      this.sendSmsFlg=false;
      //随机四位验证码
      let codeArr=[];
      for(var i=0;i<4;i++){
        codeArr.push(this.getRandom(0,9));
      }
      this.smsCode=codeArr=codeArr.join("");
      console.log("%c"+codeArr,"font-size:25px;")
      let that=this;
      let time=setInterval(function(){
         if(--that.sendTime==0){
            clearInterval(time);
            that.sendTime=60;
            that.sendSmsFlg=true;
         } 
      },1000)
    },
    getRandom(min,max){
      var random=Math.random();
      return Math.floor((max-min+1)*random+min);
    },
    loginDo(){
      if(this.userPhone!="" && this.userCode!=""){
          var userData={
            userName:"zhangsan",
            userPhone: 13522868746
          }
          var url=this.$route.query.to;
          console.log(url)
          window.localStorage.setItem("userInfor",JSON.stringify(userData));
          console.log(this.$route)
          this.$router.push({name:url})
      }
    },
    phoneNum(){
      var close=document.querySelector(".close");
      close.style.display="block";
    },
    clear(){
      var phoneNum=document.querySelector("#phoneNum");
      phoneNum.value="";
    }
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
  font-size: 16px;
}
.section{
    flex: 1;
    overflow-y: scroll;
    .login{
      position: absolute;
      background: #fff;
      bottom: 0;
      top: 0;
      width: 100%;
      .tips{
        line-height: .35rem;
        background: #fff9f3;
        text-align: center;
        color: #991f33;
        font-size: .12rem;
      }
      .box{
        padding: 0 10px;
        .cle{
          margin-top: .045rem;
          height: .4rem;
          line-height: .4rem;
          border-bottom: 1px solid #ccc;
          position: relative;
          display: -webkit-flex;
          span{
            font-size: .12rem;
            color: #666;
            display: inline-block
          }
          input{
            width: 50%;
            padding: 0 5px;
            background: #fff;
            border:none;
          }
          .num{
            padding-left: 5px;
            color: #991f33;
          }
          .num-time{
            color: #666;
          }
          .close{
              font-weight: normal;
              float: right;
              width: 12px;
              height: 12px;
              text-align: center;
              line-height: 12px;
              border-radius: 50%;
              background: #999;
              font-size: .12rem;
              display: block;
              position: absolute;
              right: 10px;
              top: 50%;
              color: #fff;
              display: none;
          }
        }
        .loginBtn{
          text-align: center;
          line-height: .35rem;
          background: #991f33;
          margin-top: .2rem;
          color: #fff;
          font-size: .14rem;
          border:none;
          width: 100%;
        }
        .pop{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.5);
            text-align: center;
            overflow: auto;
            display: none;
        }
      }
    }
}
</style>
