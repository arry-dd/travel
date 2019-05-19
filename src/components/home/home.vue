<template>
    <div id="home">
        <home-header></home-header>
        <swiper></swiper>
        <icons></icons>
        <position></position>
        <recommend></recommend>
        dsfsfsdfsf
    </div>
</template>

<script>
    import HomeHeader from  'home/com/header.vue';
    import Swiper from 'home/com/swiper.vue';
    import Icons from 'home/com/icons.vue';
    import Recommend from 'home/com/recommend.vue';
    import Position from 'home/com/position.vue';

    export default {
        name: 'home',
        components: {
            HomeHeader,
            Swiper,
            Icons,
            Position,
            Recommend
        }
    }
</script>

<style>

</style>
