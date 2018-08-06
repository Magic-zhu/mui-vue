<template>
  <transition>
    <div>
      <mui-input v-model="xx" :clearable="true" placeholder="good"></mui-input>
    </div>
  </transition>
</template>

<script>
import Indicator from "../components/Indicator"
import Toast from "../components/Toast"
export default {
  name: 'HelloWorld',
  data () {
    return {
      xx:""
    }
  },
  mounted(){
    Toast.open()
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
