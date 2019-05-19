<template>
    <div class="position">
        <div class="position-false"><span class="iconfont iconfont-positon">&#xe611;</span> 定位失败</div>
        <div class="position-travel"><span class="iconfont iconfont-earth">&#xe633;</span>必游榜单</div>
    </div>
</template>

<script>

    export default {
        name: 'Position',
    }
</script>

<style scoped lang="less">
    .position {
        border-top: 1px solid #F3F3F3;
        overflow: hidden;
        height: 1rem;
        background-color: #FFFFFF;
        .position-false, .position-travel {
            width: 50%;
            float: left;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
        }
        .iconfont-positon, iconfont-earth {
            font-size: .32rem;
        }
    }

</style>
