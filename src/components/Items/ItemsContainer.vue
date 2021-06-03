<template>
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
    <item></item>
    <item></item>
    <item></item>
</template>

<script>
import Space from 'element-plus'
import Item from './Item.vue'
export default {
    name: 'ItemsContainer',
    data() {
        return {
            msg: 'Hello World!'
        }
    },
    components: {
        [Space.name]: Space,
        Item: Item,
    }
}
</script>
<style lang="less">

</style>>