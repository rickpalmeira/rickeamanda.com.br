<script setup lang="ts">
import { format } from "v-money3";

defineProps<{
  name?: string;
  price?: number;
  thumbnail?: string;
  url?: string;
}>();

const currencyConfig = {
  prefix: "R$ ",
  suffix: "",
  decimal: ",",
  thousands: ".",
  precision: 2,
  masked: false,
};
</script>

<template>
  <div
    class="flex w-1/2 min-w-60 flex-col rounded-lg bg-white shadow-lg transition hover:scale-105 hover:shadow-2xl sm:w-60 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
  >
    <div
      class="h-48 w-full rounded-t-lg bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage: `url(${'gifts/' + thumbnail})`,
      }"
      :alt="name"
    ></div>
    <div class="flex min-h-48 flex-col justify-between gap-5 p-2 text-center">
      <h3 class="text-md px-6 text-center font-bold">{{ name }}</h3>
      <h4
        class="px-6 text-center text-2xl font-bold tracking-normal text-cyan-700"
      >
        {{ format((price || 0) / 100, currencyConfig) }}
      </h4>
      <a
        class="mb-2 hover:*:bg-emerald-300 hover:*:bg-opacity-50"
        :href="url"
        target="_blank"
      >
        <button
          class="rounded-full border-2 border-emerald-500 px-6 py-1 text-sm uppercase tracking-normal text-cyan-700 transition-colors"
        >
          Presentear
        </button>
      </a>
    </div>
  </div>
</template>
