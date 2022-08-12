<template>
  <div id="home">
    <main-bar class="home-nav"><div slot="center">购物街</div></main-bar>
    <tab-control 
         :titles="['流行','新款','精选']" 
         @itemclick="itemclick" 
         ref="tabControl1"
         class="fixedTop"
         v-show="isTabFixed"/>
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
    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore"
            >
         <swiper>   
        <swiper-item v-for="item in banners"> 
            <a :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad">
            </a>
        </swiper-item>
         </swiper>
         <recommend-view :recommends="recommends"/>
         <FeatureView/>
         <tab-control
         :titles="['流行','新款','精选']" 
         @itemclick="itemclick" 
         ref="tabControl2"/>
         <goods-list :goods="showgoods" />
    </scroll>
   <back-top @click.native="btnclick" v-show="isshow"/>
  </div>
</template>

<script>

//公共组件
import MainBar from '@/components/common/Mainbar/MainBar.vue';
import {Swiper, SwiperItem}from '@/components/common/swiper';
import TabControl from '@/components/context/tabcontrol/tabcontrol.vue'
import GoodsList from '@/components/context/goods/goodslist.vue'
import Scroll from '@/components/common/scroll/scroll.vue'
import BackTop from '@/components/context/backTop/BackTop.vue'

//项目组件
import RecommendView from './child/recommend.views.vue'
import FeatureView from './child/FeatureView.vue';

//网络请求方法
import {getHomeData,getHomeGoods} from '../../network/home';
import {debounce} from '@/common/utils'


export default {
    name:'HomeMessage',
    components:{
        MainBar,
        Swiper,
        SwiperItem,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
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
           currentType:'pop',
           isshow:false,
           tabOffsetTop:0,
           isload:false,//轮播图的数据，是否下载来判定只加载几次，后续封装组件后，这个数据应该放在组件里面
           isTabFixed:false,//和上面的taboffsettop进行对比，如果小于则为false，如果为true则绑定样式fixed来让他固定在顶部
        //    saveY:0
        }
    },
    computed:{
        showgoods(){
            return this.goods[this.currentType].list
        }
    },
    created(){
        //  1.请求多个数据
         this.getHomeData();
         //请求商品数据
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    },
    mounted(){
        const refresh=debounce(this.$refs.scroll.refresh,500)
        this.$bus.$on('itemImageLoad',() => {
               refresh()
        })
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
            this.$refs.tabControl1.currentIndex=index;
            this.$refs.tabControl2.currentIndex=index;
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

            // 完成上拉加载更多
            this.$refs.scroll.finishPullUp()
         })
        },
        btnclick(){
            this.$refs.scroll.scrollTo(0,0,500)
        },
        contentScroll(position){
            this.isshow=-position.y>1000;

            // 检测滚动，当滚动到一定高度进行改变istabfixed
            this.isTabFixed=-position.y>this.tabOffsetTop
        },
        loadMore(){
            this.getHomeGoods(this.currentType)
        },
        imageLoad(){
             if(!this.isload){
                this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;  
                this.isload=true;
             }
        }
    }
}
</script>

<style scoped>
    #home{
        position:relative;
        height: 100vh;
    }
     .home-nav{
        background-color: var(--color-tint);
        color:#fff;
     }
     .content{
       position:absolute;
       top:43px;
       bottom:53px;
       left:0;
       right:0;
       overflow: hidden;
     }
     .fixedTop{
        position:relative;
        top:-2px;
        z-index:9;
     }
</style>