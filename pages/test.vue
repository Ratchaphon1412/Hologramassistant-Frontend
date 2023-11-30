<template>
    <div class="min-h-screen flex flex-col justify-center items-center">
        <div class="flex flex-col mb-8">
            <audio ref="player" class="hidden" :src="mySource" controls autoplay crossorigin="anonymous" />
            <canvas ref="canvas" />
        </div>

        <div class="px-[200px] text-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perspiciatis ducimus aspernatur error eveniet quae architecto! Natus cum omnis eveniet neque quas quisquam dolor provident reiciendis distinctio nisi voluptas deleniti temporibus, iusto error magnam iste eum asperiores saepe eaque officiis!
        </div>

        <button class="mt-8" @click="autoPlay">play</button>
    </div>

    <!-- https://firebasestorage.googleapis.com/v0/b/test-3dd53.appspot.com/o/sample.mp3?alt=media&token=9bbf6889-c68e-4a8c-999f-2b59f8dd2f1b -->
    <!-- https://cdn.discordapp.com/attachments/919267550339158056/1179702423149883442/sample.mp3?ex=657abe7f&is=6568497f&hm=49e293e7af17b1a774e78e6a2a02827257f76d762089941efe7eea7f7ff43f54& -->
    <!-- <AVBars
    caps-color="#FFF"
      :bar-color="['#f00', '#ff0', '#0f0']"
      canv-fill-color="#000"
      :caps-height="2"
    src="https://cdn.freesound.org/previews/712/712912_5828667-lq.mp3">

    </AVBars> -->
    <!-- <AVWaveform src="https://cdn.discordapp.com/attachments/919267550339158056/1179702423149883442/sample.mp3?ex=657abe7f&is=6568497f&hm=49e293e7af17b1a774e78e6a2a02827257f76d762089941efe7eea7f7ff43f54&" /> -->
    <!-- <AVWaveform src="https://cdn.freesound.org/previews/712/712912_5828667-lq.mp3" /> -->
</template>

<script setup lang="ts">
definePageMeta({layout: false})
import { AVLine } from 'vue-audio-visual';
import { useAVLine } from 'vue-audio-visual';



const player = ref(null)
const canvas = ref(null)
const mySource = ref("/sample.mp3")




//   :audio-controls="false"
//   :line-width="1"
//   :line-color="['#FFF', 'rgb(0,255,127)', '#00f']"
//   src="/sample.mp3"
//   :fft-size="256"
useAVLine(player, canvas, { src: mySource, canvHeight: 80, canvWidth: 500, lineColor: 'white'})


function autoPlay() {
    player.value.play()
}


</script>