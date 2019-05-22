<template>
    <div class="search">
        <input type="text" placeholder="输入城市名或拼音" v-model="textValue">
        <ul>
            <li v-for="item in cityList" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                textValue: '',
                cityList: [],
                timer: null
            }
        },
        props: ['cities'],
        watch: {
            textValue: function (newVal) {
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    this.cityList = [];
                    for (let i in this.cities) {
                        this.cities[i].forEach((val) => {
                            if(this.textValue) {
                                if(val.spell.indexOf(newVal) != -1 ) {
                                    this.cityList.push(val);
                                }else if(val.name.indexOf(newVal) != -1) {
                                    this.cityList.push(val);
                                }
                            }
                        })
                    }
                },100)
            }
        } //计算text中的值是否与城市数据匹配
    }
</script>

<style scoped lang="less">
    /*@import "~style/variable.less";*/
    .search {
        height: .7rem;
        background-color: #F5F5F5;
        text-align: center;
        line-height: .7rem;
        input {
            display: inline-block;
            border-radius: 0.1rem;
            text-align: center;
        }
        ul {
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 999;
            background-color: #FFFFFF;
            li {
                height: .5rem;
                line-height: .5rem;
            }
        }

    }
</style>
