<script setup lang="ts">
const { data } = await useAsyncData('hello', () => queryContent('/').findOne())
</script>

<template>
  <header
    class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover"
    style="
      background-image: url(https://cdn.dribbble.com/users/4643902/screenshots/20424997/media/b42d6b5f1dc2092e75f189f913ebdd3a.jpg?compress=1&resize=1200x900&vertical=top);
    "
  >
    <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
      <NuxtLink to="/qr">
        <button
          :type="type"
          class="px-10 py-2 mt-20 font-semibold text-white bg-blue-500 rounded-md hover:opacity-95 focus:outline-none"
        >
          QR
        </button>
      </NuxtLink>
    </div>
  </header>
  <div class="max-w-lg m-auto">
    <p class="mb-4">Install npm i @vueuse/integrations</p>
    <p class="mb-4">Install npm i qrcode</p>
    <p class="mb-12 font-bold">Usage</p>
    <p class=" text-lg mb-12 space-between font-semibold">https://github.com/vueuse/vueuse/blob/main/packages/integrations/useQRCode/index.md</p>
  </div>
  <section
    class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover"
    style="
      background-image: url(https://cdn.dribbble.com/users/6996552/screenshots/20425550/media/4bfe7e16cabc0279304c1efff0eccea3.jpg);
    "
  >
    <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
      <NuxtLink to="/parallax">
        <button
          :type="type"
          class="px-10 py-2 mt-20 font-semibold text-white bg-blue-500 rounded-md hover:opacity-95 focus:outline-none"
        >
          PX
        </button>
      </NuxtLink>
    </div>
  </section>
  <div class="max-w-lg m-auto">
    <p class="mb-4">
     Dint like 
    </p>
    <p class="mb-12 font-bold">Usage</p>
    <p class="mb-4">
        https://github.com/vueuse/vueuse/blob/main/packages/core/useParallax/index.md
    </p>
  </div>
</template>
