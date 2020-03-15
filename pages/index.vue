<template>
  <div>
    <div class="container mt-2">
      <!-- <h1>{{content.name}}</h1> -->
      <h2 v-if='shit.length > 0'>{{shit[0].name}}</h2>
      <!-- <button class="btn btn-primary" @click='Film_name'>comedy</button> -->
      <button class="btn btn-primary" @click=''>comedy</button>
      <button class="btn btn-primary" @click='category_go("drama")'>drama</button>
      <button class="btn btn-primary" @click='category_go("thriller")'>thriller</button>
    </div>  
  </div>
</template>

<script>
import JQuery from 'jquery'
  let $ = JQuery

import axios from 'axios'

export default {
  components: {
    
  },
  async asyncData({ $axios }){
      var category = 'comedy'
      //var content =  await $axios.$get('https://maximum-movies.com/php-films-res?'+category);
      
     // return{content}
     var shit = [] //в async дата создаем обычную переменную
     return{shit}//делаем ретёрн и к ней можно обращаться через this в методах
    },
    async mounted(){
     // await this.Film_name()
    },
    methods:{
     Film_name(){
        //console.log(this.content.name)
        localStorage.setItem('titleFilm',this.content.name)
      },
      async category_go(category){
        console.log(this.shit)// здесь выведет пустую
       var category_response = []
        var req = await $.ajax({
                url:'https://maximum-movies.com/php-films-res',
                type:"POST",
                cache: false,
                data:{'category':category},
                success:function(data){
                  category_response.push(JSON.parse(data))
                }
            })
        this.shit = category_response
        console.log(this.shit) // а здесь уже с объектом в массиве
      },
    }
}
</script>

<style>

</style>
