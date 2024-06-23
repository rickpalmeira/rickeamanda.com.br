<script setup lang="ts">
  import Banner from "./components/Banner.vue";
  import Monogram from "./components/Monogram.vue";
</script>

<template>
  <div class="bg-[#fbfbfb] min-w-[294px]">
    <banner />
    <div
      class="container px-6 pb-12 flex flex-col justify-between h-[60dvh] items-center mx-auto text-[#8E2957] font-serif tracking-wide"
    >
      <monogram />
      <router-view />
    </div>
  </div>
</template>
