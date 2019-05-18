<template>
    <div id="header">
        <div class="header-left"><span class="iconfont back">&#xe624;</span></div>
        <div class="header-m"><span class="iconfont search">&#xe632;</span>输入城市/景点/游玩主题</div>
        <div class="header-right">广州<span class="iconfont">&#xe64a;</span></div>
    </div>
</template>

<script>

    export default {
        name: 'HomeHeader',
    }
</script>

<style scoped lang="less">
    @import "~style/variable.less";
    #header {
        line-height: .86rem;
        background-color: @baseColor;
        display: flex;
        color: white;
        overflow: hidden;
        .header-left {
            width: .64rem;
            /*background-color: red;*/
            float: left;
            height: .86rem;
            .back {
                margin-left: .12rem;
            }
        }
        .header-m {
            flex: 1;
            /*background-color: blue;*/
            background-color: #ffffff;
            height: .70rem;
            margin-top: .12rem;
            margin-bottom: .12rem;
            margin-left: .2rem;
            border-radius: .1rem;
            color: #ccc;
            line-height: .70rem;
            .search {
                margin-left: 0.3rem
                ;
            }
        }
        .header-right {
            height: .86rem;
            float: right;
            /*background-color: yellow;*/
            width: 1.24rem;
            margin-left: .15rem;
        }
    }
</style>
