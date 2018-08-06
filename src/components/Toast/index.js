//导入vue，因为要用到vue.extend的方法
import Vue from "vue";
//导入组件本身
import toast from "./src/toast";
//定义组件成为 vue的子类对象
const Toast = Vue.extend(toast);
//定义一个实例变量
let instance

export default{
    /**
     * @param options {Object} - 需要设置的选项
     */
    open(options){
        
        //如果该实例存不存在
        if(!instance){
            //挂载实例
            instance = new Toast({
                el:document.createElement("div"),
                propsData:options
            })
        }
        if (instance.visible) return;
        //插入到页面中
        document.body.appendChild(instance.$el);
        let time="3000"
        //默认延迟关闭时间 3s
        if(options&&options.time){
            time=options.time
        }
        
        Vue.nextTick(() => {
          instance.visible = true;
          setTimeout(()=>{
            instance.visible = false;
          },time)
        });
    },
    /**
     *主动关闭Toast的方法
     */
    close(){
        if(instance){
            instance.visible = false;
        }      
    }
}
