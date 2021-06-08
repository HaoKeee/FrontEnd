<template>
    <div class="card-item">
        <div class="card-content">
            <img :src="imgSrc" :alt="title">
            <el-divider direction="vertical"></el-divider>
            <!-- <div class="comic-info">
                <a class="title"></a>
                <div class="tag"></div>
                <div class="intro"></div>
                <div class="info"></div>
            </div> -->
            <div class="comic-info">
                <a class="card-title">{{ title }}</a>
                <div class="card-tag">
                    {{status}}/{{category}}
                </div>
                <div class="card-intro">
                    {{ intro }}
                </div>
                <div class="card-infos">
                    <ul>
                        <li>
                            <div>1</div>
                            <div>2</div>
                        </li>
                        <li>
                            <div>3</div>
                            <div>4</div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- <el-image :src="imgSrc" fit="contain" :alt="title"></el-image> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'GridItem',
    data() {
        return {
            title: '小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆',
            url: 'https://www.baidu.com',
            status: '连载',
            category: '冒险',
            intro: '弹性盒子是 CSS3 的一种新的布局模式。CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。弹性盒子是 CSS3 的一种新的布局模式。CSS3 弹性盒（ Flexible Box 或 flexbox），是弹性盒子是 CSS3 的一种新的布局模式。CSS3 弹性盒（ Flexible Box 或 flexbox），是弹性盒子是 CSS3 的一种新的布局模式。CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。弹性盒子是 CSS3 的一种新的布局模式。CSS3 弹性盒（ Flexible Box 或 flexbox），是弹性盒子是 CSS3 的一种新的布局模式。CSS3 弹性盒（ Flexible Box 或 flexbox），是',
            imgSrc: 'src/assets/images/cover.png',
        }
    },
}
</script>
<style lang="less">
@1024-item-width: 100%;
@item-margin: 16px;
@item-height: 245px;
@content-padding: 15px;
.card-item {
    font-size: 14px;
    width: 50%;
    margin: 0 0 0 0;
    justify-content: space-between;
    background-color: aliceblue;
    height: @item-height;
    padding: 10px 0px;
    @media @max-1024-screen {
        width: @1024-item-width;
    }
    .card-content {
        display: flex;
        background-color: black;
        padding: @content-padding 2%;
        height: @item-height - @content-padding*2;
        img {
            height: 100%;
        }
        .el-divider {
            height: 100%;
        }
        .comic-info {
            flex-direction: column;
            overflow: hidden;

            .card-title {
                display: block;
                height: 20px;
                line-height: 20px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .card-tag {
                width: fit-content;
                height: 15px;
                line-height: 15px;
                padding: 5px 10px;
                text-align: center;
                white-space: nowrap;
                border-radius: 2px;
                background: linear-gradient(45deg,#18779a 1%,#1ec9e5 64%,#3fd3e2 97%);
            }
            .card-intro {
                padding: 5px 10px;
                overflow: hidden;
                text-overflow:ellipsis;
            }
            .card-infos {
                height: 65px;
                ul {
                    
                    list-style: none;
                    align-self: flex-end;
                    margin: 0;
                    li {
                        display: flex;
                        height: 25px;
                        div {
                            width: 50%;
                        }
                    }
                    li:first-child {
                        margin: 5px 0px;
                    }
                }
            }
        }
    }
}
</style>