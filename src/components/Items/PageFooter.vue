<template>
    <div class="footer">
        <section class="footer-flex-section">
            <img src="/src/assets/images/logo.png" alt="logo" />
            <span>首页</span>
            <el-divider direction="vertical"></el-divider>
            <span>App下载</span>
            <el-divider direction="vertical"></el-divider>
            <span>联系我们</span>
            <el-divider direction="vertical"></el-divider>
            <span>使用守则</span>
            <el-divider direction="vertical"></el-divider>
            <span>隐私政策</span>
        </section>
    </div>
</template>

<script>
export default {
    name: 'PageFooter',
    data() {
        return {
             
        }
    },
}
</script>

<style lang="less">
.footer {
    width: 96%;
    color: #fff;
    font-size: 14px;
    padding: 10px 2% 10px 2%;
    background-color: #3c3c3c;
    border: 0px solid #3c3c3c;
    .footer-flex-section {
        display: flex;
        float: left;
        margin: 0px 10px 0px 10px;
        .el-divider--vertical {
            height: 20px;
        }
        img {
            width: 20px;
            height: 20px;
            margin-right: 20px;
            border-radius: 50%;
        }
    }
}
</style>
