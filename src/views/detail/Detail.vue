<template>
   <div id="detail">
      <detail-main-bar></detail-main-bar>
      <detail-swiper :topImages="topImages"></detail-swiper>
   </div>
</template>

<script>
import DetailMainBar from './child/detailMainBar.vue'
import {getdetail} from '@/network/detail.js'
import DetailSwiper from './child/detailSwiper.vue'
export default {
  name: 'Detail',
  components:{
    DetailMainBar,
    DetailSwiper,
  },
  data(){
    return{
        iid:null,
        topImages:[],
    }
  },
  created(){
     this.iid=this.$route.params.iid
     getdetail(this.iid).then(res=>{
          this.topImages=res.result.itemInfo.topImages
     })
  }
}
</script>

<style scoped>

</style>
