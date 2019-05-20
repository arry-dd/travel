<template>
<div class="swiper-div">
    <swiper :options="swiperOption" ref="mySwiper"  v-if="img.length">
        <swiper-slide v-for="item in img" :key="item.id">
            <img class="swiper-img" :src="item.url">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>

</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    require('swiper/dist/css/swiper.css');
    export default {
        name: 'Swiper',
        components: {
            swiper,
            swiperSlide
        },
        props: ['img'],
        data() {
            return {
                swiperOption: {
                //设置轮播指标（即轮播图下方的圆点）
                    pagination: '.swiper-pagination',
                    //设置是否可以循环轮播
                    loop: true
                }
            }
        }


    }
</script>

<style scoped lang="less">
    .swiper-div /deep/.swiper-pagination-bullet-active {
        background-color: white;
    }
    img {
            width: 100%;
    }
    .swiper-div{
        overflow: hidden;
        height: 0;
        padding-bottom: 26.25%;
    }
</style>

