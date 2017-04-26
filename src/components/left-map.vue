<template>
  <div class="map-contanier">
      <div class="col-xs-12 clearfix">
        <div class="active-number studyNum">
          <div class="txt-title">{{msg}}<span class="time" id="jShowTime"></span></div>
          <div class="group">
              <div class="container item10">
                  <div class="cover"></div>
                  <div class="text"></div>
              </div>
              <div class="container item9">
                  <div class="cover"></div>
                  <div class="text"></div>
              </div>

              <div class="container item8">
                  <div class="cover"></div>
                  <div class="text"></div>
              </div>

              <div class="container item7">
                  <div class="cover"></div>
                  <div class="text"></div>
              </div>

              <div class="container item6">
                  <div class="cover"></div>
                  <div class="text"></div>
              </div>

              <div class="container item5">
                  <div class="cover"></div>
                  <div class="text"></div>
              </div>

              <div class="container item4">
                  <div class="cover"></div>
                  <div class="text"></div>
              </div>

              <div class="container item3">
                  <div class="cover"></div>
                  <div class="text"></div>
              </div>

              <div class="container item2">
                  <div class="cover"></div>
                  <div class="text"></div>
              </div>
              <div class="container item1 lastItem">
                  <div class="cover"></div>
                  <div class="text"></div>
              </div>
          </div>
        </div>
    </div>
    <div id="map" class="map col-xs-12"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import china from 'echarts/map/js/china';
var data = [
     {name:'内蒙古', value:145}
    ,{name:'山西', value:128}
    ,{name:'贵州', value:117}
    ,{name:'浙江', value:146}
    ,{name:'河北', value:150}
];
var geoCoordMap = {
    '内蒙古':[111.7585,40.8476]
    ,'山西':[112.5154,37.8665]
    ,'贵州':[106.7136,26.6042]
    ,'浙江':[120.1601,30.2714]
    ,'河北':[117.9634,40.9515]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};


