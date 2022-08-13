<template>
   <div class="shop" v-if="Object.keys(shop).length !==0">
        <div class="shop-title">
            <div class="shop-title-img">
                
            </div>
             <span>{{shop.name}}</span>
        </div>
   </div>
</template>

<script>
export default {
  name: 'DetailShop',
 props:{
    shop:{
    type:Object,
    default(){
        return {}
    }
    }
 }
}
</script>

<style scoped>
      .shop{
        height:300px;
      }
      .shop-title{
        display: flex;
        height: 70px;
      }
      .shop-title-img{
        width: 70px;
        height:70px;
        border-radius:50%;
        overflow: hidden;
      }
      .shop-title-img img{
        width: 100%;
        height:100%;
      }
</style>