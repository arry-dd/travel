<template>
    <div>
        <Banner></Banner>
        <Header></Header>
        <div class="dv"></div>
    </div>
</template>

<script>
    import Banner from 'detail/com/banner'
    import Header from 'detail/com/header'
    export default {
        name: 'Detail',
        components: {
            Banner,
            Header
        }
    }
</script>

<style scoped lang="less">
    .dv {
        height: 50rem;
    }
</style>
