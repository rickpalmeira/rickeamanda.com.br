<template>
  <div
    class="flex w-1/2 min-w-60 animate-pulse flex-col rounded-lg bg-white sm:w-60 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
  >
    <div class="h-48 w-full rounded-t-lg bg-neutral-300"></div>
    <div class="flex min-h-48 flex-col justify-between gap-5 p-2 text-center">
      <div class="mt-2 grid grid-cols-6 gap-2 px-6">
        <div class="col-span-2 h-2 rounded bg-red-300"></div>
        <div class="col-span-1 h-2 rounded bg-red-300"></div>
        <div class="col-span-2 h-2 rounded bg-red-300"></div>
        <div class="col-span-1 h-2 rounded bg-red-300"></div>
        <div class="col-span-1 col-start-2 h-2 rounded bg-red-300"></div>
        <div class="col-span-3 h-2 rounded bg-red-300"></div>
      </div>
      <div class="mx-auto grid w-1/3 grid-cols-3 gap-2">
        <div class="col-span-1 h-4 rounded bg-blue-300"></div>
        <div class="col-span-2 h-4 rounded bg-blue-300"></div>
      </div>
      <div class="mx-auto mb-2 h-6 w-2/3 rounded-full bg-green-200"></div>
    </div>
  </div>
</template>
