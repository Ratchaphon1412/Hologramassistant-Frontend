<template>
  <div class="absolute h-full w-full z-40 terminal">
    <div class="container h-full w-full flex items-center justify-end">
      <div class="mockup-code w-40 mx-12">
        <pre
          data-prefix="$"
        ><code><span class="text-success">npm</span> i RatchaphonAI</code></pre>
        <pre data-prefix=">" class="text-warning"><code>waiting...</code></pre>
        <pre
          data-prefix=">"
          class="text-warning"
        ><code>installing...</code></pre>
        <pre data-prefix=">" class="text-info"><code>building...</code></pre>
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
      </div>
    </div>
  </div>
  <section
    ref="main"
    class="relative h-screen overflow-y-hidden overflow-x-hidden wrapper"
  >
    <img
      class="h-auto w-full object-cover sm:h-screen absolute sky"
      src="/images/sky.png"
      alt="image description"
    />

    <img
      class="h-auto w-full object-cover sm:h-screen absolute depth1"
      src="/images/depth2.png"
      alt="image description"
    />
    <img
      class="h-auto w-full object-cover sm:h-screen absolute depth2"
      src="/images/depth1.png"
      alt="image description"
    />

    <img
      class="h-auto w-full object-cover sm:h-screen absolute rocket"
      src="/images/rocket.png"
      alt="image description"
    />

    <img
      class="h-auto w-full object-cover sm:h-screen absolute"
      src="/images/astro.png"
      alt="image description"
    />
  </section>

  <div class="p-4 md:p-10 bg-black">
    <div
      class="flex justify-center text-xl font-bold tracking-widest text-gray-300"
    >
      <h1>Creator</h1>
    </div>

    <div class="grid col-span-1 md:flex items-center mt-10 justify-center">
      <div class="mr-14">
        <img
          class="md:w-40"
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/KU_SubLogo_Thai.png"
          alt="Logo"
        />
      </div>
      <div class="md:mr-4">
        <img
          class="md:w-40 rounded-md"
          src="https://avatars.githubusercontent.com/u/90958561?v=4"
          alt=""
        />
      </div>
      <div
        class="md:border-l-2 pl-4 p-2 col-span-2 text-justify md:w-1/2 mt-10 md:mt-0"
      >
        <p>Ratchaphon Hinsui</p>
        <p class="mt-4">
          I am currently a student at Kasetsart University in Computer
          Science,<br />
          🌍 I'm based in Bangkok , Thailand <br />
          ✉️ You can contact me at Ratchaphon.h111@gmail.com
        </p>
      </div>
    </div>

    <div class="grid col-span-1 md:flex items-center justify-center mt-20">
      <div>
        <div class="md:flex items-center mb-4">
          <div class="flex items-center md:mr-8 mb-4 md:mb-0">
            <i class="fas fa-envelope-open-text fa-2x mr-2"></i>
            <p>Ratchaphon.h111@gmail.com</p>
          </div>

          <div class="flex items-center">
            <i class="fab fa-github fa-2x mr-2"></i>
            <p><b>github.com/</b>Ratchaphon1412</p>
          </div>
        </div>

        <!-- <div class="md:flex items-center">
          <div class="flex items-center md:mr-7">
            <i class="fas fa-phone-alt fa-2x mr-2 mb-4 md:mb-0"></i>
            <p>+66 0632686119</p>
          </div>

          <div class="flex items-center">
            <i class="fas fa-globe fa-2x mr-2"></i>
            <p>icodeart.cl</p>
          </div>
        </div> -->
      </div>

      <!-- <div class="flex items-center justify-center md:ml-12 pt-10 md:pt-0">
        <div class="md:flex">
          <div class="flex items-center mb-4 md:mb-0">
            <p class="font-bold mr-2 p-2 border rounded-full">ES</p>
            <p>NATIVO</p>
          </div>

          <div class="flex items-center md:ml-10">
            <p class="font-bold mr-2 p-2 border rounded-full">EN</p>
            <p>BÁSICO</p>
          </div>
        </div>
      </div> -->
    </div>
    <section class="bg-black">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Feature of Assistant
          </h2>
          <p class="sm:text-xl text-gray-400">
            Feature of Assistant is a set of tools that help you find answer to
            your questions and get things done.
          </p>
        </div>
        <div
          class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0"
        >
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-primary-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-dpad-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0zm1.288 2.34a.25.25 0 0 1 .424 0l.799 1.278A.25.25 0 0 1 8.799 4H7.201a.25.25 0 0 1-.212-.382l.799-1.279Zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12H8.8a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0Zm-4.17-4.65-1.279-.798a.25.25 0 0 1 0-.424l1.279-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.382.212Zm10.043-.798-1.278.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-white">Power AI</h3>
            <p class="text-gray-400">
              Ask questions and get quick answers from your Assistant. Get
              weather, traffic, finance, sports and more information.
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-primary-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-globe-asia-australia"
                viewBox="0 0 16 16"
              >
                <path
                  d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z"
                />
                <path
                  d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-white">
              Searching with Map 3D
            </h3>
            <p class="text-gray-400">
              Find the best way to get anywhere with real-time traffic updates.
              and explore the world with 3D maps.
            </p>
          </div>

          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-primary-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-cloud-fog2-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-white">Weather</h3>
            <p class="text-gray-400">
              Get the latest weather forecasts, maps, news and alerts on Open
              Weather.
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-primary-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-fingerprint"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"
                />
                <path
                  d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332c0 .409-.022.816-.066 1.221A.5.5 0 0 1 6 8.447c.04-.37.06-.742.06-1.115zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8Zm-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329Z"
                />
                <path
                  d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334Zm.3 1.67a.5.5 0 0 1 .449.546 10.72 10.72 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.72 9.72 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"
                />
                <path
                  d="M3.902 4.222a4.996 4.996 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 3.996 3.996 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556Zm6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705ZM3.68 5.842a.5.5 0 0 1 .422.568c-.029.192-.044.39-.044.59 0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.531 6.531 0 0 0 3.058 7c0-.25.019-.496.054-.736a.5.5 0 0 1 .568-.422Zm8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.51 10.51 0 0 0 .584-2.678.5.5 0 0 1 .54-.456Z"
                />
                <path
                  d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865Zm-.89 1.257a.5.5 0 0 1 .04.706A5.478 5.478 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346Zm12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-white">
              Smart Home Security
            </h3>
            <p class="text-gray-400">
              Connect Smart IOT devices to your home network and control them
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- <div class="md:flex mt-20 text-center ml-10 mr-10 md:ml-36 md:mr-36">
      <div class="md:w-2/3">
        <h1 class="font-bold italic mb-10">PROYECTOS</h1>

        <div class="relative mt-5 text-left">
          <div class="flex items-center relative">
            <div class="hidden md:block w-20">
              <div class="font-bold italic">2020</div>
              <div class="md:flex space-x-1 text-xs">
                <div>Abr.</div>
                <div>-</div>
                <div>Jun.</div>
              </div>
            </div>

            <div
              class="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"
            >
              <i class="fas fa-circle -top-1 -ml-2 absolute"></i>
            </div>

            <div class="ml-10">
              <div class="font-bold">Proyecto 1</div>
              <div class="italic md:mb-4">Empresa 1</div>
              <div class="mb-4 mt-2 md:hidden">
                <div class="font-bold">2020</div>
                <div class="text-xs">Abril - Junio</div>
              </div>
              <div class="mb-10">
                Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros.
                Proin nisl felis, consectetur sed elit sed, vestibulum ultrices
                nibh.
              </div>
            </div>
          </div>

          <div class="flex items-center relative">
            <div class="hidden md:block w-20">
              <div class="font-bold italic">2020</div>
              <div class="md:flex space-x-1 text-xs">
                <div>Jul.</div>
                <div>-</div>
                <div>Ago.</div>
              </div>
            </div>

            <div
              class="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"
            >
              <i class="fas fa-circle -top-1 -ml-2 absolute"></i>
            </div>

            <div class="ml-10">
              <div class="font-bold">Proyecto 2</div>
              <div class="italic md:mb-4">Empresa 2</div>
              <div class="mb-4 mt-2 md:hidden">
                <div class="font-bold">2020</div>
                <div class="text-xs">Julio - Agosto</div>
              </div>
              <div class="mb-10">
                Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros.
                Proin nisl felis, consectetur sed elit sed, vestibulum ultrices
                nibh.
              </div>
            </div>
          </div>

          <div class="flex items-center relative">
            <div class="hidden md:block w-20">
              <div class="font-bold italic">2020</div>
              <div class="md:flex space-x-1 text-xs">
                <div>Ago.</div>
                <div>-</div>
                <div>Hoy.</div>
              </div>
            </div>

            <div
              class="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10"
            >
              <i class="fas fa-circle -top-1 -ml-2 absolute"></i>
              <i class="fas fa-circle bottom-0 -ml-2 absolute"></i>
            </div>

            <div class="ml-10">
              <div class="font-bold">Proyecto 3</div>
              <div class="italic md:mb-4">Empresa 3</div>
              <div class="mb-4 mt-2 md:hidden">
                <div class="font-bold">2020</div>
                <div class="text-xs">Agosto - Hoy</div>
              </div>
              <div class="mb-10">
                Fusce auctor gravida dui, ut tristique nisi aliquam quis.
                Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros.
                Proin nisl felis, consectetur sed elit sed, vestibulum ultrices
                nibh.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
  <!-- <div class="justify-center h-screen bg-fixed bg-cover relative
