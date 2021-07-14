<template>
  <div class="docker">
    <!-- <div class="docker_item docker_item-active">
      <div class="iconfont iconxuanzhongshangcheng"></div>
      <div class="docker_title">首页</div>
    </div> -->
    <div 
    class="docker_item" 
    :class="{'docker_item':true,'docker_item-active':index===0,}"
    v-for="(item,index) in dockList" :key="item.icon">
      <div :class="'iconfont '+item.icon"></div>
      <div class="docker_title">{{item.text}}</div>
    </div>
    
  </div>
</template>

<script>
export default{
    name:'Docker',
    setup(){

        const dockList = [
            {
                icon:'iconxuanzhongshangcheng',
                text:'首页',
            },
            {
                icon:'iconcart',
                text:'购物车',
            },
            {
                icon:'iconOrderDetail',
                text:'订单',
            },
            {
                icon:'iconmybeifen',
                text:'我的',
            }
        ];
        return {dockList}
  
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.docker{
  display:flex;
  position:absolute;
  padding:0px .18rem;
  left:0;
  bottom:0;
  width:100%;
  height:.49rem;
  border-top:.01rem solid $content-bgColor;
  color:$content-fontcolor;
  .docker_item{
    flex:1;
    text-align: center;
    .iconfont{
      margin:.07rem 0 .02rem 0;
      font-size:.18rem;
    }
    .docker_title{
      font-size:.2rem;
      transform:scale(.5,.5);
      transform-origin:center top;
    }
  }
  .docker_item-active{
    color:#1fa4fc;
  }
}

</style>