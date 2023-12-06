<script setup lang="ts">
import { authStore } from "~/store/auth";
let auth = authStore();
let code = ref("");
let error = ref(false);

async function submit() {
  const response = await auth.register(code.value);
  if (response) {
    await navigateTo("/auth/login");
  } else {
    error.value = true;
  }
}
</script>

<template>
  <div class="md:flex">
    <div
      class="relative hidden basis-1/2 md:flex items-center md:visible bg-cover bg-center bg-black"
      style="
        background-image: url('https://wallpapercave.com/wp/wp5561747.jpg');
      "
      id="moveleft"
    ></div>
    <div class="md:basis-1/2 bg-back z-0">
      <div
        class="h-screen flex flex-col justify-center items-center"
        id="moveright"
      >
        <p class="text-white text-3xl font-semibold tracking-wide mb-4">
          Power of AI
        </p>
        <p class="text-xs mb-4 font-semibold tracking-wide">
          Fill the access token of Chat GPT <br />
        </p>
        <span class="text-xs mb-4 font-semibold tracking-wide">
          this project is open source and free to use for everyone , <br />
          The access token use for chat conversation only.
        </span>
        <form action="" class="w-[50%]" @submit.prevent="submit">
          <p
            v-if="error"
            id="outlined_error_help"
            class="mt-2 mb-4 text-xs text-red-600"
          >
            <span class="font-medium">Oh, snapp!</span> Can't Create Account.
          </p>
          <div class="mb-4">
            <div class="relative">
              <input
                type="text"
                id="floating_outlined"
                v-model="code"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >Code</label
              >
            </div>
          </div>

          <button
            type="submit"
            @click="submit"
            class="btn btn-info w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl"
          >
            Submit
          </button>
        </form>

        <p class="mt-4 text-xs">
          Already a user?
          <nuxt-link to="login" class="text-[#2674B4]">Login</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

#moveright {
  animation-name: moveright;
  animation-duration: 0.5s;
}

@keyframes moveright {
  0% {
    transform: translateX(-75%);
  }
  100% {
    transform: translateX(0);
  }
}

#moveleft {
  animation-name: moveleft;
  animation-duration: 0.5s;
}

@keyframes moveleft {
  0% {
    transform: translateX(75%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
