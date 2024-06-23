<script setup lang="ts">
  const buttons = [
    { label: "O Casal", path: "/couple" },
    { label: "Local da Cerimônia", path: "/location" },
    { label: "Lista de Presentes", path: "/gifts" },
    { label: "Confirme sua presença", path: "/rsvp" },
  ];
</script>

<template>
  <section class="flex flex-col items-stretch gap-2">
    <router-link
      :to="button.path"
      active-class="*:bg-green-100 *:text-white hover:*:text-blue-300"
      class="hover:*:bg-green-100 hover:*:bg-opacity-50 hover:*:shadow-lg"
      v-for="(button, index) in buttons"
      :key="index"
    >
      <button
        class="px-6 py-1 w-full uppercase tracking-normal text-sm border-green-200 border-2 text-blue-300 rounded-full transition-colors transition-shadow"
        :id="'button-' + index"
      >
        {{ button.label }}
      </button>
    </router-link>
  </section>
</template>
