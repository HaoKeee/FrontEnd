<template>
    <div class="comic-category">
        <template v-for="category in categorys" :key="category">
            <section>{{category}}</section>
            <!-- <el-divider direction="vertical"></el-divider> -->
        </template>
    </div>
</template>
<script>
export default {
    name: 'Category',
    data() {
        return {
            categorys: ['首页','连载','完结','排行','收藏','历史','随机']
        }
    }
}
</script>
<style lang="less">
.comic-category{
    width: 92%;
    padding: 10px 4%;
    font-size: 14px;
    background-color: rgba(102,123,153,.9);
    display: flex;
    border-radius: 5px;
    margin: 0 auto;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: flex-start;
    z-index: 999;
    @media (max-width: 400px) {
        width: 100%;
        padding: 10px 0;
    }
    section {
        padding: 2px 10px;
        @media (max-width: 400px) {
            padding: 2px 5px;
        }
    }
}
</style>