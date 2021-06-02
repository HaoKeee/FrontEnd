<template>
    <el-card>嘀嘀嘀</el-card>
</template>
<script>
import { ElCard } from 'element-plus'
export default {
    data() {
        msg: 'Hello World!'
    },
    components:{
        [ElCard.name]: ElCard,
    }
}
</script>
<style lang="less">

</style>