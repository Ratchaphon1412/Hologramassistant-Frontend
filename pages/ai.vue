<template>
  <div class="h-screen w-screen flex justify-center items-center bg-black">
    <!-- <div class="flex w-3/4 h-full flex-col justify-center items-center">
      <div class="flex justify-center">
        <img src="@/assets/images/giphy.gif" class="object-fill h-28 w-28" />
      </div>
      <div class="flex flex-col p-24 w-5/6">
        <audio
          ref="player"
          class="hidden"
          :src="mySource"
          controls
          autoplay
          crossorigin="anonymous"
        />
        <canvas ref="canvas" />
      </div>

      <div class="text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
        perspiciatis ducimus aspernatur error eveniet quae architecto! Natus cum
        omnis eveniet neque quas quisquam dolor provident reiciendis distinctio
        nisi voluptas deleniti temporibus, iusto error magnam iste eum
        asperiores saepe eaque officiis!
      </div>
      <button class="mt-8" @click="startListening">start</button>
    </div> -->

    <Map v-show="visiable" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });
import { AVLine } from "vue-audio-visual";
import { useAVLine } from "vue-audio-visual";

const visiable = ref(true);
const player = ref(null);
const canvas = ref(null);
const mySource = ref("/sample.mp3");

// const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const sr = new Recognition();

// onMounted(() => {
//   sr.continuous = true;
//   sr.interimResults = true;
//   sr.lang = "th-TH";

//   sr.onstart = () => {
//     console.log("start");
//   };

//   sr.start;
// });

useAVLine(player, canvas, {
  src: mySource,
  canvHeight: 80,
  canvWidth: 500,
  lineColor: "white",
});

function startListening() {
  // player.value.play();
}
</script>
