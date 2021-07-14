<template>
    <div class="nearby">
      <div class="nearby_title">附近店铺</div>
      <div class="nearby_item" v-for="item in nearbyList" :key="item.id">
        <img :src="item.imgUrl" class="nearby_item_img">
        <div class="nearby_content">
          <div class="nearby_content_title">{{item.title}}</div>
          <div class="nearby_content_tags">
            <span class="nearby_content_tag" v-for="(item1,index) in item.tags" :key="index">{{item1}}</span>
          </div>
          <p class="nearby_content_highlight">{{item.desc}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'NearBy',
    setup(){
        const nearbyList = [
            {
                id:1,
                imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
                title:'沃尔玛',
                tags:['月售1万+','月售1万+','月售1万+'],
                desc:'VIP尊享满89元减4元运费券'
            },
            {
                id:2,
                imgUrl:'http://www.dell-lee.com/imgs/vue3/near.png',
                title:'沃尔玛',
                tags:['月售1万+','月售1万+','月售1万+'],
                desc:'VIP尊享满89元减4元运费券'
            }
        ];
        return {nearbyList}
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.nearby{
  &_title{
    margin:.16rem 0 .12rem 0;
    font-size: .18rem;
    color:$content-fontcolor;
    font-weight:normal;
  }
  &_item{
    display: flex;
    &_img{
      width:.56rem;
      height:.56rem;
      margin-right:.16rem;
    }
  }
  &_content{
    padding-bottom: .12rem;
    border-bottom: #f1f1f1 1px solid;
    flex:1;
    &_title{
      line-height:.22rem;
      font-size:.16rem;
      color:$content-fontcolor;
    }
    &_tags{
      margin-top:.08rem;
      line-height:.18rem;
      font-size:.13rem;
      color:$content-fontcolor;
    }
    &_tag{
      margin-right: .16rem;
    }
    &_highlight{
      margin:.08rem 0 0 0;
      line-height:.18rem;
      font-size:.13rem;
      color:#e93b3b;

    }
  }
}

</style>
