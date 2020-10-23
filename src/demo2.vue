<template>
  <div class="red">
    这里是Demo的内部
    {{ message }}
    <button @click="fn">call fn</button>
    <button>只是看页面上有没有</button>
  </div>
</template> 
   
<script>
export default {
  props: ["message", "fn"],
  //   props: ["message"],
};
</script>

<style scoped>
.red {
  color: red;
  border: 1px solid red;
}
</style>