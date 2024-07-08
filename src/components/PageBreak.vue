<script setup lang="ts">
import { ref, onMounted } from "vue";
import flower1 from "../assets/flower-1.svg";
import flower2 from "../assets/flower-2.svg";
import flower3 from "../assets/flower-3.svg";
import flower4 from "../assets/flower-4.svg";
import flower5 from "../assets/flower-5.svg";

const flower = ref<string>("");

onMounted(() => {
  const flowers = [flower1, flower2, flower3, flower4, flower5];
  flower.value = flowers[Math.floor(Math.random() * flowers.length)];
});
</script>

<template>
  <div class="my-6 flex flex-row items-center justify-center gap-8">
    <img :src="flower" class="w-1/5 -rotate-12" aria-hidden />
    <img :src="flower" class="w-1/5 rotate-[192deg] -scale-y-100" aria-hidden />
  </div>
</template>
