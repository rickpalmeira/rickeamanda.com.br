<script setup lang="ts">
  import BackToTop from "./components/BackToTop.vue";
  import Toaster from "./components/Toaster.vue";
  import MusicPlayer from "./components/MusicPlayer.vue";
  import Banner from "./components/Banner.vue";
  import Buttons from "./components/Buttons.vue";
  import Countdown from "./components/Countdown.vue";
  import DateTime from "./components/DateTime.vue";
  import Monogram from "./components/Monogram.vue";
  import { useRoute } from "vue-router";
</script>

<template>
  <div class="bg-zinc-50 min-w-[294px] text-red-300 font-serif tracking-wide">
    <music-player />
    <back-to-top />
    <toaster />
    <banner />
    <div
      class="container pb-2 px-6 flex flex-col justify-between items-center mx-auto min-h-[60dvh] *:mb-2"
    >
      <monogram />
      <date-time />
      <countdown date-string="2024-08-17T17:00:00" />
      <buttons />
    </div>
    <div
      class="container p-6 pt-0 flex flex-col justify-start items-center mx-auto min-h-[100dvh]"
      id="content"
      v-if="useRoute().fullPath !== '/'"
    >
      <router-view />
    </div>
  </div>
</template>
