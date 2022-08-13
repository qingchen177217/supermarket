<template>
   <div  class="wrapper" ref="wrapper">
    <div class="content">
        <slot>

        </slot>
    </div>
   </div>
</template>

<script>
import Bscroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import ObserveImage from '@better-scroll/observe-image';
import ObserveDOM from '@better-scroll/observe-dom';

Bscroll.use(ObserveDOM)
Bscroll.use(ObserveImage)
Bscroll.use(Pullup)
export default {
  name: 'Scroll',
  props:{
    probeType:{
        type:Number,
        default:0
    },
    pullUpLoad:{
        type:Boolean,
        defult:false
    }
  },
  data(){
    return{
        scroll:null
    }
  },
  mounted(){
    this.scroll=new Bscroll(this.$refs.wrapper,{
         click:true,
         probeType:this.probeType,
         pullUpLoad:this.pullUpLoad,
         observeImage: true,
           observeDOM: true ,
           keepalive:true
    })
    if(this.probeType==2||this.probeType===3){
        this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
    })}
    if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
           this.$emit('pullingUp')
        })
    }
  },
  methods:{
    scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
    }
    ,
    refresh(){
        this.scroll && this.scroll.refresh()
    },
    finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
    },
    getScrollY(){
        return  this.scroll.y;
    }
  }
}
</script>

<style scoped>
</style>
