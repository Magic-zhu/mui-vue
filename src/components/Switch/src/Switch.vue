<template>
    <div class="mui-switch" @click="handleclick()">
        <div :class="position"></div>
    </div>
</template>
<script>
export default {
    name:"mui-switch",
    data(){
        return{
            a:false
        }
    },
    methods:{
        handleclick(){
            this.a=!this.a;
        }
    },
    computed:{
        position:function(){
            if(!this.a){
                return 'mui-switch-btn mui-switch-btn-off '
            }else{
                return 'mui-switch-btn mui-switch-btn-on'
            }
        }
    }
}
</script>

<style lang="postcss" scoped>
.mui-switch{
    position: relative;
    width: 110px;
    height: 60px;
    border: 1px solid #dfdfdf;
    border-radius: 40px;
    // box-sizing: border-box;
}
.mui-switch-btn{
    width: 60px;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.4);
    border-radius: 50%;
    position: absolute;
    top:0;
    transition: all 0.5s;
}
.mui-switch-btn-off{
    left:0
}
.mui-switch-btn-on{
    left:50px;
}
.mui-switch-disabled{
    background-color: #dfdfdf;
}
</style>

