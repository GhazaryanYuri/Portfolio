<script setup>
const contactInfo = {
    email: 'yuranar12@gmail.com',
    phone: '+374-91-14-08-79',
    linkedin: 'www.linkedin.com/in/yuri-ghazaryan-8044ab282'
}
</script>
<template>
    <div class="w-auto h-auto bg-transparent border-2 border-orange-border flex flex-wrap justify-center items-center p-5 rounded-md gap-32 max-lg:gap-8 scroll-mt-[80px]"
        id="contact">
        <p class="max-w-[360px] text-xl text-center font-semibold text-white-primary">
            Have a project in mind or just want to say hello? I’m always
            open to discussing new opportunities, collaborations, or just
            having a chat.Feel free to reach out, and I’ll
            get back to you as soon as possible!
        </p>
        <div
            class="w-auto border-2 border-orange-border flex flex-col justify-center items-center gap-5 py-3 px-4 rounded-[4px]">
            <h1 class="font-semibold text-white-letters text-2xl">Contact</h1>
            <div class="flex flex-col gap-[15px]">
                <p class="text-lg font-semibold text-white-letters">
                    Email: <a class="text-orange-button font-medium" :href="'mailto:' + contactInfo.mail">
                        {{ contactInfo.email }}
                    </a>
                </p>
                <p class="text-lg font-semibold text-white-letters">
                    Phone: <a class="text-orange-button font-medium" :href="'tel:' + contactInfo.phone">
                        {{ contactInfo.phone }}
                    </a>
                </p>
                <p class="text-lg font-semibold text-white-letters">
                    Linkedin: <a class="text-orange-button font-medium" :href="contactInfo.linkedin">Yuri Ghazaryan</a>
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
#contact {
    box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
}
</style>