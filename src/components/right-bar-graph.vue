<template>
  <div class="bar-graph row">
    <p class="server-title">{{titleText}}</p>
    <div id="bar" class="bar col-xs-12"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
        name: 'bar',
        data() {  
            return {  
                // 初始化空对象  
                chart: null,  
                // 初始化图表配置  
                titleText: '各基地瞬时接待量',
                colorList:['#FAD860','#F3A43B','#60C0DD','#D7504B','#C6E579','#F4E001'],
                opinionValue: [5579, 4685, 4872, 4577, 4369, 4154] ,
                opinionName:['滨江', '丽水', '承德', '呼和浩特', '贵阳', '运城'],
                counter:0,
                conversion:false
            }  
        },  
        methods: {  
            // 绘图  
            drawGraph(id) {  
                // 绘图方法  
                if(!this.chart){
                  this.chart = echarts.init(document.getElementById(id)) 
                }
                 
                this.chart.showLoading()  
                var __CONSTNUM = window.CONSTNUM;
                function __GetArray(num,i,arr){
                  if(i++<5){
                    var a=Math.floor(Math.random()*num/2);
                    arr.push(a);
                    return __GetArray(num-a,i,arr);
                  }else{
                    arr.push(num);
                    return arr;
                  }
                }
                var that = this;
                    // ajax 请求数据  
                    // that.$http()
                    /*that.$http({
                          method: 'get',
                          url: '',
                          params: {
                             // 传送参数
                          },
                            emulateJSON: true 
                        }).then((res) => {
                           // 成功回调
                        }, (err) => {
                            // 错误信息
                    })*/
                    that.opinionValue = __GetArray(__CONSTNUM,0,[])
                    // set  
                this.chart.setOption({
                  tooltip : {
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      }
                  },
                  grid: {
                      top:'5%',
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                  },
                  xAxis : [
                      {        
                          type : 'category',
                          data : that.opinionName,
                          axisTick: {
                              alignWithLabel: true
                          },
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#fff'
                              }
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#ccc',
                                  width:1
                              }
                          }
                      }
                  ],
                  yAxis : [
                      {
                          type : 'value',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#fff'
                              },
                              formatter: function(val){
                                return val;
                              },
                              interval:3
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#ccc',
                                  width:1,//这里是为了突出显示加上的，可以去掉
                              }
                          }
                      }
                  ],
                  series : [
                      {
                          name:'瞬时接待量',
                          type:'bar',
                          itemStyle: {
                                normal: {
                                    color: function(params) {
                                        // build a color map as your need.
                                        return that.colorList[params.dataIndex]
                                    },
            　　　　　　　　　　　　　　//以下为是否显示，显示位置和显示格式的设置了
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter: '{c}'
                                    }
                                }
                            },
                          barWidth: '60%',
                          data:that.opinionValue 
                      }
                  ]
                })  
                this.chart.hideLoading()
            }
            ,drawConversion(id) {  
                // 绘图方法  
                if(!this.cahrt){
                  this.chart = echarts.init(document.getElementById(id));
                }
                  
                this.chart.showLoading()  
                var that = this;
                    that.conversionValue = that.conversionValue;
                this.chart.setOption({
                  title:{
                    show: false
                  },
                  tooltip : {
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      }
                  },
                  grid: {
                      top:'5%',
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                  },
                  xAxis : [
                      {        
                          type : 'category',
                          data : that.conversionName,
                          axisTick: {
                              alignWithLabel: true
                          },
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#fff'
                              }
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#ccc',
                                  width:1
                              }
                          }
                      }
                  ],
                  yAxis : [
                      {
                          type : 'value',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#fff'
                              },
                              formatter: function(val){
                                return val+'%';
                              },
                              interval:3
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#ccc',
                                  width:1,//这里是为了突出显示加上的，可以去掉
                              }
                          }
                      }
                  ],
                  series : [
                      {
                          name:'转化率',
                          type:'bar',
                          itemStyle: {
                            normal: {
                                color: function(params) {
                                    return that.colorList[params.dataIndex]
                                },
                                label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{c}'+'%'
                                }
                            }
                          },
                          barWidth: '60%',
                          data:that.conversionValue 
                      }
                  ]
                })  
                this.chart.hideLoading()
            }
        },  
        // keypoint：执行方法  
        // “将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。”  
        mounted() {  
            this.$nextTick(function() { 
                var _this = this;
                _this.chart = null;
                if(window.BARTIMER) {
                  // 清楚定时器
                  clearInterval(window.BARTIMER);
                  // 启动定时器
                  function f(){
                    window.BARTIMER = setInterval(function() {
                      // 计数
                      _this.counter += 1;
                      // 25秒刷一次转化率
                      if(_this.counter%5===0){
                        clearInterval(window.BARTIMER);
                        // http请求
                        // _this.$http.get()
                          _this.titleText = '美的项目转化率';
                          _this.conversionValue = [47.56, 47.24, 46.08] ;
                          _this.conversionName = ['有活', '网萌', '简约'];
                          _this.drawConversion('bar');
                          setTimeout(function(){
                              f();
                          },5000);
                      } else {
                        // else刷新瞬时动态率
                        _this.titleText = '各基地瞬时接待量';
                        _this.drawGraph('bar');
                      }
                    },5000);
                  }
                  f();
                } else {
                  _this.drawGraph('bar');
                  function f(){
                    clearInterval(window.BARTIMER);
                    window.BARTIMER = setInterval(function() {
                      // 计数
                      _this.counter += 1;
                      // 25秒刷一次转化率
                      if(_this.counter%5===0){
                          clearInterval(window.BARTIMER);
                          // http请求
                          // _this.$http.get()
                          _this.titleText = '美的项目转化率';
                          _this.conversionValue = [47.56, 47.24, 46.08] ;
                          _this.conversionName = ['有活', '网萌', '简约'];
                          _this.drawConversion('bar');
                          setTimeout(function(){
                              f();
                          },5000);
                      } else {
                        // else刷新瞬时动态率
                        _this.titleText = '各基地瞬时接待量';
                        _this.drawGraph('bar');
                      }
                    },5000);
                  }
                  f();
                }
            })  
        }  
  };
</script>

<style>
  .bar-graph,.bar {
    width:99.4%;
    height: 305px; 
  }
  .bar-graph{
    margin-top: 30px;
    /*border:1px solid rgba(255,255,255,.2);*/
  }
  .bar{
    padding-top: 15px;
    padding-bottom: 15px;
    /*border: 2px solid #ccc;*/
    box-shadow: -1px -1px 10px 2px rgba(255,255,255,.6) inset;
  }
</style>
