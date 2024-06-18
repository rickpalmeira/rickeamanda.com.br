<script setup lang="ts">
  import Banner from "./components/Banner.vue";
  import DateTime from "./components/DateTime.vue";
  import Countdown from "./components/Countdown.vue";
  import monogram from "./assets/monogram-02.svg";
</script>

<template>
  <div className="bg-[#fbfbfb] min-w-[294px]">
    <Banner />
    <div
      className="container px-6 pb-12 flex flex-col justify-between h-[60dvh] items-center mx-auto text-[#9f2d61] font-serif tracking-wide"
    >
      <img
        :src="monogram"
        className="h-48 -mt-24 z-10"
        alt="Amanda e Rick"
        aria-hidden
      />
      <DateTime />
      <Countdown dateString="2024-08-17T17:00:00" />
    </div>
  </div>
</template>
