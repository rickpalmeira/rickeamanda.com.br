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
    class="border-b-2 border-red-100 px-2 text-center text-2xl uppercase tracking-widest"
  >
    Lista de Presentes
  </h2>

  <p class="my-14 text-justify text-blue-300">
    A presença de vocês é o nosso maior presente. Mas, se desejarem nos
    presentear de outra forma, selecionamos algumas opções que podem ser
    encontradas na lista abaixo:
  </p>
  <section
    class="flex flex-wrap justify-evenly gap-x-5 gap-y-14 xl:gap-y-12 2xl:gap-y-10"
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
