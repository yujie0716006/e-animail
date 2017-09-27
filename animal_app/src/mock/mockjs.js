/**
 * 这是用来进行mock数据用的，是请求到的数据
 */
import Mock from "mockjs";
import apiData from "./data.json"; //引入数据文件

//这是显示的mock的variety的数据
Mock.mock('/api/variety',{
  code:0,  //表示数据请求成功了
  data:apiData.categorys
});
