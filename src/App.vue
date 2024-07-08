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
  <div
    class="min-w-[294px] bg-neutral-50 font-serif tracking-wide text-red-300"
  >
    <music-player />
    <back-to-top />
    <toaster />
    <banner />
    <div
      class="container mx-auto flex min-h-[60dvh] flex-col items-center justify-between px-6 pb-2 *:mb-2"
    >
      <monogram />
      <date-time />
      <countdown date-string="2024-08-17T17:00:00" />
      <buttons />
    </div>
    <div
      class="container mx-auto flex min-h-[100dvh] flex-col items-center justify-start p-6 pt-0"
      id="content"
      v-if="useRoute().fullPath !== '/'"
    >
      <router-view />
    </div>
  </div>
</template>
