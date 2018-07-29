
<template>
  <transition name="mint-indicator">
    <div class="mui-indicator" v-show="visible">
        <div class="mui-indicator-body">
        </div>
    </div>
  </transition>
</template>

<style  scoped lang="postcss">
.mui-indicator {
  width: 120px;
  height: 120px;
  background-color: #00000080;
  border-radius: 10px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.mui-indicator-body {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid;
  border-color: white white white transparent;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  animation: loading 1s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  data() {
    return {
      visible: false
    };
  }
};
</script>


