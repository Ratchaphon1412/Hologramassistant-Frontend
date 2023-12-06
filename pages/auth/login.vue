<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { authStore } from "~/store/auth";

const auth = authStore();

let email = ref("");
let password = ref("");
let error = ref(false);

async function onSubmit() {
  if (email.value && password.value) {
    const checkauth = await auth.login(email.value, password.value);
    console.log(checkauth);

    if (checkauth) {
      const me = await auth.me();

      if (me) {
        navigateTo("/ai");
      }
    } else {
      error.value = true;
    }
  }
}
</script>

<template>
  <div class="md:flex">
    <div class="md:basis-1/2 bg-black">
      <div
        class="h-screen flex flex-col justify-center items-center"
        id="intro"
      >
        <p class="text-white text-3xl font-semibold tracking-wide mb-4">
          LOGIN
        </p>

        <p class="text-xs mb-10 font-semibold tracking-wide">
          See more the AI Let go!
        </p>
        <form action="" class="w-[60%]" @submit.prevent="onSubmit">
          <p
            v-if="error"
            id="outlined_error_help"
            class="mt-2 text-xs text-red-600"
          >
            <span class="font-medium">Oh, snapp!</span> Username or Password is
            not correct.
          </p>
          <div class="mb-4 mt-4">
            <div class="relative">
              <input
                type="text"
                id="floating_outlined"
                v-model="email"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >Email</label
              >
            </div>
          </div>

          <div>
            <div class="relative">
              <input
                type="password"
                id="floating_outlined"
                v-model="password"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >password</label
              >
            </div>
          </div>

          <!-- sign in with google -->
          <!-- <div class="relative inline-flex items-center justify-center w-full">
            <hr class="w-64 h-px my-8 border-0 bg-gray-400" />
            <span
              class="absolute px-3 font-medium text-white -translate-x-1/2 left-1/2"
              >or</span
            >
          </div> -->
          <div class="flex items-center justify-between my-5">
            <!-- <button
              type="button"
              class="text-black bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <span class="ml-2"> Sign in with Google </span>
            </button> -->

            <!-- <nuxt-link
              to="forget"
              class="text-black hover:underline px-5 py-2.5 me-2 mb-2"
            >
              Forgot password
            </nuxt-link> -->
          </div>
          <!-- end of sign in with google -->

          <!-- <div class="flex items-center justify-center my-5">
            <nuxt-link to="forget" class="text-black hover:underline">
              Forgot password
            </nuxt-link>
          </div> -->

          <button
            type="submit"
            class="btn btn-info w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl"
            @click="onSubmit"
          >
            Sign in
          </button>
        </form>

        <p class="mt-4">
          Don't have an account?
          <nuxt-link to="register" class="text-[#2674B4]"
            >Sign up for free!</nuxt-link
          >
        </p>
      </div>
    </div>

    <div
      class="relative hidden basis-1/2 md:flex items-center md:visible bg-cover bg-center"
      style="
        background-image: url('https://wallpapercave.com/wp/wp5561747.jpg');
      "
    >
      <!-- <img
        src="/images/monochromeRock.png"
        alt=""
        class="absolute left-1/4 h-16 w-16 max-h-screen box bounce-1"
      />
      <img
        src="/images/monochromeRock.png"
        alt=""
        class="absolute left-2/4 h-16 w-16 max-h-screen box bounce-1"
      />
      <img
        src="/images/monochromeRock.png"
        alt=""
        class="absolute left-3/4 h-16 w-16 max-h-screen box bounce-1"
      />
      <img
        src="/images/monochromeRock.png"
        alt=""
        class="absolute left-4/4 h-16 w-16 max-h-screen box bounce-1"
      /> -->
    </div>
  </div>
</template>

<style scoped>
#intro {
  animation-name: intro;
  animation-duration: 1s;
}

@keyframes intro {
  0% {
    transform: translateY(25%);
  }
  100% {
    transform: translateY(0);
  }
}

.box {
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
}

.bounce-1 {
  animation-name: bounce-1;
  animation-timing-function: linear;
}

@keyframes bounce-1 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
