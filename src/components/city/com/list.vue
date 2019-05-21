<template>
    <div class="list">
        <div class="hot-city">
            <div class="title">热门城市</div>
            <div></div>
        </div>
        <div class="sort">
            <div class="title">字母排序</div>
            <div></div>
        </div>
        <div class="sort-A">
            <div class="title">A</div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        components: {

        }
    }
</script>

<style scoped lang="less">
    .title {
        height: .7rem;
        line-height: .7rem;
        background-color: #F5F5F5;
        border-bottom: 1px solid red;
        padding-left: .3rem;
        font-size: .24rem;
    }
</style>
