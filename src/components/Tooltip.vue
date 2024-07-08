<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import {
  arrow,
  autoPlacement,
  computePosition,
  flip,
  inline,
  offset,
  shift,
} from "@floating-ui/vue";
import { ComputePositionReturn } from "@floating-ui/core";

defineProps<{ image?: string; text?: string }>();

const tool = ref();
const tip = ref();
const tipArrow = ref();
let tipPosition = {} as ComputePositionReturn;

const setTooltip = async () => {
  tipPosition = await computePosition(tool.value, tip.value, {
    middleware: [
      offset(10),
      autoPlacement(),
      inline(),
      flip(),
      shift(),
      arrow({ element: tipArrow.value }),
    ],
  });

  const arrowSide: string =
    {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom",
    }[tipPosition.placement.split("-")[0]] || "";

  tipArrow.value.style = {};

  Object.assign(tip.value.style, {
    left: `${tipPosition.x}px`,
    top: `${tipPosition.y}px`,
  });

  Object.assign(tipArrow.value.style, {
    left: `${tipPosition.middlewareData.arrow?.x}px`,
    top: `${tipPosition.middlewareData.arrow?.y}px`,
    bottom: "",
    right: "",
    [arrowSide]: "-0.25rem",
  });
};

onMounted(async () => {
  window.addEventListener("scroll", setTooltip);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", setTooltip);
});
</script>

<template>
  <a
    class="inline-block cursor-help font-bold underline *:opacity-0 *:hover:opacity-95 *:focus:opacity-95"
    ref="tool"
    tabindex="0"
  >
    <slot></slot>
    <div
      ref="tip"
      class="pointer-events-none absolute z-10 rounded-lg bg-cyan-300 p-1.5 text-white shadow-lg transition-opacity delay-300 ease-in-out"
    >
      <img v-if="!!image" :src="'/' + image" class="w-[20vw] rounded-lg" />
      <p v-if="!!text" class="text-sm">{{ text }}</p>
      <div class="absolute h-2 w-2 rotate-45 bg-cyan-300" ref="tipArrow"></div>
    </div>
  </a>
</template>
