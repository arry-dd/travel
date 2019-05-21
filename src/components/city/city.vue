<template>
    <div id="city">
        <city-header></city-header>
        <list></list>
    </div>
</template>

<script>
    import CityHeader from "city/com/city-header";
    import List from "city/com/list";
    export default {
        name: 'City',
        components: {
            CityHeader,
            List
        }
    }
</script>

<style>

</style>
