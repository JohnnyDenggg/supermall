<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>
    <ul>
      <li>测试1</li>
      <li>测试2</li>
      <li>测试3</li>
      <li>测试4</li>
      <li>测试5</li>
      <li>测试6</li>
      <li>测试7</li>
      <li>测试8</li>
      <li>测试9</li>
      <li>测试10</li>
      <li>测试11</li>
      <li>测试12</li>
      <li>测试13</li>
      <li>测试14</li>
      <li>测试15</li>
      <li>测试16</li>
      <li>测试17</li>
      <li>测试18</li>
      <li>测试19</li>
      <li>测试20</li>
      <li>测试21</li>
      <li>测试22</li>
      <li>测试23</li>
      <li>测试24</li>
      <li>测试25</li>
      <li>测试26</li>
      <li>测试27</li>
      <li>测试28</li>
      <li>测试29</li>
      <li>测试30</li>
      <li>测试31</li>
      <li>测试32</li>
      <li>测试33</li>
      <li>测试34</li>
      <li>测试35</li>
      <li>测试36</li>
      <li>测试37</li>
      <li>测试38</li>
      <li>测试39</li>
      <li>测试40</li>
      <li>测试41</li>
      <li>测试42</li>
      <li>测试43</li>
      <li>测试44</li>
      <li>测试45</li>
      <li>测试46</li>
      <li>测试47</li>
      <li>测试48</li>
      <li>测试49</li>
      <li>测试50</li>
      <li>测试51</li>
      <li>测试52</li>
      <li>测试53</li>
      <li>测试54</li>
      <li>测试55</li>
      <li>测试56</li>
      <li>测试57</li>
      <li>测试58</li>
      <li>测试59</li>
      <li>测试60</li>
      <li>测试61</li>
      <li>测试62</li>
      <li>测试63</li>
      <li>测试64</li>
      <li>测试65</li>
      <li>测试66</li>
      <li>测试67</li>
      <li>测试68</li>
      <li>测试69</li>
      <li>测试70</li>
      <li>测试71</li>
      <li>测试72</li>
      <li>测试73</li>
      <li>测试74</li>
      <li>测试75</li>
      <li>测试76</li>
      <li>测试77</li>
      <li>测试78</li>
      <li>测试79</li>
      <li>测试80</li>
      <li>测试81</li>
      <li>测试82</li>
      <li>测试83</li>
      <li>测试84</li>
      <li>测试85</li>
      <li>测试86</li>
      <li>测试87</li>
      <li>测试88</li>
      <li>测试89</li>
      <li>测试90</li>
      <li>测试91</li>
      <li>测试92</li>
      <li>测试93</li>
      <li>测试94</li>
      <li>测试95</li>
      <li>测试96</li>
      <li>测试97</li>
      <li>测试98</li>
      <li>测试99</li>
      <li>测试100</li>
    </ul>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import {getHomeMultidata, getHomeGoods } from "network/home";


export default {
  name: "Home",
  components: {
    Navbar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  data() {
    return {
      banners:null,
      recommends:null,
      goods: {
        'pop': {page:0, list: []},
        'new': {page:0, list: []},
        'sell': {page:0, list: []}
      },
      currentType: 'pop'
    }
  },
  // 组件创建时执行
  created() {
    // 请求多个数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    // 事件监听相关方法
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page +=1
      })
    }
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
