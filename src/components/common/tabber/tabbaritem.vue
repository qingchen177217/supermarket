<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="!isActive"> <slot  name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
   name:'TabBarItem',
   props:{
     path:String,
     activeColor:{
      type:String,
      default:'red'
     }
   },
  //  data(){
  //   return {
  //       // isActive:false
  //   }
  //  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1;
      // return this.$route.path==this.path;
      // 这个indexOf就是检查当前活跃的路由
      // this.$route.path代表的是当前活跃的路由
    },
    activeStyle(){
      return this.isActive ?{color:this.activeColor}:{}
    }
   },
   methods:{
    itemClick(){
      this.$router.replace(this.path);
    }
   }
}
</script>

<style>
  .tab-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size:14px;
  margin-top: 3px;
}

</style>