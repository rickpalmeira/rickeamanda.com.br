<script setup lang="ts">
  import Buttons from "../components/Buttons.vue";
  import Countdown from "../components/Countdown.vue";
  import DateTime from "../components/DateTime.vue";
</script>

<template>
  <date-time />
  <countdown dateString="2024-08-17T17:00:00" />
  <buttons />
</template>
