<script setup>
import { ref, onMounted } from 'vue'
import GhazaryanDev from './images/ghazaryan-dev.png'

const devName = ref('Ghazaryan-Dev');
const links = ref([
    { text: 'About', url: '#about' },
    { text: 'Projects', url: '#projects' },
    { text: 'Contact', url: '#contact' },
])

const menuStatus = ref(false);
const menuCloseBtn = ref(false);

if (window.innerWidth > 640) {
    menuStatus.value = true
} else menuStatus.value = false

function navbarMenu() {
    if (menuStatus.value) {
        menuStatus.value = false
        menuCloseBtn.value = true
    } else {
        menuStatus.value = true
        menuCloseBtn.value = true
    }
}

const selectedIndex = ref(0);

function handleLinkClicked(i) {
    selectedIndex.value = i;

    if (window.innerWidth < 640) {
        menuStatus.value = false
    }
}

onMounted(() => {
    if (!sessionStorage.getItem('isReloaded')) {
        sessionStorage.setItem('isReloaded', 'true');
        window.location.hash = '#home';
        window.location.reload();
    } else {
        sessionStorage.removeItem('isReloaded');
    }
});
</script>
<template>
    <nav class="w-full h-[60px] bg-navbar-bg flex justify-between items-center px-4 fixed z-50">
        <div class="w-auto h-full flex justify-center items-center gap-3">
            <img :src="GhazaryanDev" alt="" class="w-full h-full object-cover object-center">
            <h1 class="text-xl text-nowrap text-orange-primary max-sm:text-base">{{ devName }}</h1>
        </div>
        <button class="sm:hidden" @click="navbarMenu">
            <svg v-if="!menuStatus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" color="#FF6F00" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" color="#FF6F00" />
            </svg>
        </button>
        <ul class="max-sm:absolute max-sm:flex-col max-sm:top-[60px] max-sm:left-0 max-sm:w-full max-sm:h-auto max-sm:bg-black max-sm:gap-8 max-sm:py-6 flex justify-center items-center gap-6"
            id="menu" v-show="menuStatus">
            <li v-for="(link, index) in links" :key="index">
                <a @click="handleLinkClicked(index)" :href="link.url" :class="{
                    'text-orange-primary border-b-2': selectedIndex === index,
                    'text-white-letters hover:opacity-70': selectedIndex !== index,
                }" class="sm:text-xl text-3xl border-orange-primary px-1 py-1 transition-all">
                    {{ link.text }}
                </a>
            </li>
        </ul>
    </nav>
</template>
