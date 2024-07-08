<script setup lang="ts">
const buttons = [
  { label: "Sobre o casal", path: "/about" },
  { label: "Local", path: "/location" },
  { label: "Lista de presentes", path: "/gifts" },
  { label: "Confirme sua presença", path: "/rsvp" },
];
</script>

<template>
  <section class="flex flex-col items-stretch gap-2">
    <router-link
      :to="button.path"
      active-class="*:bg-green-100 *:text-white hover:*:text-blue-300"
      class="hover:*:bg-green-100 hover:*:bg-opacity-50"
      v-for="(button, index) in buttons"
      :key="index"
    >
      <button
        class="w-full rounded-full border-2 border-green-200 px-6 py-1 text-sm uppercase tracking-normal text-blue-300 transition-colors"
        :id="'button-' + index"
      >
        {{ button.label }}
      </button>
    </router-link>
  </section>
</template>
