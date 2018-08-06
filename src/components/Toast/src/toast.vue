<template>
    <transition name="fade">
        <div class="mui-toast" v-show="visible">
            <i></i>
            <span class="mui-toast-message">{{message}}</span>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
            visible:false
        }
    },
    props:{
        message:{
            default:"提示信息"
        }
    }
}
</script>

<style lang="postcss" scoped>
.mui-toast{
    width: 20%;
    max-width: 40%;
    height: 50px;
    max-height: 200px;
    background-color: rgba(0, 0, 0, 0.6);
    color:white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin:auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>


