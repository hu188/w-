//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array:[]
  },
  onLoad:function(){
    var array = this.iniData();
    this.setData({array:array});
  },
  iniData:function(){
    var array=[];
    var object1 = new Object();
    object1.img="../images/haibao/haibao-1.jpg";
    object1.title="爱心早餐";
    object1.type="健康养生";
    object1.liulan="20926浏览";
    object1.pinglun = "7评论"

    array[0] =object1;
    array[1] =object1;
    array[2] = object1;
    array[3] = object1;
    return array;
  }
 
})
