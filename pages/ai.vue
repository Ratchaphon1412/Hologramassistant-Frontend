<template>
  <div class="h-screen flex justify-center items-center bg-black">
    <div class="flex w-3/4 h-full flex-col justify-center items-center">
      <div v-if="!visiable" class="flex justify-center">
        <img src="@/assets/images/giphy.gif" class="object-fill h-28 w-28" />
      </div>
      <Map v-else :lat="ai.latitude" :long="ai.longtitude" />

      <div class="flex flex-col px-64 mt-8 w-5/6">
        <audio
          ref="player"
          class="hidden"
          :src="mySource"
          autoplay
          controls
          crossorigin="anonymous"
        />
        <canvas ref="canvas" />
      </div>

      <div class="text-lg">
        {{ transcript }}
      </div>
      <button class="mt-8" @click="toggleListening">
        {{ isListening ? "stop" : "start" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// definePageMeta({ layout: false });
import { AVLine } from "vue-audio-visual";
import { useAVLine } from "vue-audio-visual";
import { aiStore } from "~/store/ai";

const visiable = ref(false);
const player = ref(null);
const canvas = ref(null);
const mySource = ref("");
const ai = aiStore();

let recognition: SpeechRecognition | null = null;
const transcript = ref("");
const isListening = ref(false);

let latitude = ref(0);
let longitude = ref(0);

onMounted(() => {
  if (process.browser) {
    window.SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "th-TH";

    recognition.addEventListener("result", (e: any) => {
      transcript.value = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join("");
    });

    recognition.addEventListener("end", () => {
      if (isListening.value) recognition?.start();
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude.value = position.coords.latitude;
          longitude.value = position.coords.longitude;
          console.log(latitude.value, longitude.value);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
});

useAVLine(player, canvas, {
  src: mySource,
  canvHeight: 80,
  canvWidth: 500,
  lineColor: "white",
});

function toggleListening() {
  if (isListening.value) {
    stopListening();
  } else {
    startListening();
  }
}

function startListening() {
  // player.value.play();
  isListening.value = true;
  visiable.value = false;
  recognition?.start();
}

async function stopListening() {
  isListening.value = false;
  recognition?.stop();

  const response = await ai.getContext(transcript.value);
  if (response) {
    let context = ai.context;

    switch (context.intent) {
      case "search":
        mySource.value = "/music/process.mp3";
        const responseKnowledge = await ai.getKnowledge(transcript.value);

        if (responseKnowledge == "Error getting knowledge") {
          mySource.value = "/music/problem_chatGPT.mp3";
          break;
        }
        transcript.value = responseKnowledge;
        const voice = await ai.getVoice(transcript.value);
        mySource.value = voice;

        break;
      case "weather":
        mySource.value = "/music/process.mp3";
        let dataWeather = context.entities["location:location"][0]["value"];
        transcript.value = "ค้นหาสภาพอากาศ " + dataWeather;
        const responseWeather = await ai.getWeather(dataWeather);

        if (responseWeather == "Error getting weather") {
          mySource.value = "/music/problem_chatGPT.mp3";
          break;
        }
        transcript.value = responseWeather;
        const voiceWeather = await ai.getVoice(responseWeather);
        mySource.value = voiceWeather;

        break;

      case "restaurantNearMe":
        mySource.value = "/music/process.mp3";
        transcript.value = "ค้นหาร้านอาหาร";
        const responseRestaurant = await ai.getRestaurantNearMe(
          latitude.value,
          longitude.value
        );
        if (responseRestaurant == "Error getting restaurant") {
          mySource.value = "/music/problem_chatGPT.mp3";
          break;
        }

        transcript.value = responseRestaurant;
        const voiceRestaurant = await ai.getVoice(responseRestaurant);
        mySource.value = voiceRestaurant;

        break;
      case "showMap":
        let place = context.entities["location:location"][0]["value"];
        mySource.value = "/music/process.mp3";
        transcript.value = "แสดงแผนที่ " + place;

        const placeMap: any = await ai.getPlace(place);

        if (placeMap == "Error getting place") {
          mySource.value = "/music/problem_chatGPT.mp3";
          break;
        }
        visiable.value = true;
        console.log(placeMap);
        transcript.value = placeMap;
        const voiceMap = await ai.getVoice(transcript.value);
        mySource.value = voiceMap;
        break;

      default:
        mySource.value = "/music/problem_sound.mp3";
        transcript.value = "ขอโทษด้วย ไม่เข้าใจคำสั่ง";
        visiable.value = false;
        break;
    }
  }
}

function clearAudio() {
  mySource.value = "";
}
</script>
