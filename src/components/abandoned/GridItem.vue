<template>
    <div class="grid-comic-item" ref="container">
            <div class="tag">{{status}}/{{category}}</div>
            <span class="fold"></span>
        <img :src="imgSrc" :alt="title">
        <ul class="meta">
            <li>
                <van-icon name="clock-o" />{{timeDelta}}
            </li>
            <li>
                <van-icon name="comment-o" />{{peopleCommented}} 条 评论
            </li>
            <li>
                <van-icon name="like-o" />{{peopleStared}} 次 收藏
            </li>
            <li>
                <van-icon name="fire-o" />
                <van-rate v-model="starNum" :count="5" size="10" gutter="1" color="yellow" readonly allow-half />
            </li>
        </ul>
        <div class="title">{{title}} 更新至 {{chapterNum}}话</div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Icon,Rate } from 'vant';
import 'vant/es/icon/style';
import 'vant/es/rate/style';

export default {
    name: 'GridComicItem',
    data() {
        return {
            title: '小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆小林家的龙女仆',
            imgSrc: 'src/assets/images/cover.jpg',
            status: '连载',
            category: '冒险',
            chapterNum: 176,
            starNum: 2.5,
            peopleViewed: 999,
            favoritedNum: 999,
            commentsNum: 73,
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
        [Icon.name]: Icon,
        [Rate.name]: Rate,
    },
}
</script>

<style>
.grid-comic-item{
    align-items: center;
    position: relative;
    display: block;
    width: 300px;
    height: 450px;
    left: 100px;
}
.grid-comic-item *{
    position: absolute;
}
.grid-comic-item .tag{
    text-align: left;
    padding: 2px 20px;
    top: 10px;
    color: #fff;
    left: -10px;
    height: 22px;
    border-radius: 2px;
    background: linear-gradient(45deg,#18779a 1%,#1ec9e5 64%,#3fd3e2 97%);;
    z-index: 9;
}
.grid-comic-item .fold{
    top: 10px;
    left: -10px;
    display: block;
    border-top: 25px solid transparent;
    border-bottom: 17px solid transparent;
    border-right: 22px solid #c3c3c3;
    width: 0px;
    height: 0px;
}
.grid-comic-item img{
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit:cover;
    z-index: 1;
}
.grid-comic-item ul{
    padding: 0px;
    top: 3em;
    z-index: 10;
    list-style-type: none;
}
.grid-comic-item ul *{
    position: relative;
    margin: 5px 0px;
    border-radius: 2px;
}
.grid-comic-item ul li{
    background-color: rgba(100,101,102, 0.3);
    width: fit-content;
    padding: 0px 10px 0px 5px;
    margin: 5px 0px 5px 0px;
}
.grid-comic-item ul li i{
    margin: 0px 5px 0px 0px;
}
.grid-comic-item .title{
    width: 94%;
    padding: 7px 3% 7px 3%;
    background-color: rgba(100,101,102, 0.7);
    border-radius: 3px;
    bottom: 0%;
    color: #fff;
    letter-spacing: 1px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 11px;
    z-index: 10;
}
</style>