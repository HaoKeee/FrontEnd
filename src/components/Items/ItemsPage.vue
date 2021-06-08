<template>
    <div class="container">
        <page-nav>12</page-nav>
        <main>
            <div class="nav-height-offset"></div>
            <!-- 此处可填充如banner等元素 -->
            <items-container />
        </main>
        <page-footer>444</page-footer>
    </div>
</template>

<script>
import PageNav from './PageNav.vue'
import ItemsContainer from './ItemsContainer.vue'
import PageFooter from './PageFooter.vue'
export default {
    name: 'ItemsPage',
    data() {
        return {
            msg: 'Hao-Ke!'
        }
    },
    components:{
        PageNav: PageNav,
        ItemsContainer: ItemsContainer,
        PageFooter: PageFooter,
    }
}
</script>
<style lang="less">
.container {
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;

    main {
        @media @min-640-screen {
            width: 640px;
        }
        @media @min-768-screen {
            width: 768px;
        }
        @media @min-1024-screen {
            width: 1024px;
        }
        @media @min-1280-screen {
            width: 1280px;
        }
        
        margin: 0;
        background-color: #303030;
        flex-grow: 1;
        width: 100%;
        min-height: 100vh;
        color: #fff;
        padding: 0 0.75rem;
        .nav-height-offset {
            height: 150px;
        }
    }
}
</style>
