<template>
    <div class="comic-category">
        <template v-for="category in categorys" :key="category">
            <section>{{category}}</section>
            <el-divider direction="vertical"></el-divider>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            categorys: ['种类A','种类B','种类C','种类D','种类E','种类F','种类G','种类H','种类I','种类J','种类K','种类L','种类M','种类N']
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
    align-items: center;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: flex-start;
    section {
        padding: 2px 5px;
    }
}
</style>