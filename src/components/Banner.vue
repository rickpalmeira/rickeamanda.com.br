<script setup lang="ts">
  import bannerImg from "../assets/banner.webp";
  import flowerTopLeft from "../assets/flower-top-left.svg";
  import flowerTopRight from "../assets/flower-top-right.svg";
</script>

<template>
  <header
    :style="`background-image: url(${bannerImg})`"
    class="bg-no-repeat bg-bottom bg-cover h-[40dvh]"
  >
    <div class="absolute max-h-96 overflow-hidden flex justify-between w-dvw">
      <img
        :src="flowerTopLeft"
        class="max-w-[50vw] -mt-40 -ml-10"
        aria-hidden
      />
      <img
        :src="flowerTopRight"
        class="max-w-[50vw] -mt-24 -mr-5"
        aria-hidden
      />
    </div>
  </header>
</template>
