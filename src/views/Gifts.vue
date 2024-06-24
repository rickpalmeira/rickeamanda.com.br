<script setup lang="ts">
  import pageBreak from "../components/PageBreak.vue";
  import GiftCard from "../components/GiftCard.vue";

  const giftList: {
    name?: string;
    price?: number;
    thumbnail?: string;
    url?: string;
  }[] = [
    {
      name: "Presente 1",
      price: 30000,
      thumbnail: "https://via.placeholder.com/300",
      url: "https://www.americanas.com.br/produto/1234567890",
    },
    {
      name: "Presente 2",
      price: 20000,
      thumbnail: "https://via.placeholder.com/300",
      url: "https://www.americanas.com.br/produto/1234567890",
    },
    {
      name: "Presente 3",
      price: 1999,
      thumbnail: "https://via.placeholder.com/300",
      url: "https://www.americanas.com.br/produto/1234567890",
    },
    {
      name: "Presente 4",
      price: 800000,
      thumbnail: "https://via.placeholder.com/300",
      url: "https://www.americanas.com.br/produto/1234567890",
    },
  ];
</script>

<template>
  <page-break />
  <h2
    class="uppercase text-2xl tracking-widest text-center border-b-2 px-2 border-red-100"
  >
    Lista de Presentes
  </h2>

  <p class="text-justify text-blue-300 my-14">
    A presença de vocês é o nosso maior presente. Mas caso queiram nos
    presentear com algo mais, escolhemos algumas opções que podem ser
    encontradas na lista abaixo
  </p>
  <section
    class="flex flex-wrap gap-x-5 gap-y-14 xl:gap-y-12 2xl:gap-y-10 justify-evenly"
  >
    <gift-card v-for="(item, index) in giftList" :key="index" v-bind="item" />
  </section>
</template>
