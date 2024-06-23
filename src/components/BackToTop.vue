<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from "vue";
  import router from "../router";

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      router.replace({ path: "/" });
    }, 1000);
  };

  const scrollY = ref(window.scrollY);
  const visible = ref(scrollY.value >= window.innerHeight);

  const updateScroll = () => {
    scrollY.value = window.scrollY;
    visible.value = scrollY.value >= window.innerHeight;
  };

  onMounted(() => {
    window.addEventListener("scroll", updateScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", updateScroll);
  });
</script>

<template>
  <div class="fixed bottom-0 right-0 p-4">
    <transition
      enter-from-class="translate-x-[150%] opacity-0"
      leave-to-class="translate-x-[150%] opacity-0 delay-500"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
      v-show="visible"
    >
      <button
        class="bg-blue-100 text-white rounded-full w-10 h-10 flex items-center justify-center"
        @click="backToTop"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </button>
    </transition>
  </div>
</template>
