<template>
    <div class="mui-input">
      <div class="clearable" v-show="clear"  @click="clearValue()">
           <i :class="icon"></i>
      </div>
      <div class="mui-input-right" v-show="right"  @click="clearValue()">
           <i :class="right"></i>
      </div>
      <div class="mui-input-wrong" v-show="wrong"  @click="clearValue()">
           <i :class="wrong"></i>
      </div>
      <input
      class="mui-input-body"
      ref="muiInput" 
      type="type" 
      :value="value"
      :placeholder="placeholder" 
      @input="handleInput"
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
          default:false
        },
        //绑定的value值
        value:"",
        //自定义placeholder
        placeholder:String,
        //自定义图标
        icon:{
          default:"iconfont icon-close-circle"
        }
    },
    methods:{
      //发射出组件内部的数据到父组件
      handleInput($event){
        this.$emit('input',$event.target.value);
      },
      //清除数据
      clearValue(){
        this.$emit('input',"");
      }
    },
    computed:{
      clear:function(){
        if(this.clearable){
          if(this.value!=""){
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      },
      right(){
        return false
      },
      wrong(){
        return false
      }
    }
  }
</script>
<style scoped lang="postcss">
.mui-input{
  box-sizing: border-box;
  position: relative;
  height: 50px;
  width: 400px;
}
.mui-input-body{
  box-sizing: border-box;
  border: 1px solid lightgrey;
  outline:none;
  width: 100%;
  height:100%;
}
.clearable{
  position: absolute;
  height: 100%;
  line-height: 100%;
  right:10px;
  display:flex;
  align-items: center;
}
</style>
