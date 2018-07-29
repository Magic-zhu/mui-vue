
import Vue from 'vue';
import indicator from './src/indicator'
//使用vue基础构造器 创建一个“子类”
const Indicator = Vue.extend(indicator);
//定义一个实例变量
let instance;

export default {
    //open类方法 
  open(){
    if (!instance) {
        //创建一个instance实例
      instance = new Indicator({
          //挂载到新建的div上面
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    //插入到页面中
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.visible = true;
    });
  },
  //关闭类方法
  close() {
    if (instance) {
      instance.visible = false;
    }
  }
};