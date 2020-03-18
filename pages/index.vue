<template>
  <div id="main_page">
    <div class="container mt-2">
      <!-- <h1>{{content.name}}</h1> -->
            
      <Nav/>
      <!-- <button class="btn btn-primary" @click='Film_name'>comedy</button> -->
      <!-- <nav>
        <button class="btn btn-primary" @click='category_go("comedy")'>comedy</button>
        <button class="btn btn-primary" @click='category_go("drama")'>drama</button>
        <button class="btn btn-primary" @click='category_go("thriller")'>thriller</button>
      </nav> -->
    </div>     
  </div>
</template>

<script>
import JQuery from 'jquery'
  let $ = JQuery

import axios from 'axios'

import Nav from '~/components/nav.vue'
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
    Nav,
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
    }
}
</script>

<style scoped>

</style>
