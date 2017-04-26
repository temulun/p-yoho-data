/**
 * 网上扒的，稍微修改了一下。
 * 和jquery-countdown.css整合到一起了,使用了css和图片。
 * 源代码网址：http://www.gbtags.com/gb/share/6207.htm
 */
/*Javascript代码片段*/
    //乘法函数  
    function accMul(arg1, arg2) {
        var m = 0,
            s1 = arg1.toString(),
            s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        } catch (e) {}
        try {
            m += s2.split(".")[1].length;
        } catch (e) {}
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }

    //给Number类型增加一个mul方法，使用时直接用 .mul 即可完成计算。   
    Number.prototype.mul = function(arg) {
        return accMul(arg, this);
    };

    //除法函数  
    function accDiv(arg1, arg2) {
        var t1 = 0,
            t2 = 0,
            r1, r2;
        try {
            t1 = arg1.toString().split(".")[1].length;
        } catch (e) {}
        try {
            t2 = arg2.toString().split(".")[1].length;
        } catch (e) {}
        with(Math) {
            r1 = Number(arg1.toString().replace(".", ""));
            r2 = Number(arg2.toString().replace(".", ""));
            return (r1 / r2) * pow(10, t2 - t1);
        }
    }
    //给Number类型增加一个div方法，，使用时直接用 .div 即可完成计算。   
    Number.prototype.div = function(arg) {
        return accDiv(this, arg);
    };

    function accAdd(arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split(".")[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1.mul(m) + arg2.mul(m)).div(m);
    }

    //给Number类型增加一个add方法，，使用时直接用 .add 即可完成计算。   
    Number.prototype.add = function(arg) {
        return accAdd(arg, this);
    };


    //减法函数  
    function Subtr(arg1, arg2) {
        var r1, r2, m, n;
        try {
            r1 = arg1.toString().split(".")[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        //last modify by deeka  
        //动态控制精度长度  
        n = (r1 >= r2) ? r1 : r2;
        return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
    }

    //给Number类型增加一个add方法，，使用时直接用 .sub 即可完成计算。   
    Number.prototype.sub = function(arg) {
        return Subtr(this, arg);
    };

    function priceToObj(price) {
        if (price == 0) {
            return data.zero;
        }
        var obj = {};
        obj.item1=parseInt((price)%10);
        obj.item2=parseInt((price.div(10))%10);
        obj.item3=parseInt((price.div(100))%10);
        obj.item4=parseInt((price.div(1000))%10);
        obj.item5=parseInt((price.div(10000))%10);
        obj.item6=parseInt((price.div(100000))%10);
        obj.item7=parseInt((price.div(1000000))%10);
        obj.item8=parseInt((price.div(10000000))%10);
        obj.item9=parseInt((price.div(100000000))%10);
        obj.item10=parseInt((price.div(1000000000))%10);
        return obj;
    }
$.fn.extend({
    scrollToNumber: function(num, pos) {
        var $this = $(this);
        $this.find(".text").stop(true, true);

        var top = num * 64;
        var currentTop = parseFloat($this.find(".text").css("background-positionY"));
        if (top == currentTop) {
            return;
        } else if (currentTop < top) {
            $this.find(".text").animate({
                backgroundPositionY: -top
            }, 1500, "swing");
        } else {

            $this.find(".text").animate({
                backgroundPositionY: -top
            }, 1500, "swing", function() {
                if ($this.find(".zero").size() > 1) {
                    $this.find(".text").css({
                        backgroundPositionY: -top
                    });
                }
            });
        }
    }
});
var data = {
        targetClass: {
            "item1": '.item1',
            "item2": '.item2',
            "item3": '.item3',
            "item4": '.item4',
            "item5": '.item5',
            "item6": '.item6',
            "item7": '.item7',
            "item8": '.item8',
            "item9": '.item9',
            "item10": '.item10'
        },
        zero: {
            item1: 0,
            item2: 0,
            item3: 0,
            item4: 0,
            item5: 0,
            item6: 0,
            item7: 0,
            item8: 0,
            item9: 0,
            item10: 0
        },
        numbersTmp: ""
    };
// 
$.animateToPrice = function(price,$this) {
    var obj = priceToObj(price);
    $.each(obj, function(key, value) {
        $this.find(data.targetClass[key]).scrollToNumber(value, key);
    });
};
//随机数生成
function getMathNumber(min,max){
  var n=min+Math.round(Math.random()*(max-min));
  if((n%10)%2===0){
    return -n;
  }else{
    return n;
  }
}
window.CONSTNUM = 28236;

$.animateToPrice(window.CONSTNUM,$(".studyNum"));
var timer1=setInterval(function(){

  window.CONSTNUM += getMathNumber(500,1000);
  if(window.CONSTNUM < 11000){
    window.CONSTNUM = 28236;
  } else if(window.CONSTNUM > 40000){
    window.CONSTNUM = 28236;
  } else {
    window.CONSTNUM = window.CONSTNUM;
  }
  // window.CONSTNUM < 25000 ? (window.CONSTNUM = 28215) : window.CONSTNUM;
  // window.CONSTNUM = getMathNumber(0,100);
  $.animateToPrice(window.CONSTNUM,$(".studyNum"));

},5000);
 function ymdhis() {
    var obj = new Date();
    var y = obj.getFullYear();
    var m = obj.getMonth() + 1;
    var d = obj.getDate();
    var dayOfWeek = obj.getDay();
    var h = obj.getHours();
    var i = obj.getMinutes();
    var s = obj.getSeconds();
    if (m < 10) m = "0" + m;
    if (d < 10) d = "0" + d;
    if (h < 10) h = "0" + h;
    if (i < 10) i = "0" + i;
    if (s < 10) s = "0" + s;
    // var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var time = y + '-' + m + '-' + d + ' ' + ' ' + h + ':' + i + ':' + s + " ";// + arr_week[dayOfWeek];
    document.getElementById("jShowTime").innerHTML = time;
    setTimeout(ymdhis, 1000);
}
window.onload=function () {
    ymdhis();
}
