<script setup lang="ts">
import { ref } from "vue";
import { useQRCode } from "@vueuse/integrations/useQRCode";

const text = ref();
const qrcode = useQRCode(text, {
  errorCorrectionLevel: "H",
  margin: 3,
});
</script>

<template>
  <div class="grid grid-flow-row auto-rows-max justify-center space-y-20">
    <p class="mt-20 text-9xl font-sans font-bold uppercase justify-center">
      GEnerate QRCode
    </p>
    <form class="relative mt-4 w-full"></form>
    <label for="search-input" class="text-gray-500">
      <input
        id="search-input"
        v-model="text"
        type="search"
        class="home-search block w-full rounded-full border-0 border-gray-200 bg-white py-5 pl-14 pr-5 text-sm font-normal shadow-lg outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-200 md:pl-16"
        placeholder="type"
      />

      <span
        class="absolute left-5 top-1/2 -translate-y-1/2 transform text-2xl md:left-6"
      >
      </span>
      <div class="d-flex justify-content-center">
      <img
        v-if="text"
        class="mt-60 mb-2 ml-30 rounded border content-center height-100px"
        :src="qrcode"
        alt="QR Code"
      /></div>
    </label>
  </div>
</template>
