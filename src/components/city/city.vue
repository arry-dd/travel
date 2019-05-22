<template>
    <div id="city">
        <city-header></city-header>
        <search :cities="cities"></search>
        <list @sendCity="getCity"></list>
    </div>
</template>

<script>
    import CityHeader from "city/com/city-header";
    import List from "city/com/list";
    import Search from "city/com/search";
    export default {
        name: 'City',
        components: {
            CityHeader,
            List,
            Search
        },
        methods: {
            getCity(data) {
                this.cities = data
            }
        },
        data() {
            return {
                cities: ''
            }
        }
    }
</script>

<style>

</style>
