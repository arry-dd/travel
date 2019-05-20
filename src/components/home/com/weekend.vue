<template>
    <div class="weekend">
        <div class="weekend-title">周末去哪儿</div>
        <div class="weekend-content" v-for="item in weekendList" :key="item.id">
            <div class="weekend-content-img">
                <img :src="item.imgUrl">
            </div>
            <div class="weekend-content-desc">
                <p>{{item.title}}</p>
                <p>{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Weekend',
        data() {
            return {
                weekendList: [
                    {
                        id: 1,
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
                        title: '清远周边逛',
                        desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
                    },
                    {
                        id: 2,
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
                        title: '浮在海上的绿洲',
                        desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
                    },
                    {
                        id: 3,
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
                        title: '广州必打卡',
                        desc: '感受现代与传统相融合的广州'
                    },
                    {
                        id: 4,
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
                        title: '阳江温泉知多少',
                        desc: '这里的天空和大海让人心旷神怡，配上舒缓的优美音乐，泡个暖暖的温泉岂不美哉'
                    },
                    {
                        id: 5,
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1812/47/cbdc44f461db0d.jpg_r_640x214_aab1da76.jpg',
                        title: '珠江夜游',
                        desc: '绚烂的霓虹将珠江照亮，跳上一艘游船，沉浸在这醉人的夜色中...'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .weekend {
        background-color: #F5F5F5;
        .weekend-title {
            height: .8rem;
            line-height: .8rem;
        }
        .weekend-content {
            padding-top: .1rem;
            .weekend-content-img img{
                width: 100%;
            }
            .weekend-content-desc {
                background-color: #FFFFFF;
                p:nth-child(1) {
                    height: .7rem;
                    line-height: .7rem;
                    padding-left: .2rem;
                    color: #212121;
                }
                p:nth-child(2) {
                    width: 75%;
                    height: .5rem;
                    padding-left: .2rem;
                    font-size: .25rem;
                    color: #7C7C7C;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap
                }
            }
        }
    }
</style>
