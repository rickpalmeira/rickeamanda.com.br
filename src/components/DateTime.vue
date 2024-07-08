<script setup lang="ts">
import dateFlower from "../assets/flower-date.svg";
</script>

<template>
  <a
    href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20240817T200000Z%2F20240818T040000Z&text=Casamento%20Amanda%20e%20Rick&location=Par%C3%B3quia%20Cat%C3%B3lica%20Nossa%20Senhora%20de%20F%C3%A1tima%2C%20Pra%C3%A7a%20Santos%20Dumont%20-%20St.%20Aeroporto%2C%20Goi%C3%A2nia%20-%20GO%2C%2074070-050%2C%20Brasil&details="
    target="_blank"
  >
    <h2
      class="flex items-center text-lg font-semibold uppercase tracking-widest"
    >
      <span class="border-y-2 border-red-100 px-2">
        <span class="text-3xl font-normal">17</span>
        <span class="text-3xl font-normal sm:hidden">/08/</span>
        <span class="hidden sm:inline"> de Agosto de </span>
        <span class="text-3xl font-normal">2024</span>
      </span>
      <span class="z-10 -ml-3 -mr-4 h-auto w-14 pt-3" aria-hidden>
        <img :src="dateFlower" />
      </span>
      <span class="border-y-2 border-red-100 px-2">
        <span class="text-3xl font-normal">17</span>
        <span class="text-3xl font-normal sm:hidden">:00</span>
        <span class="hidden sm:inline"> Horas</span>
      </span>
    </h2>
  </a>
</template>
