<template>
    <div>
        <router-link tag="div" to="/" class="abs" v-show="showAbs"><span class="iconfont abs-back">&#xe624;</span></router-link>
        <div class="header" v-show="!showAbs" :style="headerStyle">
            <router-link tag="div" to="/" class="header-left"><span class="iconfont back">&#xe624;</span></router-link>
            景点详情
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Header',
        data() {
            return {
                showAbs: true,
                headerStyle: {
                    opacity: 1
                }
            }
        },
        methods: {
            changeShowAbs() {
                console.log('1111');
                let top = document.documentElement.scrollTop;
                if (top > 60) {
                    this.showAbs = false;
                    top = top > 140 ? 140 : top;
                    this.headerStyle.opacity = top / 140;
                } else {
                    this.showAbs = true;
                }
            }
        },
        activated() {
            window.addEventListener('scroll', this.changeShowAbs)
        },
        deactivated() {
            window.removeEventListener('scroll', this.changeShowAbs)
        }
    }
</script>

<style scoped lang="less">
    @import "~style/variable.less";

    .abs {
        height: .8rem;
        width: .8rem;
        border-radius: .4rem;
        background-color: rgba(0, 0, 0, .8);
        position: absolute;
        text-align: center;
        top: .24rem;
        left: .24rem;

        .abs-back {
            color: #FFFFFF;
            line-height: .8rem;
            display: inline-block;
        }
    }

    .header {
        height: .76rem;
        line-height: .76rem;
        background-color: @baseColor;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: #FFFFFF;
        text-align: center;

        .header-left {
            width: .64rem;
            /*background-color: red;*/
            float: left;
            height: .76rem;

            .back {
                margin-left: .12rem;
            }
        }
    }


</style>
