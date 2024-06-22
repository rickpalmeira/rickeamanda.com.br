<script setup lang="ts">
  import monogram from "../assets/monogram-02.svg";
</script>

<template>
  <router-link to="/">
    <img
      :src="monogram"
      class="h-48 -mt-24 z-10"
      alt="Amanda e Rick"
      aria-hidden
    />
  </router-link>
</template>
