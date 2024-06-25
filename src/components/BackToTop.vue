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
  <div class="fixed bottom-0 right-0 p-4 z-50">
    <transition
      enter-from-class="translate-x-[150%] opacity-0"
      leave-to-class="translate-x-[150%] opacity-0 delay-500"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
      v-show="visible"
    >
      <button
        class="bg-blue-200 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        @click="backToTop"
      >
        <arrow-up class="w-6 h-6 text-white" alt="Voltar ao topo" aria-hidden />
      </button>
    </transition>
  </div>
</template>
