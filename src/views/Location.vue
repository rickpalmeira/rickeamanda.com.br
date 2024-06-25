<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import pageBreak from "../components/PageBreak.vue";

  const isMobile = ref(false);

  onMounted(() => {
    isMobile.value =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
  });
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
    <div
      class="flex flex-col justify-center gap-3 text-green-300 min-w-[16.25rem]"
    >
      <h3 class="text-3xl uppercase font-bold tracking-widest">Celebração</h3>
      <h4 class="text-2xl font-bold">Paróquia N. Sra. de Fátima</h4>
      <p class="text-lg">
        Praça Santos Dumont<br />
        St. Aeroporto, Goiânia<br />
        Goiânia - GO
      </p>
      <div class="flex flex-row gap-2">
        <a href="https://maps.app.goo.gl/zk71FkAk5SA8knia8" target="_blank">
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
        <a
          href="https://ul.waze.com/ul?place=ChIJZy2nF-TzXpMRIrx3Vh-tHrI&ll=-16.67165110%2C-49.27067770&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-10 w-10 p-0.5 border-green-300 border-2 rounded-full hover:bg-green-300 hover:text-white transition-colors"
          >
            <path
              fill="currentColor"
              d="M20.54,6.63C21.23,7.57 21.69,8.67 21.89,9.82C22.1,11.07 22,12.34 21.58,13.54C21.18,14.71 20.5,15.76 19.58,16.6C18.91,17.24 18.15,17.77 17.32,18.18C17.73,19.25 17.19,20.45 16.12,20.86C15.88,20.95 15.63,21 15.38,21C14.27,21 13.35,20.11 13.31,19C13.05,19 10.73,19 10.24,19C10.13,20.14 9.11,21 7.97,20.87C6.91,20.77 6.11,19.89 6.09,18.83C6.1,18.64 6.13,18.44 6.19,18.26C4.6,17.73 3.21,16.74 2.19,15.41C1.86,14.97 1.96,14.34 2.42,14C2.6,13.86 2.82,13.78 3.05,13.78C3.77,13.78 4.05,13.53 4.22,13.15C4.46,12.43 4.6,11.68 4.61,10.92C4.64,10.39 4.7,9.87 4.78,9.35C5.13,7.62 6.1,6.07 7.5,5C9.16,3.7 11.19,3 13.29,3C14.72,3 16.13,3.35 17.4,4C18.64,4.62 19.71,5.5 20.54,6.63M16.72,17.31C18.5,16.5 19.9,15.04 20.59,13.21C22.21,8.27 18,4.05 13.29,4.05C12.94,4.05 12.58,4.07 12.23,4.12C9.36,4.5 6.4,6.5 5.81,9.5C5.43,11.5 6,14.79 3.05,14.79C4,16 5.32,16.93 6.81,17.37C7.66,16.61 8.97,16.69 9.74,17.55C9.85,17.67 9.94,17.8 10,17.94C10.59,17.94 13.2,17.94 13.55,17.94C14.07,16.92 15.33,16.5 16.35,17.04C16.5,17.12 16.6,17.21 16.72,17.31M10.97,10.31C10.39,10.34 9.88,9.9 9.85,9.31C9.82,8.73 10.27,8.23 10.85,8.19C11.43,8.16 11.94,8.61 11.97,9.25C12,9.8 11.56,10.27 11,10.29L10.97,10.31M15.66,10.31C15.08,10.34 14.57,9.9 14.54,9.31C14.5,8.73 14.96,8.23 15.54,8.19C16.12,8.16 16.63,8.61 16.66,9.25C16.68,9.8 16.25,10.27 15.66,10.29V10.31M9.71,12.07C9.65,11.79 9.84,11.5 10.12,11.45C10.4,11.4 10.68,11.58 10.74,11.86V11.86C11.09,12.97 12.16,13.69 13.32,13.6C14.46,13.66 15.5,12.96 15.89,11.88C16.03,11.62 16.35,11.5 16.6,11.65C16.78,11.75 16.89,11.92 16.89,12.12C16.7,12.83 16.26,13.45 15.66,13.88C14.97,14.36 14.16,14.63 13.32,14.64H13.21C11.58,14.71 10.11,13.64 9.68,12.06L9.71,12.07Z"
            />
          </svg>
        </a>
        <a
          :href="
            (isMobile ? 'uber://' : 'https://m.uber.com/ul/') +
            '?action=setPickup&client_id=lRh6QX2Em-hCkwAVqCN8RvwTs66NSbYE&pickup=my_location&dropoff[formatted_address]=Par%C3%B3quia%20Cat%C3%B3lica%20Nossa%20Senhora%20de%20F%C3%A1tima%20-%20Pra%C3%A7a%20Santos%20Dumont%20-%20Setor%20Aeroporto%2C%20Goi%C3%A2nia%20-%20State%20of%20Goi%C3%A1s%2C%20Brazil&dropoff[latitude]=-16.671651&dropoff[longitude]=-49.270678'
          "
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-10 w-10 p-1 border-green-300 border-2 rounded-full hover:bg-green-300 hover:text-white transition-colors"
          >
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <path
              fill="currentColor"
              d="M0 7.97V12.93C0 14.8 1.3 16.03 3 16.03C3.83 16.03 4.56 15.71 5.09 15.16V15.9H6.27V7.97H5.08V12.86C5.08 14.12 4.23 14.97 3.14 14.97C2.03 14.97 1.19 14.14 1.19 12.86V7.97H0M7.44 7.97V15.9H8.57V15.17A2.88 2.88 0 0 0 10.63 16.03A3 3 0 0 0 13.66 13A3 3 0 0 0 10.63 10A2.86 2.86 0 0 0 8.58 10.86V7.97H7.44M17.31 10C15.62 10 14.34 11.38 14.34 13C14.34 14.73 15.68 16 17.41 16C18.47 16 19.33 15.56 19.9 14.79L19.08 14.17C18.65 14.75 18.08 15 17.41 15C16.44 15 15.66 14.32 15.5 13.38H20.2V13C20.2 11.29 18.97 10 17.31 10M23.6 10.08C22.97 10.08 22.5 10.37 22.22 10.83V10.12H21.09V15.9H22.23V12.61C22.23 11.72 22.78 11.14 23.53 11.14H24V10.07H23.6M17.29 11C18.14 11 18.85 11.59 19.04 12.47H15.5C15.73 11.59 16.44 11 17.29 11M10.55 11C11.64 11 12.53 11.9 12.53 13C12.53 14.13 11.64 15 10.55 15A2 2 0 0 1 8.56 13A2 2 0 0 1 10.55 11Z"
            ></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/pnsfatimago" target="_blank">
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
      class="h-80 w-80 sm:h-96 sm:w-96 sm:my-0 p-1 rounded-[100%] bg-red-300 shadow-lg hover:shadow-2xl hover:scale-110 transition-all"
    >
      <div
        class="h-full w-full rounded-[100%] bg-cover bg-center"
        :style="{ backgroundImage: `url('img/recepcao.jpg')` }"
      ></div>
    </div>
    <div
      class="flex flex-col justify-center gap-3 text-red-300 min-w-[16.25rem] md:text-right"
    >
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
        <a
          href="https://ul.waze.com/ul?place=ChIJY7Ofen1ZXpMROLEGgVKIe_0&ll=-16.74530550%2C-49.37590520&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-10 w-10 p-0.5 border-red-300 border-2 rounded-full hover:bg-red-300 hover:text-white transition-colors"
          >
            <path
              fill="currentColor"
              d="M20.54,6.63C21.23,7.57 21.69,8.67 21.89,9.82C22.1,11.07 22,12.34 21.58,13.54C21.18,14.71 20.5,15.76 19.58,16.6C18.91,17.24 18.15,17.77 17.32,18.18C17.73,19.25 17.19,20.45 16.12,20.86C15.88,20.95 15.63,21 15.38,21C14.27,21 13.35,20.11 13.31,19C13.05,19 10.73,19 10.24,19C10.13,20.14 9.11,21 7.97,20.87C6.91,20.77 6.11,19.89 6.09,18.83C6.1,18.64 6.13,18.44 6.19,18.26C4.6,17.73 3.21,16.74 2.19,15.41C1.86,14.97 1.96,14.34 2.42,14C2.6,13.86 2.82,13.78 3.05,13.78C3.77,13.78 4.05,13.53 4.22,13.15C4.46,12.43 4.6,11.68 4.61,10.92C4.64,10.39 4.7,9.87 4.78,9.35C5.13,7.62 6.1,6.07 7.5,5C9.16,3.7 11.19,3 13.29,3C14.72,3 16.13,3.35 17.4,4C18.64,4.62 19.71,5.5 20.54,6.63M16.72,17.31C18.5,16.5 19.9,15.04 20.59,13.21C22.21,8.27 18,4.05 13.29,4.05C12.94,4.05 12.58,4.07 12.23,4.12C9.36,4.5 6.4,6.5 5.81,9.5C5.43,11.5 6,14.79 3.05,14.79C4,16 5.32,16.93 6.81,17.37C7.66,16.61 8.97,16.69 9.74,17.55C9.85,17.67 9.94,17.8 10,17.94C10.59,17.94 13.2,17.94 13.55,17.94C14.07,16.92 15.33,16.5 16.35,17.04C16.5,17.12 16.6,17.21 16.72,17.31M10.97,10.31C10.39,10.34 9.88,9.9 9.85,9.31C9.82,8.73 10.27,8.23 10.85,8.19C11.43,8.16 11.94,8.61 11.97,9.25C12,9.8 11.56,10.27 11,10.29L10.97,10.31M15.66,10.31C15.08,10.34 14.57,9.9 14.54,9.31C14.5,8.73 14.96,8.23 15.54,8.19C16.12,8.16 16.63,8.61 16.66,9.25C16.68,9.8 16.25,10.27 15.66,10.29V10.31M9.71,12.07C9.65,11.79 9.84,11.5 10.12,11.45C10.4,11.4 10.68,11.58 10.74,11.86V11.86C11.09,12.97 12.16,13.69 13.32,13.6C14.46,13.66 15.5,12.96 15.89,11.88C16.03,11.62 16.35,11.5 16.6,11.65C16.78,11.75 16.89,11.92 16.89,12.12C16.7,12.83 16.26,13.45 15.66,13.88C14.97,14.36 14.16,14.63 13.32,14.64H13.21C11.58,14.71 10.11,13.64 9.68,12.06L9.71,12.07Z"
            />
          </svg>
        </a>
        <a
          :href="
            (isMobile ? 'uber://' : 'https://m.uber.com/ul/') +
            '?action=setPickup&client_id=lRh6QX2Em-hCkwAVqCN8RvwTs66NSbYE&pickup=my_location&dropoff[formatted_address]=CH%C3%81CARA%20PARIS%20-%20Rua%20Dona%20Sinh%C3%A1%20-%20Residencial%20Santa%20F%C3%A9%20I%2C%20Goi%C3%A2nia%20-%20State%20of%20Goi%C3%A1s%2C%20Brazil&dropoff[latitude]=-16.745306&dropoff[longitude]=-49.375905'
          "
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-10 w-10 p-1 border-red-300 border-2 rounded-full hover:bg-red-300 hover:text-white transition-colors"
          >
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <path
              fill="currentColor"
              d="M0 7.97V12.93C0 14.8 1.3 16.03 3 16.03C3.83 16.03 4.56 15.71 5.09 15.16V15.9H6.27V7.97H5.08V12.86C5.08 14.12 4.23 14.97 3.14 14.97C2.03 14.97 1.19 14.14 1.19 12.86V7.97H0M7.44 7.97V15.9H8.57V15.17A2.88 2.88 0 0 0 10.63 16.03A3 3 0 0 0 13.66 13A3 3 0 0 0 10.63 10A2.86 2.86 0 0 0 8.58 10.86V7.97H7.44M17.31 10C15.62 10 14.34 11.38 14.34 13C14.34 14.73 15.68 16 17.41 16C18.47 16 19.33 15.56 19.9 14.79L19.08 14.17C18.65 14.75 18.08 15 17.41 15C16.44 15 15.66 14.32 15.5 13.38H20.2V13C20.2 11.29 18.97 10 17.31 10M23.6 10.08C22.97 10.08 22.5 10.37 22.22 10.83V10.12H21.09V15.9H22.23V12.61C22.23 11.72 22.78 11.14 23.53 11.14H24V10.07H23.6M17.29 11C18.14 11 18.85 11.59 19.04 12.47H15.5C15.73 11.59 16.44 11 17.29 11M10.55 11C11.64 11 12.53 11.9 12.53 13C12.53 14.13 11.64 15 10.55 15A2 2 0 0 1 8.56 13A2 2 0 0 1 10.55 11Z"
            ></path>
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
