<script setup lang="ts">
  import pageBreak from "../components/PageBreak.vue";
</script>

<template>
  <page-break />
  <h2
    class="uppercase text-2xl tracking-widest text-center border-b-2 px-2 mb-8 border-red-100"
  >
    Local
  </h2>
  <div
    class="flex flex-col md:flex-row w-full gap-6 items-center md:justify-start mb-28 md:mb-8"
  >
    <div
      class="h-80 w-80 sm:h-96 sm:w-96 my-3 sm:my-0 p-1 rounded-[100%] bg-green-300 shadow-lg hover:shadow-2xl hover:scale-110 transition-all"
    >
      <div
        class="h-full w-full rounded-[100%] bg-cover bg-center"
        :style="{ backgroundImage: `url('img/celebracao.jpg')` }"
      ></div>
    </div>
    <div class="flex flex-col justify-center gap-3 text-green-300">
      <h3 class="text-3xl uppercase font-bold tracking-widest">Celebração</h3>
      <h4 class="text-2xl font-bold">Paróquia N. Sra. de Fátima</h4>
      <p class="text-lg">
        Praça Santos Dumont<br />
        St. Aeroporto, Goiânia<br />
        Goiânia - GO
      </p>
      <div class="flex flex-row gap-2">
        <a href="https://maps.app.goo.gl/XSjTWyXxe6N5ae7j7" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-10 w-10 p-0.5 border-green-300 border-2 rounded-full hover:bg-green-300 hover:text-white transition-colors"
          >
            <path
              fill="currentColor"
              d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/chacara_paris" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-10 w-10 p-1 border-green-300 border-2 rounded-full hover:bg-green-300 hover:text-white transition-colors"
          >
            <path
              fill="currentColor"
              d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="flex-grow"></div>
  <div class="flex flex-col md:flex-row-reverse gap-6 items-center w-full">
    <div
      class="h-80 w-80 sm:h-96 sm:w-96 m-3 sm:my-0 p-1 rounded-[100%] bg-red-300 shadow-lg hover:shadow-2xl hover:scale-110 transition-all"
    >
      <div
        class="h-full w-full rounded-[100%] bg-cover bg-center"
        :style="{ backgroundImage: `url('img/recepcao.jpg')` }"
      ></div>
    </div>
    <div class="flex flex-col justify-center gap-3 text-red-300 md:text-right">
      <h3 class="text-3xl uppercase font-bold tracking-widest">Recepção</h3>
      <h4 class="text-2xl font-bold">Chácara Paris</h4>
      <p class="text-lg">
        Rua Dona Sinhá, 136<br />
        Residencial Santa Fé I<br />
        Goiânia - GO
      </p>
      <div class="flex flex-row gap-2 md:justify-end">
        <a href="https://maps.app.goo.gl/XSjTWyXxe6N5ae7j7" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-10 w-10 p-0.5 border-red-300 border-2 rounded-full hover:bg-red-300 hover:text-white transition-colors"
          >
            <path
              fill="currentColor"
              d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/chacara_paris" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-10 w-10 p-1 border-red-300 border-2 rounded-full hover:bg-red-300 hover:text-white transition-colors"
          >
            <path
              fill="currentColor"
              d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
