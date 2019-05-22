<template>
    <div id="recommend">
        <div class="recommend-like"><span class="iconfont iconfont-love">&#xe85c;</span>猜你喜欢 </div>
        <router-link v-for="item in recommendList" :key="item.id" tag="ul" :to="'/detail/'+item.id">
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
        </router-link>
        <div class="recommend-more"><a>查看所有产品</a></div>
    </div>
</template>

<script>

    export default {
        name: 'Recommend',
        props: ["recommendList"]
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
