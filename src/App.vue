<script setup lang="ts">
  import Banner from "./components/Banner.vue";
  import Monogram from "./components/Monogram.vue";
  import Buttons from "./components/Buttons.vue";
  import Countdown from "./components/Countdown.vue";
  import DateTime from "./components/DateTime.vue";
</script>

<template>
  <div class="bg-[#fbfbfb] min-w-[294px]">
    <banner />
    <div
      class="container pb-2 px-6 flex flex-col justify-between items-center mx-auto text-red-300 font-serif tracking-wide min-h-[60dvh] *:mb-2"
    >
      <monogram />
      <date-time />
      <countdown dateString="2024-08-17T17:00:00" />
      <buttons />
      <router-view />
    </div>
  </div>
</template>
