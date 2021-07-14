<template>
    <div class="position">
      <span class="iconfont iconicon- position_icon"></span>
      北京理工大学国防科技园
      <span class="iconfont iconbell position_notice"></span>
    </div>
    <div class="search">
      <span class="iconfont iconsearch"></span>
      <span class="search_text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img class="banner_img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
    </div>
    <div class="icons">
      <!-- <div class="icons_item">
        <img class="icons_item_img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons_item_desc">超市便利</p>
      </div> -->
      <div class="icons_item" v-for="(item,index) in iconsList" :key="index">
        <img class="icons_item_img" :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" />
        <p class="icons_item_desc">{{item.desc}}</p>
      </div>
      
    </div>
    <div class="gap">
    </div>

</template>

<script>
export default {
    name:'StaticPart',
    setup(){
        const iconsList = [
            {
                imgName:'红包',
                desc:'红包套餐',
            },
            {
                imgName:'红包',
                desc:'红包套餐',
            },
            {
                imgName:'红包',
                desc:'红包套餐',
            },
            {
                imgName:'红包',
                desc:'红包套餐',
            },
            {
                imgName:'红包',
                desc:'红包套餐',
            },
            {
                imgName:'红包',
                desc:'红包套餐',
            },
            {
                imgName:'红包',
                desc:'红包套餐',
            },
            {
                imgName:'红包',
                desc:'红包套餐',
            },
            {
                imgName:'红包',
                desc:'红包套餐',
            },
            {
                imgName:'红包',
                desc:'红包套餐',
            },
        ]
        return{iconsList}
    }

}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position{
  position:relative;
  padding:.16rem .24rem .16rem 0;
  line-height:.22rem;
  font-size:.16rem;
  @include ellipsis;
  color:$content-fontcolor;
  .position_icon{
    font-size:.18rem;
  }
  .position_notice{
    position:absolute;
    right:0;
    top:.17rem;
    font-size:.18rem;
  }
}

.search{
  margin-bottom:.12rem;
  line-height:.32rem;
  background:#f5f5f5;
  color:#b7b7b7;
  border-radius:.16rem;
  font-size:.14rem;
  .iconfont{
    position:relative;
    top:.01rem;
    padding: 0rem .08rem 0 .16rem;
    font-size: .18rem;
    display: inline-block;
  }
  &_text{
    display: inline-block;
  }
}

.banner{
  height:0;
  overflow: hidden;
  padding-bottom:25.4%;
  &_img{
    width:100%;
  }
}

.icons{
  display:flex;
  flex-wrap: wrap;
  margin-top:.16rem;
  &_item{
    width:20%;
    &_img{
      display:block;
      width:.4rem;
      height:.4rem;
      margin:0 auto;
    }
    &_desc{
      padding:.06rem 0 .16rem 0;
      text-align: center;
    }
  }
}

.gap{
  background-color:$content-bgColor;
  height:.1rem;
  margin:0 -.18rem;
}

</style>
