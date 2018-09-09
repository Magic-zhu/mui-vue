<template>
    <div :class="className" @click="handleclick">
        <span :class="icon_class">
            <slot name="icon"></slot>
        </span>
        <span :class="label_class">
            <slot name="label"></slot>
        </span>
    </div>
</template>
<script>
export default {
    props:{
        className:{
            default:"mui-tab-item"
        },
        
    },
    methods:{
        handleclick(){
            
        }
    }
}
</script>

<style lang="postcss" scoped>
.mui-tab-item{
    height:100%;
    display: flex;
    flex-direction: column;
}
</style>

