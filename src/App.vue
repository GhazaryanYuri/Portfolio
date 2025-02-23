<script setup>
import Navbar from '@/components/Navbar.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'
import FooterSection from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
  <main class="p-5 flex flex-col justify-center items-center gap-7">
    <About />
    <Projects />
    <Contact />
  </main>
  <FooterSection />
</template>