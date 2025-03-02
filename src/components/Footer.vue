<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear());
</script>
<template>
    <footer class="w-full min-h-[60px] bg-footer-bg flex justify-center items-center px-4">
        <h1 class="text-2xl text-center text-footer-text max-sm:text-base">
            &copy;{{ currentYear }} Ghazaryan-Dev. Designed & Developed by Yuri.
        </h1>
    </footer>
</template>