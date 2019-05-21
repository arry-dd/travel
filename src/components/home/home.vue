<template>
    <div id="home">
        <home-header :city="city"></home-header>
        <swiper :img="swiperImg"></swiper>
        <icons :iconList="iconList"></icons>
        <position></position>
        <recommend :recommendList="recommendList"></recommend>
        <weekend :weekendList="weekendList"></weekend>
    </div>
</template>

<script>
    import axios from 'axios'
    import HomeHeader from  'home/com/header.vue';
    import Swiper from 'home/com/swiper.vue';
    import Icons from 'home/com/icons.vue';
    import Recommend from 'home/com/recommend.vue';
    import Position from 'home/com/position.vue';
    import Weekend from 'home/com/weekend.vue';
    export default {
        name: 'home',
        data() {
            return {
                swiperImg: [],
                city: "",
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        },
        components: {
            HomeHeader,
            Swiper,
            Icons,
            Position,
            Recommend,
            Weekend
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                axios.get('/api/home.json')
                    .then(this.succ);
            },
            succ(res) {
                if(res.data.ret == true) {
                    const data = res.data.data;
                    this.swiperImg = data.swiperImg;
                    this.city = data.city;
                    this.iconList = data.iconList;
                    this.recommendList = data.recommendList;
                    this.weekendList = data.weekendList;
                }
            }
        }
    }
</script>

<style>

</style>
