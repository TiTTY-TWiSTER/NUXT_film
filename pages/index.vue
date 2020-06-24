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
  head(){
    return{
      meta:[
      {
            hid:'og:site_name',
            name: 'og:site_name',
            content:'films-generator.ru'
          },
      {
            hid:'og:url',
            name: 'og:url',
            content:'https://films-generator.ru/'
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
            content:'https://maximum-movies.com/assets/build/randomFilm/forrest_gump.png'
          }
    ]
    }
  },
  components: {
    Nav,
  },
}
</script>

<style scoped>

</style>
