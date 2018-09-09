<template>
    <transition name="fade">
        <div class="mui-dialog" v-if="visable">
            <div v-if="mode=='normal'||!mode" class="mui-dialog-body">
                <div class="mui-dialog-header">
                    <header class="mui-dialog-title">{{title}}</header>
                    <p class="mui-dialog-message">{{message}}</p>                
                </div>
                <footer class="mui-dialog-footer">
                    <span @click="confirm()" style="color:green;border-right:1px solid lightgrey;">确认</span>
                    <span @click="cancel()">取消</span>
                </footer>
            </div>
            <div v-if="mode=='custom'" :class="className">
                <slot name="mui-dialog-item"></slot>
                <footer class="mui-dialog-footer">
                    <span @click="confirm()" style="color:green;border-right:1px solid lightgrey;">确认</span>
                    <span @click="cancel()">取消</span>
                </footer>
            </div>        
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        mode:String,
        visable:false,
        title:{
            type:String,
            default:'对话框标题'
        },
        message:{
            type:String,
            default:'hello mui-vue'            
        },
        className:{
            type:String,
            default:'mui-dialog-body'     
        }
    },
    methods:{
        confirm(){
            this.$emit("confirm");
        },
        cancel(){
            this.$emit("cancel");
        }
    }
}
</script>
<style lang="postcss" scoped>
.mui-dialog{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.3);
}
.mui-dialog-body{
    width: 80%;
    height: 300px;
    background-color: #fff;
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    margin:auto;
    border-radius: 5px;
}
.mui-dialog-footer{
    position: absolute;
    width: 100%;
    bottom: 0;
    color:black;
    display: flex;
    height: 100px;
    line-height:100px;
    border-top:1px solid lightgrey;
}
.mui-dialog-footer span{
    text-align: center;
    width:50%;
}
.mui-dialog-header{
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.mui-dialog-message{
    font-size: 30px;
    color:grey;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>


