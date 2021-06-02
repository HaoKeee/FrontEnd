
<!-- 单行单个item的样式，测试例 -->
<template>
  <van-card :thumb="imgSrc" :title="title">
    <template #title>
      <v-tag>
        {{title}} 更新至 {{chapterNum}}话
      </v-tag>
    </template>

    <template #desc>
      <table>
        <tr>
          {{startNum}}
        </tr>
        <tr>
          <td>
            <van-icon name="underway">{{timeDelta}}</van-icon>
          </td>
          <td>
            <van-icon name="fire">{{peopleViewed}} 次 查看</van-icon>
          </td>
        </tr>
        <tr>
          <td>
            <van-icon name="star">{{peopleStared}} 次 收藏</van-icon>
          </td>
          <td>
            <van-icon name="comment">{{peopleCommented}} 条 评论</van-icon>
          </td>
        </tr>
      </table>
    </template>
  </van-card>
</template>

<script>
import Icon from 'vant/es/icon'
export default {
  name: 'ComicItem',
  data () {
    return {
      imgSrc: 'http://haokeee.club/images/cover.png',
      title: 'AAAAAAAAAAAAAAAAAAAA',
      chapterNum: 176,
      starNum: 5,
      updated_time: '2021/05/01 00:00:00',
      peopleViewed: 999,
      favoritedNum: 789,
      commentsNum: 34
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
  methods: {
    goDetailPage(){
      //跳转到ComicDetail.vue,路由参数待定
      console.log('router.push')
      // this.$router.push({})
    }
  }
}
</script>

<style>
.item-container {
  width: 100px;
  height: 250px;
}
.item-container img{
  width: 70%;
  height: 90%;
}
</style>
