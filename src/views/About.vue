<script setup>
import HTML from '@/components/icons/html.svg'
import CSS from '@/components/icons/css3.svg'
import JS from '@/components/icons/js.svg'
import Tailwind from '@/components/icons/tailwindcss.svg'
import GIT from '@/components/icons/git.svg'
import GitHub from '@/components/icons/github.svg'
import TypeScript from '@/components/icons/typescript.svg'
import Vue from '@/components/icons/vue.svg'

const icons = [HTML, CSS, JS, Tailwind, GIT, GitHub, TypeScript, Vue]
</script>
<template>
    <div class="w-auto min-h-[400px] bg-transparent border-2 border-orange-border flex flex-wrap justify-center items-center p-5 rounded-md gap-32 max-lg:gap-12 mt-[60px] scroll-mt-[80px]"
        id="about">
        <p class="max-w-[360px] text-xl text-center font-semibold text-white-primary">
            Hello, I’m Yuri, a Frontend Web Developer with 6+ months of experience.
            I’d be happy if you contact me for work or if you need help with something.
            Have a nice day, my friend! 😉
        </p>
        <div class="max-w-[250px] flex flex-wrap justify-center items-center gap-5">
            <img v-for="icon in icons" :src="icon" alt="" class="w-[50px] h-[50px]">
        </div>
    </div>
</template>

<style scoped>
#about {
    box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
}
</style>