bg-[url('https://cdn.discordapp.com/attachments/711217095681245235/1180182843217936424/00117.png?ex=657c7dec&is=656a08ec&hm=4762457ed37475a0c563423d960308a3e36643c8fc14dfee0549616a19799882&')]
">
      <img class="h-full w-full absolute"
          src="https://cdn.discordapp.com/attachments/711217095681245235/1180179194144108614/00115.png?ex=657c7a86&is=656a0586&hm=f8c5904169ca97e2c7286543a5e70c595018e0fbcf7d24f101c78e89130b8d3f&">
      <div class="text-8xl text-white uppercase z-10 absolute left-20 top-20 font-semibold">Hello my love</div>
  </div>
  <div class="h-32 bg-cover bg-gray-700"></div>
  <div
      class="flex items-center justify-center h-96 bg-fixed bg-cover
bg-[url('https://media.discordapp.net/attachments/876675067306733621/1180155772131364914/00110.png?ex=657c64b6&is=6569efb6&hm=974bd091637a97ea73c664e5c92713b8e83e3f415d63a2b523e7b93a5e2275e4&=&format=webp&quality=lossless&width=987&height=551')]">
      <h1 class="text-4xl text-white uppercase">Hello my love</h1>
  </div> -->
  <!-- <div class="h-32 bg-cover bg-gray-700"></div> -->
