<script setup lang="ts">
  import flower from "../assets/flower-5.svg";
  import rickEAmanda from "../assets/rick-e-amanda.webp";
  import PageBreak from "../components/PageBreak.vue";
  import Tooltip from "../components/Tooltip.vue";
</script>

<template>
  <page-break />
  <h2
    class="uppercase text-2xl tracking-widest text-center border-b-2 px-2 border-red-100"
  >
    O casal
  </h2>
  <div
    class="w-4/5 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3 aspect-[0.84256] p-1 rounded-[100%] bg-blue-300 mt-10 shadow-lg"
  >
    <div
      class="h-full w-full rounded-[100%] bg-cover bg-center flex justify-end items-end"
      :style="{ backgroundImage: `url(${rickEAmanda})` }"
    >
      <img
        :src="flower"
        class="w-1/2 origin-top mr-8 mb-6 scale-125 rotate-[40deg] drop-shadow-lg"
        aria-hidden
      />
      <img
        :src="flower"
        class="w-1/2 origin-top -mr-8 ml-8 mb-6 -scale-y-125 scale-125 rotate-[140deg] drop-shadow-lg"
        aria-hidden
      />
    </div>
  </div>
  <div class="flex-grow min-h-14"></div>
  <div class="max-w-[800px] *:mb-4 last:*:mb-0 pb-20 *:text-justify">
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
