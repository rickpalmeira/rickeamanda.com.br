<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{ dateString: string }>();

const currentDate = ref(new Date());
const weddingDate = ref(new Date(props.dateString));
const timeDiff = ref(weddingDate.value.getTime() - currentDate.value.getTime());

const updateTimeDiff = () => {
  currentDate.value = new Date();
  timeDiff.value = weddingDate.value.getTime() - currentDate.value.getTime();
};

onMounted(() => {
  updateTimeDiff();
  const interval = setInterval(updateTimeDiff, 1000);
  onUnmounted(() => clearInterval(interval));
});
</script>

<template>
  <div
    class="flex w-full justify-around border-y-2 border-red-100 sm:w-auto sm:justify-center sm:gap-12 sm:px-4"
  >
    <div class="flex flex-col items-center">
      <span class="text-4xl">
        {{ Math.floor(timeDiff / (1000 * 60 * 60 * 24)) }}
      </span>
      <span class="uppercase text-blue-300">dias</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="text-4xl">
        {{ Math.floor((timeDiff / (1000 * 60 * 60)) % 24) }}
      </span>
      <span class="uppercase text-blue-300">horas</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="text-4xl">
        {{ Math.floor((timeDiff / (1000 * 60)) % 60) }}
      </span>
      <span class="uppercase text-blue-300">minutos</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="text-4xl">
        {{ Math.floor((timeDiff / 1000) % 60) }}
      </span>
      <span class="uppercase text-blue-300">segundos</span>
    </div>
  </div>
</template>
