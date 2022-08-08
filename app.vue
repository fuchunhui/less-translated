<template>
  <div class="hidden">
    <!-- These two links are for generate.crawler -->
    <nuxt-link to="zh/get-started">中文</nuxt-link>
    <nuxt-link to="en/get-started">English</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
// import Vue from 'vue';

onMounted(() => {
  router.push('get-started');
  console.log('mount!!!');
});
</script>

<style></style>
