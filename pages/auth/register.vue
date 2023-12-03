<script setup lang="ts">
let error_email = ref(false);
let error_name = ref(false);

let Password = ref("");
let error_minimun = ref(false);
let error_symbol = ref(false);

let realPassword = ref("");
let error_realPassword = ref(false);


//variable 
let username = ref(""); //
// let fullname = ref("");
let email = ref("");

async function submit() {
//   if (realPassword.value === Password.value && username.value !== "" && fullname.value !== "" && phone.value !== "" && gender.value !== "" && email.value !== "") {
//     // store in pinia store to use somewhere
//     await registerStore(username.value,fullname.value,phone.value,gender.value,email.value,Password.value)
    
//     // store to database
//     await register(username.value,fullname.value,phone.value,gender.value,email.value,Password.value)
//     Swal.fire({
//             confirmButtonText: 'OK',
//             icon : `success`,
//             title : "success"
//         }).then((result) => {
//             if(result.isConfirmed){
//                 navigateTo("/auth/login")
//             }
//         })
//     // navigateTo("/auth/registerAddress")
//     error_realPassword.value = false;
//   } else {
//     error_realPassword.value = true;
//     Swal.fire({
//             icon: 'error',
//             title: 'something wrong',
//             text: 'กรณุากรอกข้อมูลให้ครบถ้วน'
//         })
//   }
}

watch(
  Password,
  () => {
    if (Password.value.length < 8) {
      error_minimun.value = true;
    } else {
      error_minimun.value = false;
    }

    if (Password.value.includes("@") || Password.value.includes("!")) {
      error_symbol.value = false;
    } else {
      error_symbol.value = true;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="md:flex">
    <div class="md:basis-1/2 bg-white">
      <div
        class="h-screen flex flex-col justify-center items-center"
        id="intro"
      >
        <p class="text-black text-3xl font-semibold tracking-wide mb-10">
          LET'S GO
        </p>

        <form action="" class="w-[50%]" @submit.prevent="submit()">
          <div class="mb-4">
            <div class="relative">
              <input
                type="text"
                id="floating_outlined"
                v-model="username"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >Username</label
              >
            </div>
            <p
              v-if="error_name"
              id="outlined_error_help"
              class="mt-2 text-xs text-red-600"
            >
              <span class="font-medium">Oh, snapp!</span> Some error message.
            </p>
          </div>

          <div class="mb-4">
            <div class="relative">
              <input
                type="text"
                id="floating_outlined"
                v-model="email"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >Email address</label
              >
            </div>
            <p
              v-if="error_email"
              id="outlined_error_help"
              class="mt-2 text-xs text-red-600"
            >
              <span class="font-medium">Oh, snapp!</span> Some error message.
            </p>
          </div>


          <div class="mb-4">
            <div class="relative">
              <input
                type="password"
                v-model="Password"
                id="floating_outlined"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >Create password</label
              >
            </div>
            <div v-if="Password">
                <p
                    v-if="error_minimun"
                    id="outlined_error_help"
                    class="mt-2 text-xs text-red-600"
                >
                    Password must contain a minimum of 8 characters
                </p>
    
                <p
                    v-if="error_symbol"
                    id="outlined_error_help"
                    class="mt-2 text-xs text-red-600"
                >
                Password must contain at least one symbol e.g. @, !
                </p>
            </div>
            
          </div>

          <div class="mb-4">
            <div class="relative">
              <input
                type="password"
                v-model="realPassword"
                id="floating_outlined"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >Confirm password</label
              >
            </div>
            <p
              v-if="error_realPassword"
              id="outlined_error_help"
              class="mt-2 text-xs text-red-600"
            >
              No match the password.
            </p>
          </div>

          <button
            type="submit" 
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

    <div class="relative hidden basis-1/2 md:flex items-center md:visible bg-cover bg-center" style="background-image: url('https://wallpapercave.com/wp/wp5561747.jpg');">
    </div>
  </div>
</template>

<style scoped>
::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

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

.box{
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
}

.bounce-1{
  animation-name: bounce-1;
  animation-timing-function: linear;
}

@keyframes bounce-1 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-100px); }
    100% { transform: translateY(0); }
}

</style>