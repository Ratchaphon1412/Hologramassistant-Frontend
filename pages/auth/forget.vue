<script setup lang="ts">
let error_email = false;
</script>

<template>
    <div class="md:flex">
        <div class="md:basis-1/2 bg-white">
            <div class="h-screen flex flex-col justify-center items-center" id="intro">
                <p class="text-black text-3xl font-semibold tracking-wide mb-4">
                    Forget the Password
                </p>
    
                <p class="text-xs mb-16 font-semibold tracking-wide"> Please clam down and write your email </p>
                <form action="" class="w-[50%]" @submit.prevent="">
                    <div class="mb-4">     
                        <div class="relative">
                            <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                        <p v-if="error_email" id="outlined_error_help" class="mt-2 text-xs text-red-600"><span class="font-medium">Oh, snapp!</span> Some error message.</p>    
                    </div>
    
                    <button type="submit" class="btn btn-info w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl">
                        SUBMIT
                    </button>
                </form>
                
                <p class="mt-4 text-xs">Already a user? <nuxt-link to="login" class="text-[#2674B4]">Login</nuxt-link> </p>
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

#intro{
    animation-name: intro;
    animation-duration: 1s;
}

@keyframes intro{
    0% {
    transform: translateY(25%);
  }
  100% {
    transform: translateY(0);
  }
}


</style>