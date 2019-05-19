<template>
    <div id="recommend">
        <div class="recommend-like"><span class="iconfont iconfont-love">&#xe85c;</span>猜你喜欢 </div>
        <div class="recommend-info"></div>
    </div>
</template>

<script>

    export default {
        name: 'Recommend',
    }
</script>

<style scoped lang="less">
    .recommend-like {
        height: 1.1rem;
        background-color: pink;
        line-height: 1rem;
        margin-left: .25rem;
        font-size: .32rem;
        .iconfont-love {
            color: #FF6052;
            font-size: .3rem;
        }
    }
    .recommend-info {
        height: 0;
        padding-bottom: 50%;
        background-color: lightgreen;
    }

</style>
