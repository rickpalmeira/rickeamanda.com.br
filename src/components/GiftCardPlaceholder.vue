<template>
  <div
    class="flex flex-col min-w-60 w-1/2 sm:w-60 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 rounded-lg bg-white animate-pulse"
  >
    <div class="h-48 w-full rounded-t-lg bg-neutral-300"></div>
    <div class="flex flex-col text-center justify-between min-h-48 gap-5 p-2">
      <div class="grid grid-cols-6 gap-2 px-6 mt-2">
        <div class="h-2 bg-red-300 rounded col-span-2"></div>
        <div class="h-2 bg-red-300 rounded col-span-1"></div>
        <div class="h-2 bg-red-300 rounded col-span-2"></div>
        <div class="h-2 bg-red-300 rounded col-span-1"></div>
        <div class="h-2 bg-red-300 rounded col-span-1 col-start-2"></div>
        <div class="h-2 bg-red-300 rounded col-span-3"></div>
      </div>
      <div class="grid grid-cols-3 gap-2 w-1/3 mx-auto">
        <div class="h-4 bg-blue-300 rounded col-span-1"></div>
        <div class="h-4 bg-blue-300 rounded col-span-2"></div>
      </div>
      <div class="h-6 bg-green-200 rounded-full w-2/3 mx-auto mb-2"></div>
    </div>
  </div>
</template>
