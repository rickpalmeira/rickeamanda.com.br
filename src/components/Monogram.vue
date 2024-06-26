<script setup lang="ts">
  import monogram from "../assets/monogram-02.svg";
</script>

<template>
  <router-link to="/" class="hover:*:drop-shadow-lg">
    <img
      :src="monogram"
      class="h-48 -mt-28 z-10 transition-all"
      alt="Amanda e Rick"
      aria-hidden
    />
  </router-link>
</template>
