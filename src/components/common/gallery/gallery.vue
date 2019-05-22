<template>
    <div class="gallery">
        <div class="gallery-swiper">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_r_800x800_41637b9b.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/201403/07/452bd2d46925768793ff15a853899211.jpg_r_800x800_351f3cc7.jpg">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    require('swiper/dist/css/swiper.css');
    export default {
        name: 'Gallery',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    pagination : '.swiper-pagination',
                    paginationType : 'fraction'
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .gallery /deep/ .swiper-container  {
        overflow: inherit;
    }
    .gallery {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .gallery-swiper {
            width: 100%;
            padding-bottom: 66%;
            height: 0;
            img {
                width: 100%;
            }
            .swiper-pagination {
                color: #FFFFFF;
                bottom: -1rem;
            }
        }
    }
</style>
