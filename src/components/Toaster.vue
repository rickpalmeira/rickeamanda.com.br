<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const hideToast = ref(false);
onMounted(() => {
  setTimeout(() => {
    hideToast.value = true;
  }, 7000);
});
</script>

<template>
  <transition
    enter-from-class="translate-x-[150%] opacity-0"
    leave-to-class="translate-x-[150%] opacity-0"
    enter-active-class="transition duration-500"
    leave-active-class="transition duration-500"
    v-show="useRoute().query.status && !hideToast"
  >
    <div
      class="fixed right-10 top-10 z-50 rounded-lg bg-blue-300 p-8 text-lg tracking-wide text-white shadow-lg"
    >
      <div>
        <p v-if="useRoute().query.status === 'approved'">
          Seu pagamento já foi aprovado!
        </p>
        <p v-else>Seu pagamento já está sendo processado!</p>
        <p>Muito obrigado pelo presente <span class="text-xl">♥♥</span></p>
      </div>
    </div>
  </transition>
</template>
