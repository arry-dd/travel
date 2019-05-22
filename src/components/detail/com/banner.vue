<template>
    <div>
        <div class="banner" @click="galleryShow">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg">
            <div class="banner-info">
                <div class="banner-desc">广州长隆旅游度假区(AAAAA景区)</div>
                <div class="banner-icon"> <span class="iconfont iconfont-arrows">&#xe64a;</span>16</div>
            </div>
            <gallery v-show="galleryShowFlag" @close="galleryClose"></gallery>
        </div>
    </div>
</template>

<script>
    import Gallery from 'common/gallery/gallery'
    export default {
        name: 'Banner',
        components: {
            Gallery
        },
        data() {
            return {
                galleryShowFlag: false
            }
        },
        methods: {
            galleryShow() {
                this.galleryShowFlag = true;
            },
            galleryClose() {
                this.galleryShowFlag = false;
            }
        }
    }
</script>

<style scoped lang="less">
    .banner {
        width: 100%;
        height: 0;
        padding-bottom: 55%;
        position: relative;
        /*overflow: hidden;*/
        .banner-img {
            width: 100%;
        }
        .banner-info {
            position: absolute;
            padding-bottom: .1rem;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            color: #FFFFFF;
            background: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
            .banner-desc {
                width: 72%;
                margin-left: .3rem;
            }
            .banner-icon {
                flex: 1;
                text-align: right;
                margin-right: .3rem;
            }
        }
    }
</style>
