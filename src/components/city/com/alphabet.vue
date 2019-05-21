<template>
    <div class="alphabet">
        <div class="title">字母排序</div>
        <ul class="al-detail">
            <li
            v-for="(val,key) in cities"
            :key="key"
            @click="getKey"
            >
            {{key}}
            </li>
        </ul>
    </div>


</template>

<script>
    export default {
        name: 'Alphabet',
        props: ['cities'],
        methods: {
            getKey(e) {
                this.$emit('setAl',e.target.innerText);
            }
        }
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


</style>
