<template>
  <button @click="startListening">Start</button>
  <button @click="stopListening">Stop</button>
  <p>{{ transcript }}</p>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

definePageMeta({ layout: false });

const transcript = ref("");
const isListening = ref(false);

let recognition: SpeechRecognition | null = null;

onMounted(() => {
  window.SpeechRecognition =
    window.SpeechRecognition || (window as any).webkitSpeechRecognition;
  recognition = new window.SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = "th-TH";

  recognition.addEventListener("result", (e) => {
    transcript.value = Array.from(e.results)
      .map((result: any) => result[0])
      .map((result: any) => result.transcript)
      .join("");
  });

  recognition.addEventListener("end", () => {
    if (isListening.value) recognition?.start();
  });
});

const startListening = () => {
  isListening.value = true;
  recognition?.start();
};

const stopListening = () => {
  isListening.value = false;
  recognition?.stop();
};
</script>

<style></style>
