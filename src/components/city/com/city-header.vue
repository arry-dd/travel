<template>
    <div>
        <div class="header-top">
            <div class="header-left">
                <router-link to="/">
                    <span class="iconfont back">&#xe624;</span>
                </router-link>
            </div>
            <div class="header-selector">城市选择</div>
        </div>
        <div class="header-bottom">
            <ul>
                <li class="header-bottom-left">境内</li>
                <li class="header-bottom-right">境外·港澳台</li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'CityHeader'
    }
</script>

<style scoped lang="less">
    @import "~style/variable.less";
    .header-top {
        line-height: .76rem;
        background-color: @baseColor;
        display: flex;
        color: white;
        overflow: hidden;
        .header-left {
            width: .64rem;
            float: left;
            height: .76rem;
            .back {
                margin-left: .12rem;
                color: white;
            }
        }
        .header-selector {
            padding-left: 2rem;
            font-size: .3rem;
            color: #FFFBF4;
            height: .84rem;
            line-height: .84rem;
            /*vertical-align: bottom;*/
        }
    }
    .header-bottom {
        background-color: @baseColor;
            text-align: center;
            height: .6rem;
            ul {
                width: 68.75%;
                text-align: center;
                display: inline-block;
                height: .4rem;
            }
            .header-bottom-left, .header-bottom-right{
                display: inline-block;
                height: 98%;
                width: 50%;
                line-height: .4rem;
                color: #FFFFFF;
                border: 1px solid #FFFFFF;
                box-sizing: border-box;
            }
            .header-bottom-left {
                color: @baseColor;
                background-color: #fff;
            }
    }


</style>
