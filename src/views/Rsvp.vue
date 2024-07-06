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
    class="uppercase text-2xl tracking-widest text-center border-b-2 px-2 border-red-100"
  >
    Confirmação de presença
  </h2>

  <p class="max-w-[800px] text-justify text-blue-300 mt-14">
    Sua presença é muito importante para nós, por favor, confirme sua presença o
    quanto antes no botão abaixo.
  </p>
  <section class="w-full flex flex-col justify-center items-center my-auto">
    <a
      :href="rsvp_url"
      target="_blank"
      class="bg-blue-100 border-blue-300 border-2 text-white text-md sm:text-xl font-bold px-6 py-1 mb-10 uppercase tracking-wider rounded-full shadow-md hover:shadow-xl hover:bg-blue-300 transition"
    >
      Confirmar Presença
    </a>
    <p class="text-lg">
      Alguma dúvida? Entre em contato com
      <a
        :href="contact_url"
        class="underline text-blue-300 hover:decoration-red-300 hover:text-red-200"
      >
        os noivos
      </a>
    </p>
  </section>
</template>
