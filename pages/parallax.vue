<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import type { CSSProperties } from "vue";
import { useMediaQuery, useParallax } from "@vueuse/core";
const target = ref(null);
const isMobile = useMediaQuery("(max-width: 700px)");
const parallax = reactive(useParallax(target));
const targetStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  minHeight: "500px",
  transition: ".3s ease-out all",
};
const cardWindowStyle: CSSProperties = {
  overflow: "hidden",
  fontSize: "6rem",
  position: "absolute",
  top: "calc(50% - 1em)",
  left: "calc(50% - 1em)",
  height: "2em",
  width: "2em",
  margin: "auto",
};
const layerBase: CSSProperties = {
  position: "relative",
  height: "100%",
  width: "100%",
  transition: ".3s ease-out all",
};
const containerStyle: CSSProperties = {
  margin: "3em auto",
  perspective: "300px",
};
const picStyle = computed(() => ({
  background: "#fff",
  height: "20rem",
  width: "15rem",
  overflow: "hidden",
  transition: ".3s ease-out all",
  boxShadow: "0 0 20px 0 rgba(255, 255, 255, 0.25)",
  transform: `rotateZ(${parallax.roll * 20}deg) rotateY(${
    parallax.tilt * 20
  }deg)`,
}));

const cardStyle = computed(() => ({
  background: "#fff",
  height: "40rem",
  width: "35rem",
  overflow: "hidden",
  transition: ".3s ease-out all",
  boxShadow: "0 0 20px 0 rgba(255, 255, 255, 0.25)",
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
    parallax.tilt * 20
  }deg)`,
}));
</script>

<template>
  <div>
    <div ref="target" :style="targetStyle">
      <div :style="containerStyle">
        <div :style="cardStyle">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9304c3155792441.635af54c609cf.jpg"
            alt=""
          />
          <div ref="target" :style="targetStyle"></div>
        </div>
      </div>
    </div>
    <div ref="target" :style="targetStyle">
      <div :style="containerStyle">
        <div :style="cardStyle">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/68ba34155792441.635af54c5fe60.jpg"
            alt=""
          />
          <div ref="target" :style="targetStyle"></div>
        </div>
      </div>
    </div>
    <div ref="target" :style="targetStyle">
      <div :style="containerStyle">
        <div :style="cardStyle">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/488b73155792441.635af54c5f276.jpg"
            alt=""
          />
          <div ref="target" :style="targetStyle"></div>
        </div>
      </div>
    </div>
  </div>
  
</template>
