<template>
    <div class="list" ref="wrapper">
        <div class="wrapper">
            <div class="hot-city">
                <div class="title">热门城市</div>
                <div class="hot-city">
                    <ul>
                        <li>广州</li>
                        <li>广州</li>
                        <li>广州</li>
                        <li>广州</li>
                        <li>广州</li>
                        <li>广州</li>
                        <li>广州</li>
                        <li>广州</li>
                        <li>广州</li>
                        <li>广州</li>
                        <li>广州</li>
                        <li>广州</li>
                    </ul></div>
            </div>
            <div class="alphabet">
                <div class="title">字母排序</div>
                <ul class="al-detail">
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                    <li>G</li>
                    <li>H</li>
                    <li>J</li>
                    <li>K</li>
                    <li>L</li>
                    <li>M</li>
                    <li>N</li>
                    <li>P</li>
                    <li>Q</li>
                    <li>R</li>
                    <li>S</li>
                    <li>T</li>
                    <li>W</li>
                    <li>X</li>
                    <li>Y</li>
                    <li>Z</li>
                </ul>
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
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: 'List',
        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper)
        }
    }
</script>

<style scoped lang="less">
    .list {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 1.44rem;
        overflow: hidden;
        .title {
            height: .7rem;
            line-height: .7rem;
            background-color: #F5F5F5;
            padding-left: .3rem;
            font-size: .24rem;
        }
        .hot-city {
            overflow: hidden;
            ul {
                li {
                    height: .9rem;
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
        .alphabet {
            .al-detail {
                background-color: #FFFFFF;
                li {
                    height: 1rem;
                    width: 16.6%;
                    display: inline-block;
                    text-align: center;
                    line-height: 1rem;
                }
            }
        }
    }

</style>
