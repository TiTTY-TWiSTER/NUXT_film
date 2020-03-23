<template>
  <div>
    <div class="text-right">
      <button @click='$router.push("/")' id="main_btn">Главная</button>
    </div>
    
    <nuxt />
    <Info/>
    <Search/>
    <Social/>

  </div>
</template>
<script>
import Search from '~/components/search.vue'

import Social from '~/components/social.vue'

import Info from '~/components/info.vue'
  export default{
    head:{
      script:[
        {src:'<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">'}
      ]
    },
    components:{
      Search,
      Social,
      Info
    },    
    mounted(){
      this.$router.push({
        params:{search:false}
      });
      this.$router.push({
        query:{search:false}
      });
    },
  }
</script>
<style>
h1,h2,button,p{
  font-family: 'Open Sans', sans-serif;
}
p{
  
}
  #main_btn{
    margin:10px;
    border:none;
    background: transparent;
    padding:10px 28px;
    outline:none;
    border: 3px solid transparent;
    border-image: linear-gradient(to left, transparent 0%, #3291ff 100%);
    border-image-slice: 1;
  }
  @media (min-width:200px) and (max-width:650px){
    #main_btn{
      margin:0;
      padding:7px 28px;
      position: fixed;
      right:0;
      top:0;
      z-index: 2;
      background-color:rgba(250,250,250,0.7);
    }
  }
</style>
