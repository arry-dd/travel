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
        props: ["weekendList"]
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
