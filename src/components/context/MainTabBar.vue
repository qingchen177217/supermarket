<template>
  <div>
    <tab-bar>
         <tab-bar-item path="/home" >
         <img class="img" slot="item-icon" src="../../assets/img//tabbar/home.svg" alt="">
         <img class="img" slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg" alt="">
         <div slot="item-text">首页</div>
         </tab-bar-item>
          <tab-bar-item path="/cart">
         <img class="img" slot="item-icon" src="../../assets/img/tabbar/category.svg" alt="">
         <img class="img" slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg" alt="">
         <div slot="item-text">购物车</div>
         </tab-bar-item>
          <tab-bar-item path="/category">
         <img  class="img" slot="item-icon" src="../../assets/img/tabbar/shopcart.svg" alt="">
          <img  class="img" slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg" alt="">
         <div slot="item-text">应用</div>
         </tab-bar-item>
          <tab-bar-item path="/profile">
         <img  class="img" slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
         <img  class="img" slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg" alt="">
         <div slot="item-text">我的</div>
         </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import TabBar from "../common/tabber/TabBar.vue";
import TabBarItem from "../common/tabber/tabbaritem.vue";
export default {
     name:'MainTabBar',
     components:{
         TabBar,
         TabBarItem
     }
}
</script>

<style>
.img{
    width: 24px;
    height: 24px;
    vertical-align:middle;
}

</style>