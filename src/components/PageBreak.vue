<script setup lang="ts">
  import flower from "../assets/flower-3.svg";
</script>

<template>
  <div class="flex flex-row items-center justify-center gap-8 my-6">
    <img :src="flower" class="w-1/5 -rotate-12"  aria-hidden />
    <img :src="flower" class="w-1/5 -scale-y-100 rotate-[192deg]" aria-hidden />
  </div>
</template>