export default {
    name: 'map',
    data() {
            return {  
                // 初始化空对象  
                chart: null
                ,msg:'瞬时接待量'  
                // 初始化图表配置  
                ,opinionData: [
                      {name:'内蒙古', selected:true}
                      ,{name:'山西', selected:true}
                      ,{name:'贵州', selected:true}
                      ,{name:'浙江', selected:true}
                      ,{name:'河北', selected:true}
                  ]
            }  
        },  
        methods: {  
            // 绘图  
            drawGraph(id) {  
                // 绘图方法  
                this.chart = echarts.init(document.getElementById(id))  
                    // 皮肤添加同一般使用方式  
                this.chart.showLoading()  
                    // 返回到data中  
                var that = this  
                    // ajax 请求数据  
                    that.opinionData = that.opinionData 
                    // set  
                this.chart.setOption({
                  title: {
                      text: '基地分布图',
                      left: '90px',
                      top:25,
                      textStyle: {
                          color: '#fff',
                          fontSize:16,
                          fontWeight:500
                      }
                  },
                  tooltip : {
                      trigger: 'item'
                  },
                  legend: {
                      orient: 'vertical',
                      y: 'bottom',
                      x:'right',
                      textStyle: {
                          color: '#fff'
                      }
                  },
                  geo: {
                      map: 'china',
                      label: {
                          emphasis: {
                              show: false
                          }
                      },
                      roam: false,
                      aspectScale:.8,  //用于设置 scale 地图的长宽比。
                      layoutCenter: ['50%', '50%'],   //属性定义地图中心在屏幕中的位置，一般结合layoutSize 定义地图的大小
                      layoutSize: 530,    // 地图的大小，见 layoutCenter。支持相对于屏幕宽高的百分比或者绝对的像素大小。
                      itemStyle: {
                          normal: {
                              // 区域颜色设置
                              areaColor: 'rgba(4,38,77,.6)',
                              borderColor: 'rgb(37,114,152)',
                              borderWidth:1.2
                          },
                          emphasis: {
                              areaColor: 'rgb(3,21,39)'
                          }
                      }
                      ,regions: [{
                          name: '内蒙古',
                          itemStyle: {
                              normal: {
                                  areaColor: 'rgb(3,21,39)',
                                  borderColor: 'rgb(37,114,152)'
                              },
                              emphasis: {
                                  areaColor: 'rgb(3,21,39)'
                              }
                          }
                      },
                      {
                          name: '山西',
                          itemStyle: {
                              normal: {
                                  areaColor: 'rgb(3,21,39)',
                                  borderColor: 'rgb(37,114,152)'
                              },
                              emphasis: {
                                  areaColor: 'rgb(3,21,39)'
                              }
                          }
                      },
                      {
                          name: '河北',
                          itemStyle: {
                              normal: {
                                  areaColor: 'rgb(3,21,39)',
                                  borderColor: 'rgb(37,114,152)'
                              },
                              emphasis: {
                                  areaColor: 'rgb(3,21,39)'
                              }
                          }
                      },
                      {
                          name: '浙江',
                          itemStyle: {
                              normal: {
                                  areaColor: 'rgb(3,21,39)',
                                  borderColor: 'rgb(37,114,152)'
                              },
                              emphasis: {
                                  areaColor: 'rgb(3,21,39)'
                              }
                          }
                      },
                      {
                          name: '贵州',
                          itemStyle: {
                              normal: {
                                  areaColor: 'rgb(3,21,39)',
                                  borderColor: 'rgb(37,114,152)'
                              },
                              emphasis: {
                                  areaColor: 'rgb(3,21,39)'
                              }
                          }
                      }]
                  },
                  series : [
                      {
                          type: 'effectScatter',
                          coordinateSystem: 'geo',
                          data: convertData(data.sort(function (a, b) {
                              return b.value - a.value;
                          }).slice(0, 6)),
                          symbolSize: function (val) {
                              return val[2] / 10;
                          },
                          showEffectOn: 'render',
                          rippleEffect: {
                              brushType: 'stroke'
                          },
                          hoverAnimation: true,
                          label: {
                              normal: {
                                  formatter: '{b}',
                                  position: 'right',
                                  show: true
                              }
                          },
                          itemStyle: {
                              normal: {
                                  color: 'rgb(0,255,42)',
                                  shadowBlur: 10,
                                  shadowColor: 'rgb(0,255,42)'
                              }
                          },
                          zlevel: 1
                      }
                  ]
                  /*title: {
                      text: '基地分布图',
                      left: '90px',
                      top:25,
                      textStyle: {
                          color: '#fff',
                          fontSize:16,
                          fontWeight:500
                      }
                  },
                  tooltip : {
                      trigger: false
                  },
                  legend: {
                      orient: 'vertical',
                      y: 'bottom',
                      x:'right',
                      textStyle: {
                          color: '#fff'
                      }
                  },
                  series: [
                      {
                          name: 'china',
                          type: 'map',
                          mapType: 'china',
                          selectedMode : 'multiple',
                          label: {
                              normal: {
                                  show: false
                              },
                              emphasis: {
                                  show: true,
                                  textStyle: {
                                      color: 'rgb(242,10,48)',
                                      fontSize:16,
                                      fontWeight:700
                                  }
                              }
                          },
                          // roam: true,
                          aspectScale:.8,  //用于设置 scale 地图的长宽比。
                          layoutCenter: ['50%', '50%'],   //属性定义地图中心在屏幕中的位置，一般结合layoutSize 定义地图的大小
                          layoutSize: 600,    // 地图的大小，见 layoutCenter。支持相对于屏幕宽高的百分比或者绝对的像素大小。
                          itemStyle: {
                              normal: {
                                  areaColor: 'rgba(4,38,77,.6)',
                                  borderColor: 'rgb(37,114,152)',
                                  borderWidth:1.2
                              },
                              emphasis: {
                                  areaColor: 'rgb(39,177,206)'
                                  // shadowBlur: 10,
                                  // shadowColor: 'rgb(255,255,255)'
                              }
                          },
                          data:that.opinionData
                      }]*/
    
                })
                window.onresize = this.chart.resize;
                this.chart.hideLoading();
            }
        },  
        // “将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。”  
        mounted() {  
            this.$nextTick(function() {  
                this.drawGraph('map')  
            })  
        }  
  };
</script>

<style>
.active-number{
    position: relative;
    margin-top: 100px;
    margin-left: 70px;
    z-index: 999;
}
#map{
    position: absolute;
    top:265px;
    left: 0;
    height: 500px; 
}
.map>div{
  /*background-color: rgba(255,255,255,.2);*/
}
.txt-title{
  width: 580px;
  line-height:40px;
  padding-left:8px;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid rgba(255,255,255,.4);
}
.time{
  margin-left: 310px;
  line-height:40px;
  font-weight: 500;
  font-size: 14px;
}
/*模拟数字滚动*/
/*.group{display: inline-block;vertical-align: middle;margin-top:10px;padding:8px;height: auto;overflow: hidden;}
  .group .container{
   width:50px;height:66px; position:relative;margin-right: 8px;background-image: url('/static/images/jcountdown_slide_black.png');float:left;padding: 1px 0 1px 0;background-position: -110px 1px;
  }
  .group>.container:first-child{padding: 1px 0 1px 1px; background-position: -61px 1px;}
  .group>.container.lastItem{padding: 1px 1px 1px 0; background-position: -161px 1px;}
  .group .container .cover{background-image: url('/static/images/jcountdown_slide_black.png'); background-position: -111px -69px;position: absolute; left: 0;top: 1px;width: 50px;height: 66px; z-index: 1; padding: 0; margin: 0;}
  .group>.container:first-child>.cover{left: 1px;background-position: -61px -69px;}
  .group>.container.lastItem>.cover{right: 1px; background-position: -161px -69px;}
  .group .container .text{width: 50px; height: 64px; background-image: url('/static/images/jcountdown_slide_black.png');}  */  

</style>
