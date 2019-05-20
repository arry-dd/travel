<template>
<div class="swiper-div">
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in img" :key="index">
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
                //设置轮播指标（即轮播图下方的圆点）
                    pagination: '.swiper-pagination',
                    //设置是否可以循环轮播
                    loop: true
                },
                img: {
                    id1: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/60904fc24f223e0db5aee3c6148e641f.jpg_750x200_b1b90a19.jpg',
                    id2: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg',
                    id3: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/91ddace63382519afa002bd853d8df73.jpg_750x200_f24e65e8.jpg',
                    id4: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/0c350b3cac9113a824db471b2024f8b7.jpg_750x200_8d21785a.jpg'
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

