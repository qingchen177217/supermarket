<template>
   <div class="hy-swiper">
          <div class="swiper">
            <slot></slot>
          </div>
   </div>
</template>

<script>
export default {
  name: 'SwiperDodo',
  params:{

  },
  data(){
    return{
        slideCount:0,//需要操作的图片数量
        imgWidth:0//图片的宽度
    }
  },
  mounted:function (){
     this.handleDom();
  },
  methods:{
     handleDom(){
         let slide=document.getElementsByClassName('slide');
         let swiper=document.querySelector('.swiper');

         this.slideCount=slide.length;
         this.imgWidth=swiper.getBoundingClientRect().width;

        
        
     }
  }
}
</script>

<style>
    .swiper{
        display:flex;
        width: 100%;
        overflow: hidden;
    }
</style>