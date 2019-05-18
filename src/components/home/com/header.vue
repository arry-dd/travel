<template>
    <div id="header">
        <div class="header-left"></div>
        <div class="header-m">请输入景点</div>
        <div class="header-right"></div>
    </div>
</template>

<script>

    export default {
        name: 'HomeHeader',
    }
</script>

<style scoped lang="less">
    #header {
        line-height: .86rem;
        background-color: #00BCD4;
        display: flex;
        .header-left {
            width: .64rem;
            /*background-color: red;*/
            float: left;
            height: .86rem;
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
        }
        .header-right {
            height: .86rem;
            float: right;
            /*background-color: yellow;*/
            width: 1.24rem;
        }
    }
</style>
