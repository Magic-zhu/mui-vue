<template>
    <div class="mui-input">
      <input 
      type="type" 
      :value="value" 
      @input="$emit('input', $event.target.value)"
      :clearable="clearable"
      />
    </div>
</template>
<script>
  export  default {
      data(){
        return{

        }
      },
    props:{
        //input输入框的输入类型
        type:{
          default:"text"
        },
        //input输入框是不是可以清除
        clearable:{
          default:true
        },
        value:""
    }
  }
</script>
<style scoped lang="postcss">

</style>
