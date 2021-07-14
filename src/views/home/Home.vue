<template>
  <div class="wrapper">
    <StaticPart />
    <NearBy />
  </div>
  <Docker />
  <!-- <router-view/> -->
</template>

<script>
import StaticPart from './StaticPart.vue'
import NearBy from './NearBy.vue'
import Docker from './Docker.vue'
export default {
   name:'Home',
   components:{StaticPart,NearBy,Docker},
}
</script>


<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
div{
  box-sizing: border-box;
}
.wrapper{
  overflow-y:scroll;
  position:absolute;
  left:0;
  top:0;
  bottom:.5rem;
  right:0;
  padding:0 .18rem .1rem .18rem;
}

</style>
