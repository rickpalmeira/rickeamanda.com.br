<script setup lang="ts">
import bannerImg from "../assets/banner.webp";
import flowerTopLeft from "../assets/flower-top-left.svg";
import flowerTopRight from "../assets/flower-top-right.svg";
</script>

<template>
  <header
    :style="`background-image: url(${bannerImg})`"
    class="h-[40dvh] bg-cover bg-bottom bg-no-repeat lg:-mb-[5dvh] lg:h-[45dvh] xl:-mb-[10dvh] xl:h-[50dvh] 2xl:-mb-[15dvh] 2xl:h-[55dvh]"
  >
    <div class="absolute flex max-h-96 w-dvw justify-between overflow-hidden">
      <img
        :src="flowerTopLeft"
        class="-ml-10 -mt-24 max-w-[50vw]"
        aria-hidden
      />
      <img
        :src="flowerTopRight"
        class="-mr-5 -mt-24 max-w-[50vw] md:-mr-10 lg:-mr-32 xl:-mr-40 2xl:-mr-80"
        aria-hidden
      />
    </div>
  </header>
</template>
