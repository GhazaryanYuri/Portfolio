<script setup>
import { ref, onMounted, nextTick } from 'vue'

const contactInfo = {
    email: 'yuranar12@gmail.com',
    phone: '+374-91-14-08-79',
    linkedin: 'www.linkedin.com/in/yuri-ghazaryan-8044ab282'
}

const contactBox = ref(null)

onMounted(async () => {
    await nextTick() // Ensures Vue updates the DOM before observing

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

    if (contactBox.value) observer.observe(contactBox.value)
})

</script>
<template>
    <div class="w-full min-h-[88vh] flex justify-center items-center scroll-mt-[90px]" id="contact">
        <div ref="contactBox"
            class="contact-box w-auto h-auto bg-transparent border-2 border-orange-border flex flex-wrap justify-center items-center p-5 rounded-md gap-32 max-lg:gap-8">
            <p class="max-w-[460px] h-auto text-xl text-center font-semibold text-white-primary max-sm:text-base">
                Have a project in mind or just want to say hello? I’m always
                open to discussing new opportunities, collaborations, or just
                having a chat. Feel free to reach out, and I’ll
                get back to you as soon as possible!
            </p>
            <div
                class="w-auto h-auto max-h-[260px] min-h-auto border-2 border-orange-border flex flex-col justify-center items-center gap-5 py-3 px-4 rounded-[4px] max-md:w-full ">
                <h1 class="font-semibold text-white-letters text-5xl max-md:text-2xl">Contact</h1>
                <div class="flex flex-col gap-[15px]">
                    <p class="text-lg font-semibold text-white-letters max-sm:text-sm">
                        Email: <a class="text-orange-button font-medium" :href="'mailto:' + contactInfo.email">
                            {{ contactInfo.email }}
                        </a>
                    </p>
                    <p class="text-lg font-semibold text-white-letters max-sm:text-sm">
                        Phone: <a class="text-orange-button font-medium" :href="'tel:' + contactInfo.phone">
                            {{ contactInfo.phone }}
                        </a>
                    </p>
                    <p class="text-lg font-semibold text-white-letters max-sm:text-sm">
                        Linkedin: <a class="text-orange-button font-medium" :href="contactInfo.linkedin"
                            target="_blank">Yuri Ghazaryan</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-box {
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.contact-box.visible {
    opacity: 1;
    transform: scale(1);
}

#contactBox {
    box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
}
</style>
