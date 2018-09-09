// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import muiInput from "./components/Input"
import muiButton from "./components/Button"
import muiPicker from "./components/Picker"
import muiDialog from "./components/Dialog"
import muiSwitch from "./components/Switch"
Vue.config.productionTip = false
Vue.use(muiInput);
Vue.use(muiButton);
Vue.use(muiPicker);
Vue.use(muiDialog);
Vue.use(muiSwitch);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
