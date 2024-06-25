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
        class="px-6 py-1 w-full uppercase tracking-normal text-sm border-green-200 border-2 text-blue-300 rounded-full transition-colors"
        :id="'button-' + index"
      >
        {{ button.label }}
      </button>
    </router-link>
  </section>
</template>
