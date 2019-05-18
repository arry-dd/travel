<template>
    <div id="home">
        <home-header></home-header>
        <swiper></swiper>
        <icons></icons>
    </div>
</template>

<script>
    import HomeHeader from  'home/com/header.vue';
    import Swiper from 'home/com/swiper.vue';
    import Icons from 'home/com/icons.vue';
    export default {
        name: 'home',
        components: {
            HomeHeader,
            Swiper,
            Icons
        }
    }
</script>

<style>

</style>
