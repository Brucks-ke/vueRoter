<template>
  <h1>首页</h1>
  <div>{{aa}}</div>
  <router-view></router-view>
</template>

<style></style>

<script>
import {ref} from "vue"
export default{
  setup(){
    const aa = ref("小明")
    return {
      aa
    }
  }
}




</script>