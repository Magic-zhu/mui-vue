<template>
  <transition>
    <!-- <mui-picker></mui-picker> -->
    <!-- <mui-dialog  :visable="xx" @confirm="kk"></mui-dialog> -->
    <mui-switch></mui-switch>
  </transition>
</template>

<script>
  import Toast from "../components/Toast"
export default {
  name: 'HelloWorld',
  data () {
    return {
      xx:true
    }
  },
  mounted(){

  },
  methods:{
    kk(){
      this.xx=false;
      let _this=this;
      setTimeout(()=>{
        _this.xx=true;
      },2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red{
    background-color: red;
}
</style>
