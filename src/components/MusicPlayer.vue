<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";
  import song from "../assets/song.mp3";

  const audioElement = new Audio(song);
  const isPlaying = ref(false);
  const visible = ref(false);

  const playOrPause = () => {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
    isPlaying.value = !audioElement.paused;
  };

  onMounted(() => {
    visible.value = true;

    audioElement.loop = true;
    audioElement.volume = 0.5;
    audioElement.play();

    isPlaying.value = !audioElement.paused;
  });

  onUnmounted(() => {
    audioElement.pause();
  });
</script>

<template>
  <div class="fixed bottom-14 right-1.5 md:bottom-16 p-4 z-50">
    <transition
      enter-from-class="translate-x-[150%] opacity-0"
      leave-to-class="translate-x-[150%] opacity-0"
      enter-active-class="transition duration-300 delay-[3s]"
      leave-active-class="transition duration-300"
      v-show="visible"
    >
      <button
        class="bg-blue-200 text-white hover:bg-blue-100 hover:text-blue-300 rounded-full w-7 h-7 md:w-9 md:h-9 flex items-center justify-center"
        @click="playOrPause"
      >
        <svg
          v-if="isPlaying"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11 22h-6v-20h5v20zm6-20h-2v20h5v-20z" />
        </svg>
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
    </transition>
  </div>
</template>
