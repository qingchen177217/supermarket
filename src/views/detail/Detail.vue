<template>
   <div class="detail">
      <detail-main-bar class="fixed"></detail-main-bar>
      <scroll class="content"
      :pullUpLoad="true"
      >
       <detail-swiper :topImages="topImages"/>
        <detail-base-info :goodsInfo="goodsInfo"/>
        <detail-shop :shop="shopInfo"/>

      </scroll>  
   </div>
</template>



<script>

import DetailMainBar from './child/detailMainBar.vue'
import {getdetail,Goods} from '@/network/detail.js'
import DetailSwiper from './child/detailSwiper.vue'
import DetailBaseInfo from './child/detailBaseInfo.vue'
import Scroll from '@/components/common/scroll/scroll.vue'
import DetailShop from './child/detailShop.vue'
export default {
  name: 'Detail',
  components:{
    DetailMainBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShop,
  },
  data(){
    return{
        iid:null,
        topImages:[],
        goodsInfo:{},
        shopInfo:{}
    }
  },
  created(){
     this.iid=this.$route.params.iid
     getdetail(this.iid).then(res=>{
        const data=res.result;
          this.topImages=data.itemInfo.topImages
          this.goodsInfo=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
          this.shopInfo=data.shopInfo;
     })
  }
}
</script>

<style>
.detail{
    position:relative;
    height: 100vh;
    background-color: #fff;
    z-index:1;
}
.content{
    height:calc(100% - 44px);
    background-color: #fff;
}


</style>