</template>
<script lang="ts" setup>
// definePageMeta({ layout: false })

import { onMounted, onUnmounted, ref } from "vue";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

const { $gsap: gsap } = useNuxtApp();

const main = ref();
let ctx: any;

onMounted(() => {
  ctx = gsap.context((self) => {
    gsap.to(".sky", {
      y: 2500,
      duration: 1, // Animation duration in seconds
      ease: "power1.inOut", // Easing function
      scrollTrigger: {
        trigger: ".container",
        start: "top top", // Change this according to your desired trigger point
        end: "bottom top", // Change this according to your desired end point
        scrub: true,
      },
    });

    gsap.to(".depth1", {
      y: 2000,
      duration: 1, // Animation duration in seconds
      ease: "power1.inOut", // Easing function
      scrollTrigger: {
        trigger: ".container",
        start: "top top", // Change this according to your desired trigger point
        end: "bottom top", // Change this according to your desired end point
        scrub: true,
      },
    });

    gsap.to(".depth2", {
      y: 1800,
      duration: 1, // Animation duration in seconds
      ease: "power1.inOut", // Easing function
      scrollTrigger: {
        trigger: ".container",
        start: "top top", // Change this according to your desired trigger point
        end: "bottom top", // Change this according to your desired end point
        scrub: true,
      },
    });

    gsap.to(".rocket", {
      y: 1500,
      duration: 1, // Animation duration in seconds
      ease: "power1.inOut", // Easing function
      scrollTrigger: {
        trigger: ".container",
        start: "top top", // Change this according to your desired trigger point
        end: "bottom top", // Change this according to your desired end point
        scrub: true,
      },
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<style scoped>
.wrapper::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, black, transparent);
  z-index: 200;
}
</style>
