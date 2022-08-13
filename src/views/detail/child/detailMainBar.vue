<template>
   <div>
    <main-bar class="nav-bar">
        <div slot="left" class="back" @click="backClick">
            <img src="@/assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
            <div v-for="(item,index) in titles" 
            class="title-item"
            :class="{active:index==currentIndex}"
            @click="titleClick(index)"
            >{{item}}</div>
        </div>
     </main-bar>
   </div>
</template>

<script>
import MainBar from '@/components/common/Mainbar/MainBar.vue'

export default {
  name: 'DetailMainBar',
  components:{
     MainBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
      titleClick(index){
        this.currentIndex=index;
      },
      backClick(){
        this.$router.back()
        // this.$router.go(-1)和上面的等价
      }
  }
}
</script>

<style scoped>
   .nav-bar{
    position: relative;
    z-index:9;
    background-color:#fff;
    }
     .title{
        display:flex;
        justify-content: space-around;
     }
     .title-item{
        font-size:14px;
        font-weight:700;
     }
     .active{
        color:var(--color-tint)
     }
</style>
