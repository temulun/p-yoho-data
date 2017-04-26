<template>
  <div class="page theme contanier">
    <!-- navbar-fixed-top -->
    <div class="row clearfix">
      <div class="col-xs-7 left-container">
        <nav class="nav-bar">
          <div class="title col-xs-12">{{ msg }} <span class="en-title">{{en}}</span></div>
        </nav>
        <LeftMap></LeftMap>
      </div>
      <div class="col-xs-5 right-container">
        <RightBarGraph></RightBarGraph>
        <RightServer></RightServer>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMap from '@/components/left-map'
import RightBarGraph from '@/components/right-bar-graph'
import RightServer from '@/components/right-server'
export default {
  name: 'page',
  data () {
    return {
      msg: '有活全网数据中心'
      ,en:'YOHO Full network data center'
    }
  },
  components:{
    LeftMap
    ,RightBarGraph
    ,RightServer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left-container{
    padding-top: 40px;
  }
  .right-container{
    padding-right: 70px;
  }
  .nav-bar{
    /*relative*/
    position: absolute;
    top: 30px;
    display: inline-block;
    height: 70px;
    border:2px solid rgba(255,255,255,.4);
    border-left:0;
  }
  .title {
    margin-bottom: 0;
    padding-left: 70px;
    line-height:70px;
    font-size: 24px;
    letter-spacing: 2px;
    color:#fff;
  }
  .en-title{
    margin-left: 20px;
    margin-right: 20px;
  }
</style>
