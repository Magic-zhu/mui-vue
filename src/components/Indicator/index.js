
import Vue from 'vue';
//使用vue基础构造器 创建一个“子类”
const Indicator = Vue.extend(require('./src/indicator.vue'));
//定义一个实例变量
let instance;

export default {
    //open类方法 创建一个instance实例
  open(){
    if (!instance) {
        console.log(1)
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
      instance.visible = true;
    });
  },

  close() {
    if (instance) {
      instance.visible = false;
    }
  }
};