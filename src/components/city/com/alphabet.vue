<template>
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


</template>

<script>
    export default {
        name: 'Alphabet'
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
