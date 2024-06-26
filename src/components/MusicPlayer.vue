<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";
  import song from "../assets/song.mp3";

  const audioElement = new Audio(song);
  const isPlaying = ref(!audioElement.paused);

  const playOrPause = () => {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
    isPlaying.value = !audioElement.paused;
  };

  onMounted(() => {
    audioElement.loop = true;
    audioElement.volume = 0.5;
    audioElement.play();
  });

  onUnmounted(() => {
    audioElement.pause();
  });
</script>

<template>
  <div class="fixed bottom-14 right-1.5 md:bottom-16 p-4 z-50">
    <button
      class="bg-blue-200 text-white hover:bg-blue-100 hover:text-blue-300 rounded-full w-7 h-7 md:w-9 md:h-9 flex items-center justify-center transition-colors"
      @click="playOrPause"
    >
      <span class="text-xl" v-if="isPlaying">⏸</span>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        viewBox="-2 0 24 24"
      >
        <path d="M3 22v-20l18 10-18 10z" />
      </svg>
    </button>
  </div>
</template>
