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
            })
        }
        if (instance.visible) return;
        //判断有没有自定义的提示信息内容
        if(options&&options.message){
            instance.message=options.message
        }
        //插入到页面中
        document.body.appendChild(instance.$el);
        let time=3000;
        //默认延迟关闭时间 3s 当设置time=-1的时候需要手动关闭
        if(options&&options.time){
            time=options.time
        }
        Vue.nextTick(() => {
          instance.visible = true;
          if(time!=-1){
            setTimeout(()=>{
                instance.visible = false;
              },time)
          }
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
