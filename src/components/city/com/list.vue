<template>
    <div class="list" ref="wrapper">
        <div class="wrapper">
            <div class="hot-city">
                <div class="title">热门城市</div>
                <div class="hot-city">
                    <ul>
                        <li v-for="value in hotCities" :key="value.id" @click="handleSkip(value.name)">{{value.name}}</li>
                    </ul></div>
            </div>
            <alphabet :cities="cities" @setAl="getAl"></alphabet>
            <div>
                <div class="sort-A" v-for="(val,key) in cities" :key="key" :ref="key">
                    <div class="title">{{key}}</div>
                    <div>
                        <ul>
                            <li  v-for="(item,i) in val" :key="i" @click="handleSkip(item.name)">{{item.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import Bscroll from 'better-scroll'
    import Alphabet from 'city/com/alphabet'
    import axios from 'axios'
    export default {
        name: 'List',
        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper);
            this.getCityData();
        },
        components: {
            Alphabet
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
                    this.$emit('sendCity',this.cities)
                }
            },
            getAl(data) {
                this.al = data;
            },
            handleSkip(city) {
                this.changeCity(city);
                this.$router.push('/');
            },//处理热门城市切换
            ...mapMutations(['changeCity'])
        },
        data() {
            return {
                hotCities: [],
                cities: {},
                al: ''
            }
        },
        watch: {
        al() {
            if(this.al) {
                this.scroll.scrollToElement(this.$refs[this.al][0])
                //按字母跳转
            }
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
        top: 2.14rem;
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
    }

</style>
