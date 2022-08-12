<template>
   <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot>

        </slot>
    </div>
   </div>
</template>

<script>
import bscroll from 'better-scroll';
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
    this.scroll=new bscroll(this.$refs.wrapper,{
         click:true,
        //  freeScroll:true
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
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
    }
  }
}
</script>

<style scoped>

</style>
