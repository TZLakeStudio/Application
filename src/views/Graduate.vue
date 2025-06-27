<script setup lang="ts">

const tmp: string[] = []
for (let i = 0; i < 100; i ++) {
  tmp.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aut blanditiis consectetur deserunt, inventore ipsa ipsam magni maxime nam odit officia, porro possimus quaerat, qui quo sint ut. Accusantium.")
}
</script>

<template>
  <div id="news">
<!--    <p v-for="t in tmp">{{ t }}</p>-->
  </div>
</template>

<style scoped>
#news {
  width: 100%;
  min-height: 100vh;
  z-index: var(--main-z-index);
}
</style>
