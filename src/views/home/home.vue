<template>
  <div id="home">
    <main-bar class="home-nav">
        <div slot="center">购物街</div>
    </main-bar>
    <!-- <swiper>   
        <swiper-item> 
            <img src="@/assets/img/swiper/1.jpg" alt="">
        </swiper-item>
        <swiper-item> 
            <img src="@/assets/img/swiper/2.jpg" alt="">
        </swiper-item>
        <swiper-item> 
            <img src="@/assets/img/swiper/3.jpg" alt="">
        </swiper-item>
        <swiper-item> 
            <img src="@/assets/img/swiper/4.jpg" alt="">
        </swiper-item>
        <swiper-item> 
            <img src="@/assets/img/swiper/5.jpg" alt="">
        </swiper-item>
        <swiper-item> 
            <img src="@/assets/img/swiper/6.jpg" alt="">
        </swiper-item>
     </swiper> -->
     <swiper>   
        <swiper-item v-for="item in banners"> 
            <a :href="item.link">
            <img :src="item.image" alt="">
            </a>
        </swiper-item>
    </swiper>
    <recommend-view :recommends="recommends"/>
    <FeatureView/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @itemclick="itemclick"/>
    <goods-list :goods="showgoods" />
   
  </div>
</template>

<script>

//公共组件
import MainBar from '@/components/common/Mainbar/MainBar.vue';
import Swiper from '@/components/common/swiper/swiper.vue'
import SwiperItem from '@/components/common/swiper/swiperitem.vue'
import TabControl from '@/components/context/tabcontrol/tabcontrol.vue'
import GoodsList from '@/components/context/goods/goodslist.vue'

//项目组件
import RecommendView from './child/recommend.views.vue'
import FeatureView from './child/FeatureView.vue';

//网络请求方法
import {getHomeData,getHomeGoods} from '../../network/home';

export default {
    name:'HomeMessage',
    components:{
        MainBar,
        Swiper,
        SwiperItem,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList
    },
    data(){
        return{
           banners:[],
           recommends:[],
           goods:{
            'pop':{page:0, list: []},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]}
           },
           currentType:'pop'
        }
    },
    computed:{
        showgoods(){
            return this.goods[this.currentType].list
        }
    }
    ,
    created(){
        //  1.请求多个数据
         this.getHomeData();
         //请求商品数据
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    },
    methods:{
        itemclick(index){
            switch(index){
                case 0:
                  this.currentType='pop'
                  break
                case 1:
                   this.currentType='new'
                break
                case 2:
                    this.currentType='sell'
                break
            }
        },
        getHomeData(){
             getHomeData().then(res=>{
           this.banners=res.data.banner.list;
           this.recommends=res.data.recommend.list;
         })  
        },
        getHomeGoods(type){
            const page=this.goods[type].page+1;
            getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page+=1;
         })
        }
    }
}
</script>

<style>
    #home{
        padding-top:44px;
    }
     .home-nav{
        background-color: var(--color-tint);
        color:#fff;

        position: fixed;
        left:0;
        right:0;
        top:0;
        z-index:9;
     }
     .tab-control{
        position:sticky;
        /* 兼容性不好 */
        top:44px;
        z-index:9;
     }
</style>