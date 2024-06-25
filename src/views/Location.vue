<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import pageBreak from "../components/PageBreak.vue";
  import mapsIcon from "../components/icons/maps.vue";
  import uberIcon from "../components/icons/uber.vue";
  import wazeIcon from "../components/icons/waze.vue";
  import instagramIcon from "../components/icons/instagram.vue";
  import celebracao from "../assets/celebracao.webp";
  import recepcao from "../assets/recepcao.webp";

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
    class="flex flex-col md:flex-row w-full gap-6 items-center md:justify-start mb-20 md:mb-0"
  >
    <div
      class="h-80 w-80 sm:h-96 sm:w-96 my-3 sm:my-0 p-1 rounded-[100%] bg-green-300 shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
    >
      <div
        class="h-full w-full rounded-[100%] bg-cover bg-center"
        :style="{ backgroundImage: `url(${celebracao})` }"
      ></div>
    </div>
    <div
      class="flex flex-col justify-center gap-3 text-green-300 min-w-[16.25rem]"
    >
      <h3 class="text-3xl uppercase font-bold tracking-widest md:-ml-4">
        Celebração
      </h3>
      <h4 class="text-2xl font-bold">Paróquia N. Sra. de Fátima</h4>
      <p class="text-lg">
        Praça Santos Dumont<br />
        St. Aeroporto, Goiânia<br />
        Goiânia - GO
      </p>
      <div class="flex flex-row gap-2 md:-ml-4">
        <a href="https://maps.app.goo.gl/zk71FkAk5SA8knia8" target="_blank">
          <maps-icon
            alt="Google Maps"
            class="h-10 w-10 p-0.5 border-green-300 border-2 rounded-full hover:bg-green-300 hover:text-white transition-colors"
          />
        </a>
        <a
          href="https://ul.waze.com/ul?place=ChIJZy2nF-TzXpMRIrx3Vh-tHrI&ll=-16.67165110%2C-49.27067770&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
        >
          <waze-icon
            alt="Waze"
            class="h-10 w-10 p-0.5 border-green-300 border-2 rounded-full hover:bg-green-300 hover:text-white transition-colors"
          />
        </a>
        <a
          :href="
            (isMobile ? 'uber://' : 'https://m.uber.com/ul/') +
            '?action=setPickup&client_id=lRh6QX2Em-hCkwAVqCN8RvwTs66NSbYE&pickup=my_location&dropoff[formatted_address]=Par%C3%B3quia%20Cat%C3%B3lica%20Nossa%20Senhora%20de%20F%C3%A1tima%20-%20Pra%C3%A7a%20Santos%20Dumont%20-%20Setor%20Aeroporto%2C%20Goi%C3%A2nia%20-%20State%20of%20Goi%C3%A1s%2C%20Brazil&dropoff[latitude]=-16.671651&dropoff[longitude]=-49.270678'
          "
          target="_blank"
        >
          <uber-icon
            alt="Uber"
            class="h-10 w-10 p-1 border-green-300 border-2 rounded-full hover:bg-green-300 hover:text-white transition-colors"
          />
        </a>
        <a href="https://www.instagram.com/pnsfatimago" target="_blank">
          <instagram-icon
            alt="Instagram"
            class="h-10 w-10 p-1 border-green-300 border-2 rounded-full hover:bg-green-300 hover:text-white transition-colors"
          />
        </a>
      </div>
    </div>
  </div>
  <div class="flex-grow"></div>
  <div class="flex flex-col md:flex-row-reverse gap-6 items-center w-full">
    <div
      class="h-80 w-80 sm:h-96 sm:w-96 sm:my-0 p-1 rounded-[100%] bg-red-300 shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
    >
      <div
        class="h-full w-full rounded-[100%] bg-cover bg-center"
        :style="{ backgroundImage: `url(${recepcao})` }"
      ></div>
    </div>
    <div
      class="flex flex-col justify-center gap-3 text-red-300 min-w-[16.25rem] md:text-right"
    >
      <h3 class="text-3xl uppercase font-bold tracking-widest md:-mr-4">
        Recepção
      </h3>
      <h4 class="text-2xl font-bold">Chácara Paris</h4>
      <p class="text-lg">
        Rua Dona Sinhá, 136<br />
        Residencial Santa Fé I<br />
        Goiânia - GO
      </p>
      <div class="flex flex-row gap-2 md:-mr-4 md:justify-end">
        <a href="https://maps.app.goo.gl/XSjTWyXxe6N5ae7j7" target="_blank">
          <maps-icon
            alt="Google Maps"
            class="h-10 w-10 p-0.5 border-red-300 border-2 rounded-full hover:bg-red-300 hover:text-white transition-colors"
          />
        </a>
        <a
          href="https://ul.waze.com/ul?place=ChIJY7Ofen1ZXpMROLEGgVKIe_0&ll=-16.74530550%2C-49.37590520&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
        >
          <waze-icon
            alt="Waze"
            class="h-10 w-10 p-0.5 border-red-300 border-2 rounded-full hover:bg-red-300 hover:text-white transition-colors"
          />
        </a>
        <a
          :href="
            (isMobile ? 'uber://' : 'https://m.uber.com/ul/') +
            '?action=setPickup&client_id=lRh6QX2Em-hCkwAVqCN8RvwTs66NSbYE&pickup=my_location&dropoff[formatted_address]=CH%C3%81CARA%20PARIS%20-%20Rua%20Dona%20Sinh%C3%A1%20-%20Residencial%20Santa%20F%C3%A9%20I%2C%20Goi%C3%A2nia%20-%20State%20of%20Goi%C3%A1s%2C%20Brazil&dropoff[latitude]=-16.745306&dropoff[longitude]=-49.375905'
          "
          target="_blank"
        >
          <uber-icon
            alt="Uber"
            class="h-10 w-10 p-1 border-red-300 border-2 rounded-full hover:bg-red-300 hover:text-white transition-colors"
          />
        </a>
        <a href="https://www.instagram.com/chacara_paris" target="_blank">
          <instagram-icon
            alt="Instagram"
            class="h-10 w-10 p-1 border-red-300 border-2 rounded-full hover:bg-red-300 hover:text-white transition-colors"
          />
        </a>
      </div>
    </div>
  </div>
</template>
