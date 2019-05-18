<template>
    <div id="home">
        <home-header></home-header>
        <swiper></swiper>
    </div>
</template>

<script>
    import HomeHeader from  'home/com/header.vue';
    import Swiper from 'home/com/swiper.vue';
    export default {
        name: 'home',
        components: {
            HomeHeader,
            Swiper
        }
    }
</script>

<style>

</style>
