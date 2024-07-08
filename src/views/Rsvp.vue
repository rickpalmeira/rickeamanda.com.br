<script setup lang="ts">
import PageBreak from "../components/PageBreak.vue";

const rsvp_url =
  "https://assessoriavip.com.br/rsvpUnico/" + import.meta.env.VITE_EVENT_HASH;

const contact_url =
  "https://web.whatsapp.com/send/?phone=" + import.meta.env.VITE_PHONE_NUMBER;
</script>

<template>
  <page-break />
  <h2
    class="border-b-2 border-red-100 px-2 text-center text-2xl uppercase tracking-widest"
  >
    Confirmação de presença
  </h2>

  <p class="mt-14 max-w-[800px] text-justify text-blue-300">
    Sua presença é muito importante para nós. Por favor, envie sua confirmação o
    quanto antes no botão abaixo.
  </p>
  <section class="my-auto flex w-full flex-col items-center justify-center">
    <a
      :href="rsvp_url"
      target="_blank"
      class="text-md mb-10 rounded-full border-2 border-blue-300 bg-blue-100 px-6 py-1 font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-blue-300 hover:shadow-xl sm:text-xl"
    >
      Confirmar Presença
    </a>
    <p class="text-lg">
      Alguma dúvida? Entre em contato com
      <a
        :href="contact_url"
        class="text-blue-300 underline hover:text-red-200 hover:decoration-red-300"
      >
        os noivos
      </a>
    </p>
  </section>
</template>
