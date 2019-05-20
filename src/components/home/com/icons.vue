<template>

    <div class="icons">
        <swiper class="icons-sw" :options="swiperOption" ref="mySwiper" >
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.img">
                    </div>
                    <p class="text">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination icon-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    require('swiper/dist/css/swiper.css')
    export default {
        name: 'Icons',
        components: {
            swiper,
            swiperSlide
        },
        props: ["iconList"],
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                }
            }
        },
        computed: {
        //计算图标需要的页数，八个图标为一页
            pages: function () {
                let pages = [];
                this.iconList.forEach((item,index) => {
                    let page = Math.floor(index/8);
                    if(!pages[page]) {
                        pages[page] = [];
                    }
                    pages[page].push(item);
                });
                return pages

            }
        }
    }
</script>

<style scoped lang="less">
        @import "~style/variable.less";
        .icons /deep/ .icon-pagination {
            color: @baseColor;
            position: absolute;
            bottom: -12.5%;
        }
        .icons /deep/ .icons-sw {
            overflow: visible!important;
            position: relative;
        }
        .icons {
            height: 0;
            padding-bottom: 57%;
            background-color: #FFFFFF;
        }
        .icon {
            /*overflow: hidden;*/
            float: left;
            width: 25%;
            height: 0;
            padding-bottom: 25%;
            position: relative;
            .icon-img {
                position: absolute;
                bottom: .4rem;
                left: 0;
                top: 0;
                right: 0;
                img {
                    height: 100%;
                    margin: 0 auto;
                    display: block;
                }
            }
            .text {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                height: .4rem;
                line-height: .4rem;
                color: #ccc;
            }
        }

</style>
