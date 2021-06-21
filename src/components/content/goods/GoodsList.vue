<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
 .goods {
   display: flex;
   /*超出跳转到下一行显示*/
   flex-wrap: wrap;
   /*设置两个项目在一行上居中，项目间的空隙等于一行左右两边相加*/
   justify-content: space-around;
   /*设置两个项目在一行上居中，项目间的空隙等于一行左、右两边相等*/
   /*justify-content: space-evenly;*/

 }
</style>
