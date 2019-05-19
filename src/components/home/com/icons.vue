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
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                },
                iconList: [
                    {
                        id: 1,
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc: '景点门票'
                    },
                    {
                        id: 2,
                        img: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        desc: '广州必游'
                    },
                    {
                        id: 3,
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                        desc: '动植物园'
                    },
                    {
                        id: 4,
                        img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
                        desc: '自然风光'
                    },
                    {
                        id: 5,
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                        desc: '珠江夜游'
                    },
                    {
                        id: 6,
                        img: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                        desc: '长隆亲子月'
                    },
                    {
                        id: 7,
                        img: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        desc: '一日游'
                    },
                    {
                        id: 8,
                        img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
                        desc: '长隆度假区'
                    },
                    {
                        id: 9,
                        img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c032ae43b15a3dac34b5e07bb0e46850.png',
                        desc: '广州塔'
                    },
                    {
                        id: 10,
                        img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
                        desc: '广州融创'
                    }

                ]
            }
        },
        computed: {
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
