<template>
    <div class="container">
        <page-nav>12</page-nav>
        <main>
            <div class="nav-height-offset"></div>
            <!-- 此处可填充如banner等元素 -->
            <items-container :items="items" />
        </main>
        <page-footer>444</page-footer>
    </div>
</template>

<script>
import axios from 'axios'
import PageNav from '../common/PageNav.vue'
import PageFooter from '../common/PageFooter.vue'
import ItemsContainer from './ItemsContainer.vue'
export default {
    name: 'ItemsPage',
    data() {
        return {
            msg: 'Hao-Ke!',
            items: [],
        }
    },
    components:{
        PageNav: PageNav,
        ItemsContainer: ItemsContainer,
        PageFooter: PageFooter,
    },
    created() {
        this.GetItemsData()
    },
    methods: {
        GetItemsData() {
            axios
                .get('/src/assets/data/ItemsData.json')
                .then(response => (this.items = response.data));
        },
    },
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
            height: 100px;
        }
    }
}
</style>
