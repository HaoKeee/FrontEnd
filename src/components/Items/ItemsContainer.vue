<template>
    <div class="items-container">
        <page-selector></page-selector>
            <div class="flex-box">
                <component :is="itemStyle" v-for="item of items" :key="item" :data="item" :disableAside="disableAside" :showTag="disableTag"></component>
                <!-- <grid-item v-for="item of items" :key="item" :data="item"></grid-item> -->
                <!-- <card-item v-for="item of items" :key="item" :data="item"></card-item> -->
            </div>
        <page-selector></page-selector>
        <button @click="SwitchItemStyle">切换显示</button>
    </div>
</template>

<script>
// import { http } from '../../assets/api/api'
import axios from 'axios'
import CardItem from './CardItem.vue'
import GridItem from './GridItem.vue'
import PageSelector from '../common/PageSelector.vue'
export default {
    name: 'ItemsContainer',
    data() {
        return {
            items: []
        }
    },
    props: {
        itemStyle: {
            type: String,
            default() {
                return 'grid-item';
            }
        },
        disableAside: {
            type: Boolean,
            default() {
                return false;
            }
        },
        disableTag: {
            type: Boolean,
            default() {
                return false;
            }
        },
    },
    components: {
        PageSelector: PageSelector,
        GridItem: GridItem,
        CardItem: CardItem,
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
        SwitchItemStyle() {
            this.itemStyle = this.itemStyle == 'grid-item' ? 'card-item' : 'grid-item';
        }
    },
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