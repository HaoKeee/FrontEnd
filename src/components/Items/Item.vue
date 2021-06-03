<template>
  <div class="grid-comic-item">
      <div class="tag">{{status}}/{{category}}</div>
      <span class="fold"></span>
      <img :src="imgSrc" :alt="title">
      <ul class="meta">
          <li>
            <i class="iconfont">&#xe689;</i> {{timeDelta}}
          </li>
          <li>
            <i class="iconfont">&#xe68a;</i> {{peopleStared}} 次 收藏
          </li>
          <li>
            <el-rate v-model="starNum" text-color="#ff9900" score-template="{value}" allow-half readonly></el-rate>
          </li>
      </ul>
      <div class="title">{{title}} 更新至 {{chapterNum}}话</div>
  </div>
</template>
<script>
import { ElRate } from 'element-plus'
export default {
    name: 'Item',
    data() {
        return {
            title: '小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆',
            imgSrc: 'src/assets/images/cover.jpg',
            status: '连载',
            category: '冒险',
            chapterNum: 176,
            starNum: 3.5,
            peopleViewed: 999,
            favoritedNum: 999,
            updated_time: '2021/05/01 00:00:00',
            
        }
    },
  computed: {
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
  components: {
    [ElRate.name]: ElRate,
  }
}
</script>
<style lang="less">
.grid-comic-item{
    align-items: center;
    position: relative;
    display: inline-block;
    width: 10%;
    height: 200px;
    padding: 1%;
    margin: 10px 1%;
    * {
        position: absolute;
    }
    .tag {
        text-align: left;
        padding: 2px 10%;
        top: 10px;
        color: #fff;
        left: -10px;
        height: 22px;
        border-radius: 2px;
        background: linear-gradient(45deg,#18779a 1%,#1ec9e5 64%,#3fd3e2 97%);;
        z-index: 9;
    }
    .fold {
        top: 10px;
        left: -10px;
        display: block;
        border-top: 25px solid transparent;
        border-bottom: 17px solid transparent;
        border-right: 22px solid #c3c3c3;
        width: 0px;
        height: 0px;
    }
    img {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
    .title {
        width: 90%;
        padding: 7px 5%;
        background-color: rgba(100,101,102, 0.7);
        border: 1% solid #000;
        border-radius: 3px;
        left: 0%;
        bottom: 0%;
        color: #fff;
        letter-spacing: 1px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 11px;
    }
    ul {
        padding: 0px;
        left: 0%;
        margin: auto auto;
        top: 3em;
        max-width: 80%;
        list-style-type: none;
        * {
            position: relative;
            border-radius: 2px;
        }
        li {
          display: block;
          margin: 5px 0px;
          color: #fff;
          background-color: rgba(100,101,102, 0.7);
          width: fit-content;
          white-space: nowrap;
          text-overflow: clip;
          max-width: 100%;
          height: 20px;
          padding: 2px 4px;
        }
    }
}
</style>