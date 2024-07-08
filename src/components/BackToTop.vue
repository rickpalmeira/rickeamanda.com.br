<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import arrowUp from "../components/icons/arrow-up.vue";
import router from "../router";

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollOver = setInterval(() => {
    if (scrollY.value === 0) {
      clearInterval(scrollOver);
      router.replace({ path: "/" });
    }
  }, 50);
};

const scrollY = ref(window.scrollY);
const visible = ref(scrollY.value >= window.innerHeight);

const updateScroll = () => {
  scrollY.value = window.scrollY;
  visible.value = scrollY.value >= window.innerHeight / 2;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>

<template>
  <div class="fixed bottom-0 right-0 z-50 p-4">
    <transition
      enter-from-class="translate-x-[150%] opacity-0"
      leave-to-class="translate-x-[150%] opacity-0 delay-500"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
      v-show="visible"
    >
      <button
        class="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white hover:bg-cyan-300 hover:text-cyan-700 md:h-12 md:w-12"
        @click="backToTop"
      >
        <arrow-up class="h-6 w-6" alt="Voltar ao topo" aria-hidden />
      </button>
    </transition>
  </div>
</template>
