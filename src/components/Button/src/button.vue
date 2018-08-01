<template>
    <button 
    :disabled="disabled" 
    :type="type" 
    :class="className"
    @click="handleClick"
    >{{value}}</button>
</template>
<script>
export default {
    data(){
        return{
            muiClass:"mui-button-body"
        }
    },
    props:{
        disabled:Boolean,
        type:{
            default:"default"
        },
        myClass:{//传入的自定义 class name 默认为空
            default:""
        },
        value:{
            default:"按钮"
        }
    },
    methods:{
        //处理内部点击的事件 发射到外部
       handleClick(evt){
           this.$emit("click",evt)
       }
    },
    computed:{
        //返回加上用户自定义的class
        className:function () {
            return this.muiClass+" "+this.myClass
        }
    }
}
</script>
<style lang="postcss" scoped>
.mui-button-body{
   width: 200px;
   height: 120px;
   outline: none;
}
</style>


