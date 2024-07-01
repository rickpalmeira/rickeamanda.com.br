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
    class="flex flex-col min-w-60 w-1/2 sm:w-60 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition bg-white"
  >
    <div
      class="h-48 w-full rounded-t-lg bg-cover bg-no-repeat bg-center"
      :style="{
        backgroundImage: `url(${'gifts/' + thumbnail})`,
      }"
      :alt="name"
    ></div>
    <div class="flex flex-col text-center justify-between min-h-48 gap-5 p-2">
      <h3 class="font-bold text-md text-center px-6">{{ name }}</h3>
      <h4
        class="font-bold text-2xl text-center px-6 tracking-normal text-blue-300"
      >
        {{ format((price || 0) / 100, currencyConfig) }}
      </h4>
      <a
        class="hover:*:bg-green-100 hover:*:bg-opacity-50 mb-2"
        :href="url"
        target="_blank"
      >
        <button
          class="px-6 py-1 uppercase tracking-normal text-sm border-green-200 border-2 text-blue-300 rounded-full transition-colors"
        >
          Presentear
        </button>
      </a>
    </div>
  </div>
</template>
