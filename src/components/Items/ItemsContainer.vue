<template>
    <div class="items-container">
        <page-selector></page-selector>
            <div class="flex-box">
                <item></item>
                <item></item>
                <item></item>
                <item></item>
                <item></item>
                <item></item>
                <item></item>
                <item></item>
                <item></item>
                <item></item>
            </div>
        <page-selector></page-selector>
    </div>
</template>

<script>
import Item from './Item.vue'
import PageSelector from './PageSelector.vue'
export default {
    name: 'ItemsContainer',
    data() {
        return {
            msg: 'Hello World!'
        }
    },
    components: {
        PageSelector: PageSelector,
        Item: Item,
    }
}
</script>
<style lang="less">
.items-container {
    margin: 1rem 0.5rem 1rem 0.5rem;
    border-style: hidden;
    border-radius: .25rem;
    padding: 15px 0;
    box-sizing: border-box;
    background-color: rgba(66,66,66,.95);
    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
    border-style: hsla(0,0%,100%,.1) hsla(0,0%,100%,.07) hsla(0,0%,100%,.04);
    clear: both;
    .flex-box {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-items: flex-start;
    }
}
</style>