<script setup>
import HTML from '@/components/icons/html.svg'
import CSS from '@/components/icons/css3.svg'
import JS from '@/components/icons/js.svg'
import Tailwind from '@/components/icons/tailwindcss.svg'
import GIT from '@/components/icons/git.svg'
import GitHub from '@/components/icons/github.svg'
import TypeScript from '@/components/icons/typescript.svg'
import React from '@/components/icons/react.svg'

const icons = [HTML, CSS, JS, Tailwind, GIT, GitHub, TypeScript, React]
</script>
<template>
    <div class="w-full min-h-screen flex justify-center items-center scroll-mt-[30px] mt-[20px]" id="about">
        <div class="w-auto min-h-[350px] bg-transparent border-2 border-orange-border flex flex-wrap justify-center items-center px-3 rounded-md gap-32 max-lg:gap-12 max-md:py-[24px] overflow-hidden"
            id="aboutBox">
            <p id="aboutContent" class="max-w-[360px] text-xl text-center font-semibold text-white-primary">
                Hello, I’m Yuri, a Frontend Web Developer with 6+ months of experience.
                I’d be happy if you contact me for work or if you need help with something.
                Have a nice day, my friend! 😉
            </p>
            <div id="images" class="max-w-[250px] flex flex-wrap justify-center items-center gap-5">
                <img v-for="icon in icons" :src="icon" alt="" class="w-[50px] h-[50px]">
            </div>
        </div>
    </div>
</template>

<style scoped>
#aboutBox {
    box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
}

#images {
    transform: translate(200%, 0);
    animation: skills 1s linear forwards;
}

#aboutContent {
    transform: translate(-200%, 0);
    animation: skills 1s linear forwards;
}

@keyframes skills {
    to {
        transform: translate(0, 0);
    }
}
</style>