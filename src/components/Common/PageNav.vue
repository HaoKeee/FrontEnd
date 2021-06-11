<template>
    <nav class="nav">
        <div class="nav-body">
            <div class="nav-body-logo" :style="showContent">
                <el-image fit="contain" src="/src/assets/images/logo.png" alt="logo"></el-image>
            </div>
            <div :class="searchBarClassName">
                <el-input v-model="searchContent" size="small" @change="handleSearchInput" type="text"><template #append><el-button size="small" icon="el-icon-search"></el-button></template></el-input>
            </div>
            <div class="search-trigger" :style="smallScreenSearchBtn">
                <el-button @click="handleSmallScreenSearch" size="small" icon="el-icon-search"></el-button>
            </div>
            <div v-if="loged" class="nav-body-user" :style="showContent">
                <user-drop-down></user-drop-down>
            </div>
            <div v-else class="nav-body-login" :style="showContent">
                <span>登录</span>
                <el-divider direction="vertical"></el-divider>
                <span>注册</span>
            </div>
        </div>
        <div class="nav-partition">
            <category></category>
        </div>
    </nav>
</template>
<script>
import { ref } from 'vue';
import Category from './Category.vue';
import UserDropDown from './UserDropDown.vue';

export default {
    name: 'PageNav',
    data() {
        return {
            loged: true,
            showContent: {
                'display': 'block',
            },
            searchBarClassName: 'nav-body-search',
            smallScreenSearchBtn: {
                'display': '',
            }
        }
    },
    components: {
        UserDropDown: UserDropDown,
        Category: Category,
    },
    methods: {
        handleSearchInput() {
            console.log(this.searchContent);
        },
        handleSmallScreenSearch() {
            this.showContent.display = 'none';
            this.searchBarClassName = 'nav-body-search-2';
            this.smallScreenSearchBtn.display = 'none';
        },
    },
    setup() {
        return {
            searchContent: ref('')
        }
    }
};
</script>
<style lang="less">
.nav {
    position: fixed;
    width: 100%;
    height: 90px;  // 注意与ItemsPage.vue下的.nav-height-offset高度相对应
    background-color: orange;
    z-index: 999;
    .nav-body {
        display: flex;
        width: 100%;
        align-items: center;
        flex-flow: row nowrap;
        justify-content: space-between;
        background-color: rgba(33,33,33,.8);
        align-content: flex-start;
        padding: 5px 0px;
        height: 40px;
        .nav-body-logo {
            float: left;
            margin-left: 25px;
            width: 25px;
            height: 40px;
        }
        .nav-body-search {
            flex: 0 1 720px;
            margin: 15px auto;
            @media @max-1024-screen {
                flex-basis: 50%;
            }
            @media @max-480-screen {
                display: none;
            }
        }
        .nav-body-search-2 {
            flex: 0 1 90%;
            margin: 0 auto;
        }
        .search-trigger {
            display: none;
            width: 30%;
            button {
                width: 100%;
            }
            @media @max-480-screen {
                display: block;
            }
        }
        .nav-body-user {
            margin-right: 25px;
            white-space: nowrap;
        }
        .nav-body-login {
            margin-right: 25px;
            white-space: nowrap;
        }
    }
}
</style>