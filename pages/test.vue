<template>
    <div>
    <AVLine
      :line-width="2"
      line-color="white"
      src="https://cdn.discordapp.com/attachments/919267550339158056/1179702423149883442/sample.mp3?ex=657abe7f&is=6568497f&hm=49e293e7af17b1a774e78e6a2a02827257f76d762089941efe7eea7f7ff43f54&"
    ></AVLine>
    <!-- https://cdn.discordapp.com/attachments/919267550339158056/1179702423149883442/sample.mp3?ex=657abe7f&is=6568497f&hm=49e293e7af17b1a774e78e6a2a02827257f76d762089941efe7eea7f7ff43f54& -->
    <!-- <AVBars
    caps-color="#FFF"
      :bar-color="['#f00', '#ff0', '#0f0']"
      canv-fill-color="#000"
      :caps-height="2"
    src="https://cdn.freesound.org/previews/712/712912_5828667-lq.mp3">

    </AVBars> -->
    <AVWaveform src="https://cdn.discordapp.com/attachments/919267550339158056/1179702423149883442/sample.mp3?ex=657abe7f&is=6568497f&hm=49e293e7af17b1a774e78e6a2a02827257f76d762089941efe7eea7f7ff43f54&" />
    <!-- <AVWaveform src="https://cdn.freesound.org/previews/712/712912_5828667-lq.mp3" /> -->
</div>
</template>

<script setup lang="ts">
import { AVWaveform } from 'vue-audio-visual'
import { AVLine } from 'vue-audio-visual';
import { AVBars } from 'vue-audio-visual';



</script>