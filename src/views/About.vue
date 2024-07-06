<script setup lang="ts">
  import flower from "../assets/flower-5.svg";
  import rickEAmanda from "../assets/rick-e-amanda.webp";
  import PageBreak from "../components/PageBreak.vue";
</script>

<template>
  <page-break />
  <h2
    class="uppercase text-2xl tracking-widest text-center border-b-2 px-2 border-red-100"
  >
    O casal
  </h2>
  <div
    class="w-4/5 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 aspect-[0.84256] p-1 rounded-[100%] bg-blue-300 mt-10 shadow-lg"
  >
    <div
      class="h-full w-full rounded-[100%] bg-cover bg-center flex justify-end items-end"
      :style="{ backgroundImage: `url(${rickEAmanda})` }"
    >
      <img
        :src="flower"
        class="w-1/2 origin-top mr-8 mb-6 scale-125 rotate-[40deg] drop-shadow-lg"
        aria-hidden
      />
      <img
        :src="flower"
        class="w-1/2 origin-top -mr-8 ml-8 mb-6 -scale-y-125 scale-125 rotate-[140deg] drop-shadow-lg"
        aria-hidden
      />
    </div>
  </div>
  <div class="flex-grow min-h-14"></div>
  <div class="max-w-[800px] *:mb-4 *:text-justify">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, harum
      minus. Pariatur quibusdam veniam, eveniet esse eum quae modi asperiores
      delectus sint quaerat blanditiis tenetur, itaque amet ipsa? Dolores, id.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque nihil hic
      earum possimus repellendus, rem voluptas ratione nobis commodi dolorem
      quas sapiente laborum odit nemo eaque delectus non, veniam minus!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, neque
      tenetur. Dolore reiciendis quia nemo rem voluptas minima ad repellendus
      quibusdam non enim ipsam laudantium autem at, saepe facere itaque.
    </p>
  </div>
</template>
