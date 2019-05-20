<template>
    <div id="recommend">
        <div class="recommend-like"><span class="iconfont iconfont-love">&#xe85c;</span>猜你喜欢 </div>
        <ul v-for="item in recommendList" :key="item.id">
            <li class="recommend-info">
                <div class="recommend-img">
                    <img class="info-img" :src="item.imgUrl">
                    <div class="img-reserve">可定今日</div>
                </div>
                <div class="recommend-info-detail">
                    <div class="info-name">{{item.name}}</div>
                    <div class="info-comment">
                        <div class="info-star">
                            <span class="iconfont">&#xe609;</span>
                            <span class="iconfont">&#xe609;</span>
                            <span class="iconfont">&#xe609;</span>
                            <span class="iconfont">&#xe609;</span>
                            <span class="iconfont">&#xe609;</span>
                        </div>
                        <div class="info-comment-number">108380条评论</div>
                    </div>
                    <div class="info-price">
                        <div class="price">
                            <span class="price-icon">￥</span>
                            <span class="price-number">{{item.price}}</span>
                            起
                        </div>
                        <div class="info-position">{{item.position}}</div>
                    </div>
                    <div class="info-desc"><p>{{item.desc}}</p></div>
                </div>
            </li>
        </ul>
        <div class="recommend-more"><a>查看所有产品</a></div>
    </div>
</template>

<script>

    export default {
        name: 'Recommend',
        data() {
            return {
                recommendList: [
                    {
                        id: 1,
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg',
                        name: '长隆野生动物世界',
                        price: '271.3',
                        position: '广州长隆野生动物世界',
                        desc: '熊猫三胞胎与您共享欢乐时光'
                    },
                    {
                        id: 2,
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
                        name: '广州长隆旅游度假',
                        price: '83.9',
                        position: '番禺',
                        desc: '《奔跑吧兄弟》取景地'
                    },
                    {
                        id: 3,
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/d8/d89ab1a9b2ab355ba3.img.jpg_200x200_8fc1af97.jpg',
                        name: '长隆水上乐园',
                        price: '438',
                        position: '广州长隆水上乐园',
                        desc: '“巨蟒”滑道带给你肾上腺素的冲击'
                    },
                    {
                        id: 4,
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/31/74eabd4dc95afd494d92a5006c9ad4f5.water.jpg_200x200_b27fe752.jpg',
                        name: '美林湖温泉',
                        price: '118',
                        position: '花都区',
                        desc: '远离喧嚣，彰显欧洲贵族气息'
                    },
                    {
                        id: 5,
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_200x200_d3b1427c.jpg',
                        name: '长隆欢乐世界',
                        price: '179',
                        position: '广州长隆欢乐世界',
                        desc: '爱挑战的你怎能错过垂直过山车'
                    },
                    {
                        id: 6,
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_200x200_f052dfc4.jpg',
                        name: '增城白水寨风景名胜区',
                        price: '5435',
                        position: '增城',
                        desc: '奇趣水谷与天南第一梯'
                    },
                    {
                        id: 7,
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/1c/1c67791edbe2677b90.img.jpg_200x200_ff903759.jpg',
                        name: '珠江夜景',
                        price: '188',
                        position: '天河区',
                        desc: '感受羊城夜景的美与魅'
                    },
                    ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import "~style/variable.less";
    #recommend {
        padding-top: .25rem;
        .recommend-like {
            height: 1.1rem;
            background-color: #FFFFFF;
            line-height: 1rem;
            padding-left: .25rem;
            font-size: .32rem;
            .iconfont-love {
                color: #FF6052;
                font-size: .3rem;
            }
        }
        .recommend-info {
            box-sizing: border-box;
            height: 0;
            padding: .25rem .25rem 50% .25rem;
            background-color: #FFFFFF;
            display: flex;
            border-bottom: 1px solid #EFEFEF;
            .recommend-img {
                position: relative;
                .info-img {
                    width: 2rem;
                    height: 2rem;
                }
                .img-reserve {
                    height: .4rem;
                    line-height: .4rem;
                    border-bottom-right-radius: .3rem;
                    width: 1rem;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background-color: #FF970F;
                    color: #fff;
                    font-size: .15rem;
                }
            }
            .recommend-info-detail {
                flex: 1;
                box-sizing: border-box;
                margin-left: .25rem;
                min-width: 0;
                .info-name {
                    height: .8rem;
                    line-height: .8rem;
                    font-size: .3rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space:nowrap
                }
                .info-comment {
                    height: .8rem;
                    line-height: .8rem;
                   .info-star {
                        float: left;
                        span {
                            color: #FFB436;
                        }
                   }
                   .info-comment-number {
                        float: left;
                        margin-left: .25rem;
                        font-size: .25rem;
                   }
                }
                .info-price {
                    overflow: hidden;
                    height: .8rem;
                    margin-top: .1rem;
                    min-width: 0;
                    .price {
                        float: left;
                        font-size: .25rem;
                        .price-icon {
                            color: #FF8300;
                            font-size: .15rem;
                        }
                        .price-number {
                            color: #FF8300;
                            font-size: .35rem;
                        }
                    }
                    .info-position {
                        float: right;
                        font-size: .25rem;
                        margin-top: .1rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space:nowrap;
                        width: 1.3rem;
                        text-align: right;
                    }
                }
                .info-desc {
                    padding: .1rem;
                    background-color: #FFF9F9;
                    p{
                        font-size: .25rem;
                        color: #FF5555;
                    }
                }

            }
        }
        .recommend-more {
            height: 1rem;
            background-color: #fff;
            line-height: 1rem;
            text-align: center;
            color: @baseColor;
        }
    }


</style>
