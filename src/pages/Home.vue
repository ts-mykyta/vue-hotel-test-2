<script setup>
import Header from '@/components/HeaderLayout.vue';
import Footer from '@/components/FooterLayout.vue';
import Promo from '@/components/sections/PromoSection.vue';
import About from '@/components/sections/AboutSection.vue';
import Rooms from '@/components/sections/RoomsSection.vue';
import Services from '@/components/sections/ServiceSection.vue';
import Selection from '@/components/sections/SelectionSection.vue';
import Games from '@/components/sections/GamesSection.vue';
import Hotels from '@/components/sections/HotelsSection.vue';
</script>

<template>
    <Header />

    <main class="main">
        <Promo />
        <About />
        <Rooms />
        <Services />
        <Selection />
        <Games />
        <Hotels />
    </main>

    <Footer />
</template>

<style lang="scss" scoped>
    @import '../assets/styles/main.scss';
</style>