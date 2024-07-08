<script setup lang="ts">
import { onMounted, ref } from "vue";
import PageBreak from "../components/PageBreak.vue";
import MapsIcon from "../components/icons/maps.vue";
import UberIcon from "../components/icons/uber.vue";
import WazeIcon from "../components/icons/waze.vue";
import InstagramIcon from "../components/icons/instagram.vue";
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
    class="mb-8 border-b-2 border-rose-300 px-2 text-center text-2xl uppercase tracking-widest"
  >
    Local
  </h2>
  <div
    class="mb-20 flex w-full flex-col items-center gap-6 md:mb-0 md:flex-row md:justify-start"
  >
    <div
      class="my-3 h-80 w-80 rounded-[100%] bg-emerald-700 p-1 shadow-lg transition-all hover:scale-105 hover:shadow-2xl sm:my-0 sm:h-96 sm:w-96"
    >
      <div
        class="h-full w-full rounded-[100%] bg-cover bg-center"
        :style="{ backgroundImage: `url(${celebracao})` }"
      ></div>
    </div>
    <div
      class="flex min-w-[16.25rem] flex-col justify-center gap-3 text-emerald-700"
    >
      <h3 class="text-3xl font-bold uppercase tracking-widest md:-ml-4">
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
            class="h-10 w-10 rounded-full border-2 border-emerald-700 p-0.5 transition-colors hover:bg-emerald-700 hover:text-white"
          />
        </a>
        <a
          href="https://ul.waze.com/ul?place=ChIJZy2nF-TzXpMRIrx3Vh-tHrI&ll=-16.67165110%2C-49.27067770&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
        >
          <waze-icon
            alt="Waze"
            class="h-10 w-10 rounded-full border-2 border-emerald-700 p-0.5 transition-colors hover:bg-emerald-700 hover:text-white"
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
            class="h-10 w-10 rounded-full border-2 border-emerald-700 p-1 transition-colors hover:bg-emerald-700 hover:text-white"
          />
        </a>
        <a href="https://www.instagram.com/pnsfatimago" target="_blank">
          <instagram-icon
            alt="Instagram"
            class="h-10 w-10 rounded-full border-2 border-emerald-700 p-1 transition-colors hover:bg-emerald-700 hover:text-white"
          />
        </a>
      </div>
    </div>
  </div>
  <div class="flex-grow"></div>
  <div class="flex w-full flex-col items-center gap-6 md:flex-row-reverse">
    <div
      class="h-80 w-80 rounded-[100%] bg-rose-700 p-1 shadow-lg transition-all hover:scale-105 hover:shadow-2xl sm:my-0 sm:h-96 sm:w-96"
    >
      <div
        class="h-full w-full rounded-[100%] bg-cover bg-center"
        :style="{ backgroundImage: `url(${recepcao})` }"
      ></div>
    </div>
    <div
      class="flex min-w-[16.25rem] flex-col justify-center gap-3 text-rose-700 md:text-right"
    >
      <h3 class="text-3xl font-bold uppercase tracking-widest md:-mr-4">
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
            class="h-10 w-10 rounded-full border-2 border-rose-700 p-0.5 transition-colors hover:bg-rose-700 hover:text-white"
          />
        </a>
        <a
          href="https://ul.waze.com/ul?place=ChIJY7Ofen1ZXpMROLEGgVKIe_0&ll=-16.74530550%2C-49.37590520&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
        >
          <waze-icon
            alt="Waze"
            class="h-10 w-10 rounded-full border-2 border-rose-700 p-0.5 transition-colors hover:bg-rose-700 hover:text-white"
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
            class="h-10 w-10 rounded-full border-2 border-rose-700 p-1 transition-colors hover:bg-rose-700 hover:text-white"
          />
        </a>
        <a href="https://www.instagram.com/chacara_paris" target="_blank">
          <instagram-icon
            alt="Instagram"
            class="h-10 w-10 rounded-full border-2 border-rose-700 p-1 transition-colors hover:bg-rose-700 hover:text-white"
          />
        </a>
      </div>
    </div>
  </div>
</template>
