<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const targetTime = Date.now() + 5000;
const remainingSeconds = ref(5);

const days = computed(() => Math.floor(remainingSeconds.value / 86400));
const hours = computed(() => Math.floor(remainingSeconds.value / 3600) % 24);
const minutes = computed(() => Math.floor(remainingSeconds.value / 60) % 60);
const seconds = computed(() => remainingSeconds.value % 60);

let interval: ReturnType<typeof setInterval> | undefined;

const updateRemaining = () => {
  remainingSeconds.value = Math.max(
    0,
    Math.ceil((targetTime - Date.now()) / 1000),
  );
  if (remainingSeconds.value === 0) clearInterval(interval);
};

onMounted(() => {
  interval = setInterval(updateRemaining, 250);
});

onUnmounted(() => clearInterval(interval));
</script>

<template>
  <div
    class="flex w-full justify-around border-y-2 border-rose-300 sm:w-auto sm:justify-center sm:gap-12 sm:px-4"
  >
    <div class="flex flex-col items-center">
      <span class="text-4xl">
        {{ days }}
      </span>
      <span class="uppercase text-cyan-700">dias</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="text-4xl">
        {{ hours }}
      </span>
      <span class="uppercase text-cyan-700">horas</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="text-4xl">
        {{ minutes }}
      </span>
      <span class="uppercase text-cyan-700">minutos</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="text-4xl">
        {{ seconds }}
      </span>
      <span class="uppercase text-cyan-700">segundos</span>
    </div>
  </div>
</template>
