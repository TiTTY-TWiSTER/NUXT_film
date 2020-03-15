<template>
  <div>
    
    <nuxt />
    <Search/>
    <Social/>
  </div>
</template>
<script>
import Search from '~/components/search.vue'

import Social from '~/components/social.vue'
  export default{
    components:{
      Search,
      Social
    },
  }
</script>
<style>

</style>
