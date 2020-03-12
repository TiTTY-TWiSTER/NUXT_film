<template>
  <div>
    <div class="container">
      <h1>{{content.name}}</h1>
      <button class="btn btn-primary">road film</button>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  },
  data(){
      return{
        content:[]
      }
    },
  async asyncData({ $axios }){
      var category = 'comedy'
      var content =  await $axios.$get('https://maximum-movies.com/php-films-res?'+category);
      return{content}
      console.log(content)
    },
    methods:{

    }
}
</script>

<style>

</style>
