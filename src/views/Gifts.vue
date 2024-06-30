<script setup lang="ts">
  import PageBreak from "../components/PageBreak.vue";
  import GiftCard from "../components/GiftCard.vue";
  import GiftCardPlaceholder from "../components/GiftCardPlaceholder.vue";
  import { onMounted, ref } from "vue";

  interface Gift {
    id?: number;
    name: string;
    price: number;
    thumbnail?: string;
    url: string;
  }

  const giftList = ref<Gift[]>([]);
  const isLoading = ref(true);

  const getGiftList = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/gifts");
      const data = await response.json();
      giftList.value = data.sort((a: Gift, b: Gift) => a.price - b.price);
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
  };

  onMounted(() => {
    getGiftList();
  });
</script>

<template>
  <page-break />
  <h2
    class="uppercase text-2xl tracking-widest text-center border-b-2 px-2 border-red-100"
  >
    Lista de Presentes
  </h2>

  <p class="text-justify text-blue-300 my-14">
    A presença de vocês é o nosso maior presente. Mas, se desejarem nos
    presentear de outra forma, selecionamos algumas opções que podem ser
    encontradas na lista abaixo:
  </p>
  <section
    class="flex flex-wrap gap-x-5 gap-y-14 xl:gap-y-12 2xl:gap-y-10 justify-evenly"
  >
    <gift-card-placeholder v-if="isLoading" v-for="_ in 10" />
    <gift-card
      v-else
      v-for="(item, index) in giftList"
      :key="index"
      v-bind="item"
    />
  </section>
</template>
