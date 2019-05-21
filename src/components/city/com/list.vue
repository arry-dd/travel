<template>
    <div class="list" ref="wrapper">
        <div class="wrapper">
            <div class="hot-city">
                <div class="title">热门城市</div>
                <div class="hot-city">
                    <ul>
                        <li v-for="value in hotCities" :key="value.id">{{value.name}}</li>
                    </ul></div>
            </div>
            <alphabet :cities="cities"></alphabet>
            <area1 :cities="cities"></area1>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import Alphabet from 'city/com/alphabet'
    import Area1 from 'city/com/area'
    import axios from 'axios'
    export default {
        name: 'List',
        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper);
            this.getCityData();
        },
        components: {
            Alphabet,
            Area1
        },
        methods: {
            getCityData() {
                axios.get("api/city.json")
                    .then(this.succ)
            },
            succ(ret) {
                if(ret.data.ret == true) {
                    const data = ret.data.data;
                    this.hotCities = data.hotCities;
                    this.cities = data.cities;
                }
            }
        },
        data() {
            return {
                hotCities: [],
                cities: {}
            }
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
        /*.sort-A {*/
        /*     overflow: hidden;*/
        /*     ul {*/
        /*         li {*/
        /*             height: .90rem;*/
        /*             width: 33.3%;*/
        /*             float: left;*/
        /*             background-color: #fff;*/
        /*             line-height: .9rem;*/
        /*             text-align: center;*/
        /*             box-sizing: border-box;*/
        /*             border-bottom: 1px solid #DDDDDD;*/
        /*             border-right: 1px solid #DDDDDD;*/
        /*             &:nth-last-of-type(-n+3) {*/
        /*                 margin-bottom: -1px;*/
        /*             }*/
        /*             &:nth-of-type(3n) {*/
        /*                 border-right: 0px;*/
        /*             }*/
        /*         }*/
        /*     }*/
        /* }*/
    }

</style>
