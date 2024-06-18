<script setup lang="ts">
  const buttons = [
    { label: "Confirme sua presença", ref: "#rsvp" },
    { label: "Lista de Presentes", ref: "#gifts" },
    { label: "Local da Cerimônia", ref: "#location" },
    { label: "Fotos", ref: "#gallery" },
  ];
</script>

<template>
  <section class="flex flex-col items-stretch gap-2">
    <a :href="button.ref" v-for="(button, index) in buttons" :key="index">
      <button
        class="px-6 py-1 w-full uppercase tracking-normal text-sm border-[#889973] border-2 text-[#2f8297] rounded-full"
        :id="'button-' + index"
      >
        {{ button.label }}
      </button>
    </a>
  </section>
</template>
