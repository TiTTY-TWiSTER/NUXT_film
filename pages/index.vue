<template>
  <div id="main_page">
    <div class="container mt-2">
      <Nav/>
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
            content:'Генератор случайных фильмов по категориям | films-generator.ru | Генератор фильмов'
          },
      {
            hid:'og:description',
            name: 'og:description',
            content:'Генератор случайных фильмов онлайн. Выбор фильма по категориям.'
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
       var category1 = 'comedy'
      // var content =  await $axios.$get('https://maximum-movies.com/php-films-res?'+category1);
      
     // return{content}
     var allFilms = [] //в async дата создаем обычную переменную

     var FormData = require('form-data');
     var category = new FormData();
     category.append('category', 'comedy');

       //   var resz = await fetch('https://maximum-movies.com/all-films',{
       //    method: 'get',
       //    //body:category
       // }).then((res) => {
       //      return res.json();
       //  })
       //  .then((data) => {
       //    console.log(data)
       //    allFilms.push(data)
       //      //console.log(data)
       //      return data;
       //  })
       //  return{resz}
     //return{allFilms}//делаем ретёрн и к ней можно обращаться через this в методах
    },
    methods:{
    }
}
</script>

<style scoped>

</style>
