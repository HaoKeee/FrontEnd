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
                <el-divider></el-divider>
                <div class="card-desc">
                    <ul>
                        <li>
                            <i class="iconfont">&#xe672;</i>
                            {{  status  }}/{{ category }}
                        </li>
                        <li>
                            <i class="iconfont">&#xe689;</i>
                            {{  timeDelta  }}
                        </li>
                        <li>
                            <i class="iconfont">&#xe68a;</i>
                            {{  peopleStared  }} 次 收藏
                        </li>
                        <li>
                            <i class="iconfont">&#xe654;</i>
                            <div class="hot-bar-back"><i class="hot-bar" :style="{'width': rate}"></i></div>
                        </li>
                    </ul>
                    <el-divider direction="vertical"></el-divider>
                    <div class="intro">
                        {{ intro }}
                    </div>
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
            hot: 0.35,
            showAside: false,
            peopleViewed: 999,
            favoritedNum: 999,
            updated_time: '2021/05/01 00:00:00',
        }
    },
    computed: {
        rate() {
            if (this.hot <= 1) {
                const rate = this.hot*75
                return rate.toString() + 'px'
            } else {
                return '75px'
            }
            
        },
        peopleStared() {
            if (this.favoritedNum <= 999){
                return this.favoritedNum
            } else {
                return '999+'
            }
        },
        peopleCommented() {
            if (this.commentsNum <= 999){
                return this.commentsNum
            } else {
                return '999+'
            }
        },
        timeDelta() {
            const milliSeconds = Date.now() - Date.parse(this.updated_time)
            const minutes = parseInt(milliSeconds/60000)
            const hours = parseInt(minutes/60)
            const days = parseInt(hours/24)
            const months = parseInt(days/30)
            const years = parseInt(days/365)
            if (years > 0){
                return years + '年前'
            } else if (years === 0&&months > 0){
                return months + '月前'
            } else if (months === 0&&days > 0){
                return days + '天前'
            } else if (days === 0&&hours > 0){
                return hours + '小时前'
            } else if (hours === 0&&minutes > 0){
                return minutes + '分钟前'
            } else{
                return '最近更新'
            }
        }
    }
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
        .el-divider--vertical {
            height: 100%;
        }
        .comic-info {
            display: flex;
            flex-direction: column;
            overflow: hidden;

            .card-title {
                display: block;
                height: 12%;
                line-height: 20px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .el-divider--horizontal {
                margin: 1% 0px;
                line-height: 1px;
            }
            .card-desc {
                display: flex;
                height: 86%;
                ul {
                    list-style: none;
                    padding: 0px;
                    margin-bottom: 0;
                    li {
                        height: 25%;
                        width: fit-content;
                        white-space: nowrap;
                        .hot-bar-back {
                            display: inline-block;
                            margin-left: 2px;
                            width: 75px;
                            height: 10px;
                            border-radius: 5px;
                            background-color: white;
                            align-self: center;
                            .hot-bar {
                                display: block;
                                width: 75px;
                                height: 10px;
                                border-radius: 5px;
                                background-color: red;
                                align-self: center;
                            }
                        }
                    }
                }
                .intro {
                    display: -webkit-box;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-clamp: 2;
                    -webkit-line-clamp: 2;
                }

            }
            // .card-tag {
            //     width: fit-content;
            //     height: 15px;
            //     line-height: 15px;
            //     padding: 5px 10px;
            //     text-align: center;
            //     white-space: nowrap;
            //     border-radius: 2px;
            //     background: linear-gradient(45deg,#18779a 1%,#1ec9e5 64%,#3fd3e2 97%);
            // }
            // .card-intro {
            //     padding: 5px 10px;
            //     overflow: hidden;
            //     text-overflow:ellipsis;
            // }
            // .card-infos {
            //     height: 65px;
            //     ul {
                    
            //         list-style: none;
            //         align-self: flex-end;
            //         margin: 0;
            //         li {
            //             display: flex;
            //             height: 25px;
            //             div {
            //                 width: 50%;
            //             }
            //         }
            //         li:first-child {
            //             margin: 5px 0px;
            //         }
            //     }
            // }
        }
    }
}
</style>