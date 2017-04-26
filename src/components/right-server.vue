<template>
  <div class="server row">
    <p class="server-title">服务之星</p>
    <swiper :options="swiperOption" class="server-items clearfix  col-xs-12">
      <!-- 幻灯内容 -->
      <swiper-slide class="clearfix" v-for="item in items"  :key="item.id" ref="mySwiper">
        <li class="server-item col-xs-3" v-for="(list, index) in item.lists">
          <!-- <sup class="item-tips">{{ index }}</sup> -->
          <img v-bind:src="list.img" class="item-img" alt="img">
          <p class="item-names">{{list.name}}</p>
        </li>
      </swiper-slide>
      <!-- 以下配置均为可选（使用具名slot来确定并应用一些操作控件元素） -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
var imgUrl = './static/images/service/';
export default {
    name: 'server',
    data(){
      return {
        items:[
          {
            lists:[{ img: imgUrl+'caihaoyi.jpg' ,name:'财昊昱'},{ img: imgUrl+'dingxue.jpg' ,name:'丁雪'}
            ,{ img: imgUrl+'lirongzhen.jpg' ,name:'李荣珍'},{ img: imgUrl+'lvyixue.jpg' ,name:'吕懿学'}
            ,{ img: imgUrl+'wangroujia.jpg' ,name:'王柔嘉'},{ img: imgUrl+'wangyanan.jpg' ,name:'王亚楠'}
            ,{ img: imgUrl+'xuxuan.jpg' ,name:'徐轩'},{ img: imgUrl+'yangyu.jpg' ,name:'杨宇'}]
          }
        ]
        ,swiperOption: {
            // 如果你后续需要找到当前实例化后的swiper对象以对其进行一些操作的话，可以自定义配置一个名字
            name: 'currentSwiper',
            // 所有配置均为可选（同Swiper配置）
            autoplay: 5000,
            direction : 'horizontal',
            grabCursor : true,
            setWrapperSize :true,
            // autoHeight: true,
            // pagination : '.swiper-pagination',
            // paginationClickable :true,
            // prevButton:'.swiper-button-prev',
            // nextButton:'.swiper-button-next',
            // scrollbar:'.swiper-scrollbar',
            // mousewheelControl : true,
            observeParents:true,
            // if you need use plugins in the swiper, you can config in here like this
            debugger: true,
            // swiper callbacks
            onTransitionStart: function(swiper){
              // console.log(swiper)
            }
        }
      }
    }
    ,components: {
      swiper,
      swiperSlide
    }
    ,computed: {
      swiper() {
        // console.log(this.$refs)
        // return this.$refs.mySwiper
        // return (this.$children.find(children => children.options.name == 'currentSwiper').swiper)
      }
    }
    ,mounted() {
      // you can use current swiper object to do something(swiper methods)
      // console.log('this is current swiper object', this.swiper)
      // this.swiper.slideTo(1, 2000, false)
    }
  };
</script>

<style>
  .server {
      display: inline-block;
      box-sizing: border-box;
      padding-top: 20px;
      width: 100%;
      height: 100%;
  }
  .server-title{
    margin-top: 0;
    line-height: 30px;
    text-align: left;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid rgba(255,255,255,.4);
  }
  .server-items.col-xs-12{
    box-sizing: border-box;
    padding-top: 40px;
    
    padding-bottom: 20px;
    box-shadow: -1px -1px 10px 2px rgba(255,255,255,.6) inset;
  }
  .swiper-wrapper>.swiper-slide{
    padding-left: 15px;
  }
  .server-item{
    position: relative;
    display: inline-block;
    list-style: none;
    color: #fff;
  } 
  .item-img{
    display: inline-block;
    width: 70px;
    height: 70px;
    border: 2px solid rgb(3,205,255);
    border-radius: 8px;
    overflow: hidden;
  }
  .item-tips{
    position: absolute;
    padding: 10px;
    top:0;
    left: 20px;
    z-index: 9;
    color: rgb(163,57,9);
    background-color:rgb(255,192,0);
    border: 1px solid rgb(246,156,60); 
  }
  .item-names{
    display: inline-block;
    width: 70px;
    margin-top:6px;
    margin-bottom:10px;
    font-size: 12px;
    text-align: center;
  }
</style>