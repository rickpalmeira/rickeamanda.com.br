<script setup lang="ts">
  import Banner from "./components/Banner.vue";
  import Monogram from "./components/Monogram.vue";
  import Buttons from "./components/Buttons.vue";
  import Countdown from "./components/Countdown.vue";
  import DateTime from "./components/DateTime.vue";
  import { useRoute } from "vue-router";
</script>

<template>
  <div class="bg-[#fbfbfb] min-w-[294px] text-red-300 font-serif tracking-wide">
    <banner />
    <div
      class="container pb-2 px-6 flex flex-col justify-between items-center mx-auto min-h-[60dvh] *:mb-2"
    >
      <monogram />
      <date-time />
      <countdown dateString="2024-08-17T17:00:00" />
      <buttons />
    </div>
    <div
      class="container p-6 flex flex-col items-center mx-auto min-h-[100dvh]"
      id="content"
      v-if="useRoute().fullPath !== '/'"
    >
      <router-view />
    </div>
  </div>
</template>
