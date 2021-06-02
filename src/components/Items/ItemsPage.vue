<template>
    <div class="container">
        <nav height="10%">12</nav>
        <div class="nav-height-offset"> </div>
        <main>
            <item></item>
            <!-- <items-container>

            </items-container> -->
        </main>
        <footer>444</footer>
    </div>
</template>

<script>
import Item from './Item.vue'
import ItemsContainer from './ItemsContainer.vue'
export default {
    name: 'ItemsPage',
    data() {
        return {
            msg: 'Hao-Ke!'
        }
    },
    components:{
        ItemsContainer: ItemsContainer,
        Item: Item,
    }
}
</script>

<style lang="less">
.container{
    display: block;
    @nav-height: 100px;
    nav {
        position: fixed;
        top: 0px;
        width: 100%;
        height: @nav-height;
    }
    .nav-height-offset {
        top: 0px;
        height: @nav-height;
    }
    main {
        background-color: #303030;
        border: 5px solid#fff;
        border-radius: 5px;
        box-sizing: border-box;
        min-height: 100vh;
        width: 80%;
        padding: .5rem;
        margin: 0 auto;
    }
}
</style>
