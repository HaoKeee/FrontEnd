<template>
    <div class="container">
        <nav height="10%">12</nav>
        <div class="nav-height-offset"> </div>
        <main>
            <items-container />
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
        Item: Item,
        ItemsContainer: ItemsContainer,
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
        display: flex;
        justify-content: left;
        align-items: flex-start;
        flex-wrap: wrap;
        background-color: #303030;
        border: 1px solid#fff;
        border-radius: 5px;
        box-sizing: border-box;
        width: 80%;
        padding: 15px 1%;
        margin: 10px auto;
    }
}
</style>
