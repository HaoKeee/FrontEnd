<template>
    <div class="nav-height-offset"></div>
    <carousel>这是一个走马灯</carousel>
    <reveal-section>这是一块展示栏</reveal-section>
</template>

<script>
import Carousel from './Carousel.vue'
import RevealSection from './RevealSection.vue'
export default {
    name: 'HomePage',
    data() {
        return {}
    },
    components: {
        'Carousel': Carousel,
        'RevealSection': RevealSection,
    },
}
</script>
<style lang="less">
.nav-height-offset {
    height: 100px;
}
</style>