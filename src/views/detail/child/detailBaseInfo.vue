<template>
   <div v-if="Object.keys(goodsInfo).length !==0" class="base-info">
        <div class="title">{{goodsInfo.title}}</div>
        <div class="price">
             <span class="price-1">{{goodsInfo.price}}</span>
             <span class="price-2">{{goodsInfo.oldPrice}}</span>
             <span v-if="goodsInfo.discount" class="discount">
             {{goodsInfo.discount}}</span>
        </div>
        <div  class="columns">
              <div v-for="item in goodsInfo.columns">{{item}}</div>
        </div>
        <div class="foot">
               <div v-for="item in goodsInfo.service" class="foot-1">
                <img :src="item.icon" alt="">
                {{item.name}}
               </div>
        </div>
   </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props:{
    goodsInfo:{
        type:Object,
        default(){
            return {}
        }
    }
  }

}
</script>

<style scoped>
       .base-info{
          margin-top:18px;
          padding:0 15px;
       }
       .title{
        font-size:15px;
       }
       .price{
        margin:10px 0;
        height: 40px;
        line-height: 40px;
       }
       .price-1{
        font-size:25px;
        color:var(--color-tint);
       }
       .price-2{
        margin-left:10px;
        font-size:12px;
        color:rgb(80, 73, 73);
        text-decoration:line-through;
       }
       .discount{
        padding:2px 4px;
        background-color:var(--color-tint);
        color:#fff;
        border-radius:5px;
        font-size:12px;
        position :relative;
        top:-8px;
        left:2px;
       }
       .columns{
        margin-top:10px;
        line-height: 30px;
        display:flex;
        font-size:13px;
        border-bottom:0.7px solid rgba(211, 208, 208, 0.3);
        justify-content: space-between;
        font-size:12px;
       }
       .foot{
        height: 60px;
        display: flex;
        font-size:10px;
        line-height: 60px;
        justify-content: space-between;
       }
       .foot img{
          width: 10px;
          height: 10px;
       }
</style>