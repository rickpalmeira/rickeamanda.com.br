<script setup lang="ts">
import monogram from "../assets/monogram-02.svg";
</script>

<template>
  <router-link to="/" class="hover:*:drop-shadow-lg">
    <img
      :src="monogram"
      class="z-10 -mt-28 h-48 transition-all"
      alt="Amanda e Rick"
      aria-hidden
    />
  </router-link>
</template>
