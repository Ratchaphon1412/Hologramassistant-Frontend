<template>
    <section ref="main" class="relative h-screen overflow-y-hidden overflow-x-hidden wrapper">
        <img class="h-auto w-full object-cover sm:h-screen absolute sky" src="/images/sky.png" alt="image description" />
        <img class="h-auto w-full object-cover sm:h-screen absolute depth1" src="/images/depth2.png"
            alt="image description" />
        <img class="h-auto w-full object-cover sm:h-screen absolute depth2" src="/images/depth1.png"
            alt="image description" />


        <img class="h-auto w-full object-cover sm:h-screen absolute rocket" src="/images/rocket.png"
            alt="image description" />

        <img class="h-auto w-full object-cover sm:h-screen absolute" src="/images/astro.png" alt="image description" />
    </section>

    <div class="p-4 md:p-10 bg-black">
        <div class="flex justify-center text-xl font-bold tracking-widest text-gray-300">
            <h1>CURRICULUM VITAE EXTENDIDO</h1>
        </div>

        <div class="grid col-span-1 md:flex items-center mt-10 justify-center">
            <div class="mr-14">
                <img class="md:w-40" src="https://i.imgur.com/HvlloWd.png" alt="Logo">
            </div>
            <div class="md:mr-4">
                <img class="md:w-40" src="https://i.imgur.com/xUbzfdw.png" alt="">
            </div>
            <div class="md:border-l-2 pl-4 p-2 col-span-2 text-justify md:w-1/2 mt-10 md:mt-0">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex urna, lobortis nec venenatis sed,
                    fringilla at nibh.
                </p>
                <p class="mt-4">
                    Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed
                    vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.
                </p>
            </div>
        </div>

        <div class="grid col-span-1 md:flex items-center justify-center mt-20">
            <div>
                <div class="md:flex items-center mb-4">
                    <div class="flex items-center md:mr-8 mb-4 md:mb-0">
                        <i class="fas fa-envelope-open-text fa-2x mr-2"></i>
                        <p>matias@icodeart.cl</p>
                    </div>

                    <div class="flex items-center">
                        <i class="fab fa-github fa-2x mr-2"></i>
                        <p><b>github.com/</b>mkdirmatias</p>
                    </div>
                </div>

                <div class="md:flex items-center">
                    <div class="flex items-center md:mr-7">
                        <i class="fas fa-phone-alt fa-2x mr-2 mb-4 md:mb-0"></i>
                        <p>+5 6 9 3 2 6 8 8 8 2 4 </p>
                    </div>

                    <div class="flex items-center">
                        <i class="fas fa-globe fa-2x mr-2"></i>
                        <p> icodeart.cl</p>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center md:ml-12 pt-10 md:pt-0">
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
            </div>
        </div>

        <div class="md:flex mt-20 text-center ml-10 mr-10 md:ml-36 md:mr-36">
            

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

                        <div class="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                            <i class="fas fa-circle -top-1 -ml-2 absolute"></i>
                        </div>

                        <div class="ml-10">
                            <div class="font-bold">Proyecto 1</div>
                            <div class="italic md:mb-4">Empresa 1</div>
                            <div class="mb-4 mt-2 md:hidden">
                                <div class="font-bold">2020</div>
                                <div class="text-xs">Abril - Junio</div>
                            </div>
                            <div class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula
                                ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed,
                                vestibulum ultrices nibh.</div>
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

                        <div class="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                            <i class="fas fa-circle -top-1 -ml-2 absolute"></i>
                        </div>

                        <div class="ml-10">
                            <div class="font-bold">Proyecto 2</div>
                            <div class="italic md:mb-4">Empresa 2</div>
                            <div class="mb-4 mt-2 md:hidden">
                                <div class="font-bold">2020</div>
                                <div class="text-xs">Julio - Agosto</div>
                            </div>
                            <div class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula
                                ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed,
                                vestibulum ultrices nibh.</div>
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

                        <div class="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
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
                            <div class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula
                                ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed,
                                vestibulum ultrices nibh.</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
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
definePageMeta({ layout: false })

import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx: any;

onMounted(() => {
    ctx = gsap.context((self) => {

        gsap.to(".sky", {
            y: 2500,
            duration: 1, // Animation duration in seconds
            ease: "power1.inOut", // Easing function
            scrollTrigger: {
                trigger: '.container',
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
                trigger: '.container',
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
                trigger: '.container',
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
                trigger: '.container',
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

<style scoped>.wrapper::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, black, transparent);
    z-index: 200;
}</style>