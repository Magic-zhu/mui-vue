<template>
<div>
  <mui-input v-model="xx" :clearable="true" placeholder="good"></mui-input>
</div>
</template>

<script>
import Indicator from "../components/Indicator"
export default {
  name: 'HelloWorld',
  data () {
    return {
      xx:""
    }
  },
  mounted(){
      Indicator.open();
      setTimeout(()=>{
        Indicator.close();
      },1000)
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
