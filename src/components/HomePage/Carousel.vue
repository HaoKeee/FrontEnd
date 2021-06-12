<template>
    <el-carousel height="300px">
        <el-carousel-item v-for="item of items" :key="item">
            <img :src="item.imgSrc" :alt="item.title" />
            <h4>{{ item.title }}</h4>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Carousel',
    data() {
        return {
            items: [],
        }
    },
    created() {
        this.GetCarouselData()
    },
    methods: {
        GetCarouselData() {
            axios
                .get('/src/assets/data/CarouselData.json')
                .then(response => (this.items = response.data))
        },
    },

};
</script>
<style lang="less">
.el-carousel {
    width: 900px;
    margin: 0 auto;
    img {
        width: 100%;
    }
}
</style>