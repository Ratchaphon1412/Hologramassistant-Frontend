<script setup lang="ts">
// import { MapboxMap } from "@studiometa/vue-mapbox-gl";=
import { ref, onMounted, defineProps } from "vue";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
const runtimeConfig = useRuntimeConfig();

mapboxgl.accessToken = runtimeConfig.public.mapbox;

const mapContainer = ref<HTMLElement>();

const props = defineProps({
  lat: {
    type: Number,
    default: 48.858093,
  },
  long: {
    type: Number,
    default: 2.294694,
  },
});

const latProp = ref(props.lat);
const longProp = ref(props.long);
const latlongarray = [longProp.value, latProp.value];

onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: "mapbox://styles/mapbox/streets-v11",
    center: latlongarray,
    zoom: 16,
    projection: "globe",
    pitch: 45,
    bearing: -17.6,
  });

  function rotateCamera(timestamp: any) {
    // clamp the rotation between 0 -360 degrees
    // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
    map.rotateTo((timestamp / 100) % 360, { duration: 0 });
    // Request the next frame of the animation.
    requestAnimationFrame(rotateCamera);
  }

  map.on("style.load", () => {
    // Insert the layer beneath any symbol layer.
    rotateCamera(0);
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
      (layer) => layer.type === "symbol" && layer.layout["text-field"]
    ).id;
    map.addLayer(
      {
        id: "add-3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 15,
        paint: {
          "fill-extrusion-color": "#aaa",

          // Use an 'interpolate' expression to
          // add a smooth transition effect to
          // the buildings as the user zooms in.
          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "height"],
          ],
          "fill-extrusion-base": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "min_height"],
          ],
          "fill-extrusion-opacity": 0.6,
        },
      },
      labelLayerId
    );
  });
});
</script>

<template>
  <div ref="mapContainer" class="w-5/6 h-2/3"></div>
</template>

<style scoped>
.red {
  background-color: red;
}
</style>
