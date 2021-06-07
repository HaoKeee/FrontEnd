<template>
  <div class="grid">
    <div class="grid-content" @mouseenter="switchInfo" @mouseleave="switchInfo">
      <div class="tag">{{status}}/{{category}}</div>
      <span class="fold"></span>
      <el-image :src="imgSrc" fit="fit" :alt="title"></el-image>
      <transition enter-active-class="item-aside-on" leave-active-class="item-aside-off">
        <ul class="meta" v-show="showAside">
          <li>
            <i class="iconfont">&#xe689;</i>
            <span>{{timeDelta}}</span>
          </li>
          <li>
            <i class="iconfont">&#xe68a;</i><span>{{peopleStared}} 次 收藏</span>
          </li>
          <li class="hot-row">
            <i class="iconfont">&#xe654;</i>
            <div class="hot-bar-back"><i class="hot-bar"></i></div>
          </li>
        </ul>
      </transition>
      <transition enter-active-class="item-title-on" leave-active-class="item-title-off">
        <div class="item-title" :style="titleStyle">{{title}} 更新至 {{chapterNum}}话</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Item',
    data() {
        return {
          title: '小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆',
          titleStyle: {
            'white-space': 'nowrap',
          },
          imgSrc: 'src/assets/images/cover.png',
          status: '连载',
          category: '冒险',
          chapterNum: 176,
          hot: 3.5,
          showAside: false,
          peopleViewed: 999,
          favoritedNum: 999,
          updated_time: '2021/05/01 00:00:00',
        }
    },
  computed: {
    rate() {
      return this.hot*75
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
  },
  methods: {
    switchInfo() {
      this.showAside = this.showAside == true ? false : true
      this.titleStyle.whiteSpace = this.titleStyle.whiteSpace == 'normal' ? 'nowrap' : 'normal'
      // this.titleStyle.height = this.titleStyle.height == '80px' ? 'auto' : '80px'
    },
  },
}
</script>
<style lang="less">
@1280-item-width: 16.666667%;
@1024-item-width: 20%;
@768-item-width: 25%;
@640-item-width: 33.333333%;
@min-item-width: 50%;
@item-height: 262px;
@item-margin: 16px;

.grid{
  font-size: 14px;
  width: @min-item-width;
  margin: 0 0 @item-margin 0;
  @media @min-640-screen {
      width: @640-item-width;
  }
  @media @min-768-screen {
      width: @768-item-width;
  }
  @media @min-1024-screen {
      width: @1024-item-width;
  }
  @media @min-1280-screen {
      width: @1280-item-width;
  }
  .grid-content {
    display: block;
    position: relative;
    margin: 0 @item-margin;
    .tag {
      position: absolute;
      text-align: left;
      padding: 2px 10%;
      top: 10px;
      color: #fff;
      white-space: nowrap;
      left: -10px;
      height: 20px;
      border-radius: 2px;
      background: linear-gradient(45deg,#18779a 1%,#1ec9e5 64%,#3fd3e2 97%);
      z-index: 1;
    }
    .fold {
      position: absolute;
      top: 10px;
      left: -10px;
      display: block;
      border-top: 24px solid transparent;
      border-bottom: 15px solid transparent;
      border-right: 10px solid #c3c3c3;
      width: 0px;
      height: 0px;
    }
    // img {
    //   top: 0px;
    //   left: 0px;
    //   bottom: 0px;
    //   right: 0px;
    //   width: 100%;
    //   object-fit: cover;
    // }
    .item-title {
      position: absolute;
      display: inline-block;
      padding: 5px 5%;
      background-color: rgba(100,101,102, 0.5);
      border: 1% solid #000;
      border-radius: 3px;
      left: 0%;
      right: 0%;
      bottom: 0%;
      color: #fff;
      letter-spacing: 1px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }
    ul {
      position: absolute;
      display: block;
      list-style: none;
      top: 60px;
      left: 0px;
      width: 100px;
      max-width: 80%;
      padding: 0;
      li {
        display: list-item;
        left: -100%;
        float: left;
        border-radius: 2px;
        margin-bottom: 10px;
        max-width: 100%;
        padding: 1px 10px 1px 5px;
        background: rgba(100, 101, 102, 0.4);
        white-space: nowrap;
        clear: both;
        i {
          margin-right: 5px;
        }
        
        .hot-bar-back {
          display: block;
          width: 75px;
          height: 10px;
          border-radius: 5px;
          background-color: white;
          align-self: center;
          .hot-bar {
            display: block;
            width: 45px;
            height: 10px;
            border-radius: 5px;
            background-color: red;
            align-self: center;
          }
        }
      }
      li:nth-last-child(1) {
        * {
          display: inline-block;
        }
      }

    }
    .item-aside-on {
      animation: .25s show-item-aside;
    }
    .item-aside-off {
      animation: .25s hide-item-aside;
    }
    @keyframes show-item-aside {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes hide-item-aside {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    .item-title-on {
      animation: .25s expand-item-title;
    }
    .item-title-off {
      animation: .25s narrow-item-title;
    }
    @keyframes expand-item-title {
      0% {
        height: 16px;
      }
      100% {
        height: 80px;
      }
    }
    @keyframes narrow-item-title {
      0% {
        height: 80px;
      }
      100% {
        height: 16px;
      }
    }
  }
}

</style>