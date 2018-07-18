
import Vue from 'vue';

const Indicator = Vue.extend(require('./src/indicator.vue'));
let instance;

export default {
  open(){
    if (!instance) {
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