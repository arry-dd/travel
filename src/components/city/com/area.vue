<template>
    <div>
      <div class="sort-A">
                <div class="title">A</div>
                <div>
                    <ul>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                    </ul></div>
            </div>
      <div class="sort-A">
                <div class="title">A</div>
                <div>
                    <ul>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                    </ul></div>
            </div>
      <div class="sort-A">
                <div class="title">A</div>
                <div>
                    <ul>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                    </ul></div>
            </div>
      <div class="sort-A">
                <div class="title">A</div>
                <div>
                    <ul>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                        <li>阿里</li>
                    </ul></div>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'Area1'
    }
</script>

<style scoped lang="less">
        .title {
            height: .7rem;
            line-height: .7rem;
            background-color: #F5F5F5;
            padding-left: .3rem;
            font-size: .24rem;
        }
        .sort-A {
            overflow: hidden;
            ul {
                li {
                    height: .90rem;
                    width: 33.3%;
                    float: left;
                    background-color: #fff;
                    line-height: .9rem;
                    text-align: center;
                    box-sizing: border-box;
                    border-bottom: 1px solid #DDDDDD;
                    border-right: 1px solid #DDDDDD;
                    &:nth-last-of-type(-n+3) {
                        margin-bottom: -1px;
                    }
                    &:nth-of-type(3n) {
                        border-right: 0px;
                    }
                }
            }
        }


</style>
