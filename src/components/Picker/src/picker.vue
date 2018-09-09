<template>
<transition>
    <div class="mui-picker" v-if="true">
        <div class="mui-picker-select">
            <ul class="mui-picker-body">
                <li class="mui-picker-item">1</li>
                <li class="mui-picker-item">1</li>
                <li class="mui-picker-item">1</li>
                <li class="mui-picker-item">1</li>
                <li class="mui-picker-item">1</li>
            </ul>
        </div>
    </div>
</transition>
</template>
<style lang="postcss" scoped>
.mui-picker{
    position: fixed;
    bottom: 0;
    width:100%;
    height: 100px;
}
.mui-picker-select{

}
.mui-picker-body{
    transform-style: preserve-3d;
    transform: rotate3d(90deg);
    backface-visibility: hidden;
    width: 100%;
    height:100px;
    background-color: red;
}
.mui-picker-item{
    list-style: none;
}
</style>
<script>
export default {
    data(){
        return{
            ifShowPicker:false
        }
    }
}
</script>





