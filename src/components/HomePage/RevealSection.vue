<template>
    <div class="reveal-section">
        <div class="reveal-title"></div>
        <items-container :disableAside="disableAside" :disableTag="disableTag"></items-container>
    </div>
</template>

<script>
import ItemsContainer from '../items/ItemsContainer.vue'
export default {
    name: 'RevealSection',
    data() {
        return {
            'disableAside': true,
            'disableTag': true,
        }
    },
    components: {
        'ItemsContainer': ItemsContainer,
    },
}
</script>
<style lang="less">
@reveal-height: 400px;
.reveal-section {
    background-color: orangered;
    height: @reveal-height;
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
    color: #fff;
    padding: 0 0.75rem;
}
</style>