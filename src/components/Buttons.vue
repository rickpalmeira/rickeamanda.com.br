<script setup lang="ts">
  const buttons = [
    { label: "Confirme sua presença", path: "/rsvp" },
    { label: "Lista de Presentes", path: "/gifts" },
    { label: "Local da Cerimônia", path: "/location" },
    { label: "Fotos", path: "/gallery" },
  ];
</script>

<template>
  <section class="flex flex-col items-stretch gap-2">
    <router-link
      :to="button.path"
      active-class="*:bg-[#B7C2AB] *:text-white hover:*:text-[#2F8296]"
      class="hover:*:bg-[#B7C2AB] hover:*:bg-opacity-50 hover:*:shadow-lg"
      v-for="(button, index) in buttons"
      :key="index"
    >
      <button
        class="px-6 py-1 w-full uppercase tracking-normal text-sm border-[#94A285] border-2 text-[#2F8296] rounded-full"
        :id="'button-' + index"
      >
        {{ button.label }}
      </button>
    </router-link>
  </section>
</template>
