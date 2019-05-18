<template>
<div>

    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,i) in img" :key="item.id">
            <img class="swiper-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>

</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    require('swiper/dist/css/swiper.css')
    export default {
        name: 'Swiper',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                img: {
                    id1: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/d687a7b93c4a4e8d90ec11972b83eeba.jpg',
                    id2: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/dea48ef2dcd47657b7c9ba303a1b81dd.jpg',
                    id3: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/97d955c47f8f786440053515c3b2cee2.jpg',
                    id4: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/6a43abe8ac960ffda86fcf81b20389ac.jpg'
                }
            }
        }


    }
</script>

<style scoped lang="less">
    img {
        width: 100%;
    }

</style>

<style>
    .swiper-pagination-bullet-active {
        background-color: white;
    }
</style>
