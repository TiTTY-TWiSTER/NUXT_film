<template>
  <div id="main_page">
    <div class="container mt-2">
      <!-- <h1>{{content.name}}</h1> -->
      <div v-if='category.length > 0' id="response-category-block">
        <h2 >{{category[0].name}}</h2>
        <img :src="'https://maximum-movies.com/'+category[0].img_url" alt="">
      </div>      

      <!-- <button class="btn btn-primary" @click='Film_name'>comedy</button> -->
      <button class="btn btn-primary" @click='category_go("comedy")'>comedy</button>
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
  head:{
    meta:[
      {
            hid:'og:site_name',
            name: 'og:site_name',
            content:'maximum-movies.com'
          },
      {
            hid:'og:url',
            name: 'og:url',
            content:'https://maximum-movies.com'
          },
      {
            hid:'og:title',
            name: 'og:title',
            content:'Генератор случайных фильмов по категориям.'
          },
      {
            hid:'og:description',
            name: 'og:description',
            content:'Генератор случайных фильмов. Выбор фильма по категориям.'
          },
      {
            hid:'og:image',
            name: 'og:image',
            content:''
          }
    ]
  },
  components: {
    
  },
  async asyncData({ $axios }){
      // var category1 = 'comedy'
      // var content =  await $axios.$get('https://maximum-movies.com/php-films-res?'+category1);
      
     // return{content}
     var category = [] //в async дата создаем обычную переменную
     return{category}//делаем ретёрн и к ней можно обращаться через this в методах
    },
    async mounted(){
     // await this.Film_name()
    },
    methods:{
      async category_go(category){
        console.log(this.category)// здесь выведет пустую
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
       this.category = category_response
       await localStorage.setItem('titleFilm',this.category[0].name)//для og разметки
        console.log(this.category) // а здесь уже с объектом в массиве
      },
    }
}
</script>

<style scoped>
  img{
    max-width:100%;
  }
  
</style>
