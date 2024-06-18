<script setup lang="ts">
  import Banner from "./components/Banner.vue";
  import Buttons from "./components/Buttons.vue";
  import Countdown from "./components/Countdown.vue";
  import DateTime from "./components/DateTime.vue";
  import Monogram from "./components/Monogram.vue";
</script>

<template>
  <div className="bg-[#fbfbfb] min-w-[294px]">
    <banner />
    <div
      className="container px-6 pb-12 flex flex-col justify-between h-[60dvh] items-center mx-auto text-[#9f2d61] font-serif tracking-wide"
    >
      <monogram />
      <date-time />
      <countdown dateString="2024-08-17T17:00:00" />
      <buttons />
    </div>
  </div>
</template>
