import { defineStore } from "pinia";

export const aiStore = defineStore(
  "aiStore",
  () => {
    let context: any = ref(null);
    let latitude: any = ref(0);
    let longtitude: any = ref(0);

    async function getContext(transcript: string) {
      const { data: data, error: error } = await useApiBase<{
        intent: string;
        confidence: number;
        entities: any;
      }>("/ai/", {
        method: "POST",
        body: JSON.stringify({
          query: transcript,
        }),
      });

      if (data.value) {
        console.log(data.value);
        context.value = data.value;
        return true;
      }
      return false;
    }

    async function getKnowledge(text: string) {
      const { data: data, error: error } = await useApiBase<{ answer: string }>(
        "/knowledge/",
        {
          method: "POST",
          body: JSON.stringify({
            question: text,
          }),
        }
      );

      if (data.value) {
        console.log(data.value);
        return data.value.answer;
      }
      return "Error getting knowledge";
    }

    async function getVoice(text: string) {
      const { data: data, error: error } = await useApiBase<{ url: string }>(
        "/texttospeech/",
        {
          method: "POST",
          body: JSON.stringify({
            text: text,
          }),
        }
      );
      if (data.value) {
        console.log(data.value);
        return data.value.url;
      }
      return "/music/problem_sound.mp3";
    }

    async function getWeather(place: string) {
      const { data: data, error: error } = await useApiBase<{
        weather: string;
      }>("/weather/", {
        method: "POST",
        body: JSON.stringify({
          city: place,
        }),
      });

      if (data.value) {
        console.log(data.value);
        return data.value.weather;
      }
      return "Error getting weather";
    }

    async function getRestaurantNearMe(lat: number, lon: number) {
      const { data: data, error: error } = await useApiBase<{
        restaurant: string;
      }>("/restaurant/", {
        method: "POST",
        body: JSON.stringify({
          lat: lat,
          long: lon,
        }),
      });

      if (data.value) {
        console.log(data.value);
        return data.value.restaurant;
      }
      return "Error getting restaurant";
    }

    async function getPlace(place: string) {
      const { data: data, error: error } = await useApiBase<{
        description: string;
        lat: number;
        long: number;
      }>("/place/", {
        method: "POST",
        body: JSON.stringify({
          place: place,
        }),
      });

      if (data.value) {
        console.log(data.value);
        latitude.value = data.value.lat;
        longtitude.value = data.value.long;
        return data.value.description;
      }
      return "Error getting place";
    }

    return {
      getContext,
      context,
      getKnowledge,
      getVoice,
      getWeather,
      getRestaurantNearMe,
      getPlace,
      latitude,
      longtitude,
    };
  },
  {
    persist: true,
  }
);
