<script setup lang="ts">
import flower from "../assets/flower-5.svg";
import rickEAmanda from "../assets/rick-e-amanda.webp";
import PageBreak from "../components/PageBreak.vue";
import Tooltip from "../components/Tooltip.vue";
</script>

<template>
  <page-break />
  <h2
    class="border-b-2 border-red-100 px-2 text-center text-2xl uppercase tracking-widest"
  >
    O casal
  </h2>
  <div
    class="mt-10 aspect-[0.84256] w-4/5 rounded-[100%] bg-blue-300 p-1 shadow-lg sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3"
  >
    <div
      class="flex h-full w-full items-end justify-end rounded-[100%] bg-cover bg-center"
      :style="{ backgroundImage: `url(${rickEAmanda})` }"
    >
      <img
        :src="flower"
        class="mb-6 mr-8 w-1/2 origin-top rotate-[40deg] scale-125 drop-shadow-lg"
        aria-hidden
      />
      <img
        :src="flower"
        class="-mr-8 mb-6 ml-8 w-1/2 origin-top rotate-[140deg] scale-125 -scale-y-125 drop-shadow-lg"
        aria-hidden
      />
    </div>
  </div>
  <div class="min-h-14 flex-grow"></div>
  <div class="max-w-[800px] pb-20 *:mb-4 *:text-justify last:*:mb-0">
    <p>
      Nossa história começou em setembro de 2021, em meio a uma pandemia.
      Durante um mês, apenas conversamos, ansiosos pelo momento em que
      finalmente poderíamos nos encontrar. Éramos tão diferentes, com planos,
      sonhos e gostos completamente opostos, mas aos poucos fomos nos
      apaixonando. Descobrimos que, na verdade, queríamos a mesma coisa: ver o
      outro feliz.
    </p>
    <p>
      Começamos a namorar em dezembro de 2021 e, desde então, temos lutado
      juntos para realizar nossos sonhos e construir nossa família. Em outubro
      de 2023, demos mais um passo importante e ficamos noivos.
    </p>
    <p>
      Gostamos de música, viajar, ficar em casa vendo filmes ou jogando
      videogame. Adoramos ir a shows e realizar muitos sonhos juntos. Temos dois
      cachorros, <tooltip image="jade.webp">Jade</tooltip> e
      <tooltip image="zero.webp">Zero</tooltip>, que trazem ainda mais alegria
      aos nossos dias. Amamos receber nossos amigos e família em casa, mas
      também gostamos muito de sair e explorar novos lugares.
    </p>
    <p>
      Nosso casamento é a celebração de um sonho sonhado juntos, planejado com
      carinho e atenção a cada detalhe. Tudo aqui foi pensado para contar a
      nossa história e refletir o que amamos. A identidade visual foi toda
      inspirada no quadro
      <tooltip image="painting.webp">Amendoeiras em Flor</tooltip> de Van Gogh,
      nossa obra de arte preferida.
    </p>
    <p>
      Estamos muito felizes e empolgados por termos encontrado o amor das nossas
      vidas, e vai ser maravilhoso poder compartilhar esse momento especial com
      vocês.
    </p>
    <p>Estamos ansiosos para celebrar nosso amor com todos vocês!</p>
  </div>
</template>
