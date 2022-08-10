<template>
   <div class="goodsitem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsitem-font">
        <p>{{goodsItem.title}}</p>
        <span class="price">￥{{goodsItem.price}}</span>
        <span class="collect">已收藏{{goodsItem.cfav}}件</span>
        <div class="bottom">立即抢购</div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props:{
    goodsItem:{
       type:Object,
       default(){
        return {}
       }
    }
  }
}
</script>
<style> 
      .goodsitem{
        padding-bottom:93px;
        width: 47%;
        position:relative;
      }
      .goods img{
        width: 100%;
        border-radius:5px;
      }
      .goodsitem-font {
        font-size:14px;
        overflow: hidden;
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        text-align: left;
      }
      .goodsitem-font p{
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom:3px;
      }
      .price{
        color:red;
        margin-right:20px;
        font-size:16px;
      }
      .collect{
        position :relative;
        color:#ccc;
        font-size:9px;
      }
      .collect::before{
        position:absolute;
        left:-15px;
        top:-4px;
        content:'';
        width: 14px;
        height: 14px;
        position:absolute;
        display:inline-block;
        background: url('@/assets/img/common/collect.svg')0 0/14px 14px;
      }
      .bottom{
        position:relative;
        width: 100%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background-color: #ff5777;
        border-radius:5px;
        color:white;
        font-size:14px;
        margin:5px 0 15px 0;
      }
      .bottom::before{
        content:'';
        position:absolute;
        left:36px;
        top:5px;
        width: 18px;
        height: 18px;
        position:absolute;
        display:inline-block;
        background: url(@/assets/img/tabbar/shop.svg)0 0/18px 18px;
      }
</style>
