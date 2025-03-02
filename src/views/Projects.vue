<script setup>
import { ref, onMounted } from 'vue'

// Import project images
import Acme from '@/components/images/acme-rocket.jpg'
import TicTacToe from '@/components/images/tic-tac-toe.png'
import Ringku from '@/components/images/ringku.jpg'
import Agency from '@/components/images/agency.jpg'
import Todo from '@/components/images/todo.jpg'
import RadnomJokes from '@/components/images/random-jokes.png'
import RegiM from '@/components/images/regim-landing-page.png'
import ShopingWebsite from '@/components/images/e-commerece.jpg'

// Project data
const projectsData = ref([
    { projectImg: Acme, projectTitle: 'Acme Rockets', aboutProject: 'HTML, JS, Tailwind v3', url: 'https://ghazaryanyuri.github.io/tailwindcss-lesson-project/build/index.html', status: true },
    { projectImg: TicTacToe, projectTitle: 'Tic Tac Toe', aboutProject: 'HTML, CSS, JS', url: 'https://ghazaryanyuri.github.io/Tic-Tac-Toe/index.html', status: true },
    { projectImg: Ringku, projectTitle: 'Ringku', aboutProject: 'HTML, CSS, JS', url: 'https://ghazaryanyuri.github.io/ringku-website-project/index.html', status: true },
    { projectImg: Agency, projectTitle: 'Agency Landing Page', aboutProject: 'HTML, Tailwind v4', url: 'https://ghazaryanyuri.github.io/agency-website/build/index.html', status: true },
    { projectImg: Todo, projectTitle: 'Todo APP', aboutProject: 'HTML, CSS, JS', url: 'https://ghazaryanyuri.github.io/todo-app/index.html', status: true },
    { projectImg: RadnomJokes, projectTitle: 'Random Jokes APP', aboutProject: 'HTML, CSS, JS, Open Source API', url: 'https://ghazaryanyuri.github.io/randomJokes-app/index.html', status: true },
    { projectImg: RegiM, projectTitle: 'RegiM Landing Page', aboutProject: 'Vue.JS, Tailwind v3', url: 'https://ghazaryanyuri.github.io/RegiM-Vue.JS/index.html', status: true },
    { projectImg: ShopingWebsite, projectTitle: 'Full-E-Commerece Website', aboutProject: 'Vue.JS, Tailwind v3', url: 'https://ghazaryanyuri.github.io/Full-E-Commerece-Website/', status: false },
])

const projectRefs = ref([])

// Open project in a new tab
const viewProject = (index) => {
    window.open(projectsData.value[index].url, '_blank')
}

// Observe elements on scroll
onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        },
        { threshold: 0.3 }
    )

    projectRefs.value.forEach((el) => {
        if (el) observer.observe(el)
    })
})
</script>

<template>
    <div class="w-full min-h-screen flex justify-center items-center scroll-mt-[30px] max-md:scroll-mt-[120px]"
        id="projects">
        <div class="w-auto h-auto flex flex-col justify-center items-center gap-4">
            <div class="max-w-[840px] min-h-[400px] flex flex-wrap justify-center items-start gap-x-[33px] gap-y-5">
                <div v-for="(project, index) in projectsData" :key="index" :ref="el => projectRefs[index] = el"
                    class="project w-[170px] min-h-[230px] border-2 border-orange-border rounded-[4px] overflow-hidden transition-all hover:shadow-md bg-transparent flex flex-col justify-between items-center pb-[5px] text-center"
                    v-show="index <= 7">
                    <div
                        class="w-full max-h-[95px] flex justify-center items-center border-b-2 border-orange-border overflow-hidden">
                        <img :src="project.projectImg" :alt="project.projectTitle"
                            class="w-full h-full object-cover object-center">
                    </div>
                    <div class="min-h-[90px] flex flex-col justify-between items-center gap-2.5">
                        <h1 class="text-white-letters text-base font-semibold">{{ project.projectTitle }}</h1>
                        <p class="text-gray-primary font-semibold text-xs">{{ project.aboutProject }}</p>
                        <button @click="viewProject(index)" :disabled="!project.status"
                            class="min-w-[70px] min-h-[15px] flex justify-center items-center bg-orange-button px-2.5 py-[2px] rounded-full text-white-letters font-semibold hover:bg-orange-hover transition-all">
                            {{ project.status ? 'View Project' : "Coming Soon" }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.project {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease, transform 1s ease;
}

.project.visible {
    opacity: 1;
    transform: translateY(0);
}

.project:hover {
    transform: rotateZ(-6deg) scale(1.05);
    box-shadow: -10px -10px 1px rgba(0, 0, 0, 0.4);
}

.project:nth-child(2n):hover {
    transform: rotateZ(6deg) scale(1.05);
    box-shadow: 10px 10px 1px rgba(0, 0, 0, 0.4);
}
</style>
