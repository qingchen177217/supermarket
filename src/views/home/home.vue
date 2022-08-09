<template>
  <div>
    <main-bar class="home-nav">
        <div slot="center">购物街</div>
    </main-bar>
  </div>
</template>

<script>
import MainBar from '../../components/common/Mainbar/MainBar.vue';
import {getHomeData} from '../../network/home';

export default {
    name:'HomeMessage',
    components:{
        MainBar
    },
    data(){
        return{
           banners:[],
           recommends:[]
        }
    },
    created(){
         getHomeData().then(res=>{
           this.banners=res.data.banner.list;
           this.recommends=res.data.recommend.list;
         })
    }
}
</script>

<style>
     .home-nav{
        background-color: var(--color-tint);
        color:#fff;
     }
</style>