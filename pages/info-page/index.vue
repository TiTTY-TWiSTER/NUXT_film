<template>
	<div>
		<div class="container">
			<h1>Список доступных фильмов:</h1>
		</div>
		<section>
			<div class="container mt-4">
				<h2>Комедия.</h2>
				<ul>
					<li v-for='item in res_all_film' v-show='item.category == "comedy"' @click.prevent='openVideo(item.name,item.url)'>{{item.name}}</li>
				</ul>
			</div>
		</section>
		
		<section>
			<div class="container mt-2">
				<h2>Драмма.</h2>
				<ul>
					<li v-for='item in res_all_film' v-show='item.category == "drama"'>{{item.name}}</li>
				</ul>
			</div>
		</section>

		<section>
			<div class="container mt-2">
				<h2>Триллер.</h2>
				<ul>
					<li v-for='item in res_all_film' v-show='item.category == "thriller"'>{{item.name}}</li>
				</ul>
			</div>
		</section>
	</div>
</template>
<script>
	export default{
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
            content:'https://maximum-movies.com/info-page'
          },
      {
            hid:'og:title',
            name: 'og:title',
            content:'Список, доступных для поиска фильмов | films-generator.ru | Генератор фильмов'
          },
      {
            hid:'og:description',
            name: 'og:description',
            content:'Список доступных фильмов на данный момент. Ежедневное обновление фильмов, добавление новинок для бесплатного просмотра онлайн.'
          },
      {
            hid:'og:image',
            name: 'og:image',
            content:''
          }
    ]
  },
		async asyncData(){

			var FormData = require('form-data');
		    var category = new FormData();
		    category.append('category', 'comedy'); //если нужно по категориям то передаем FormData методом post

		var res_all_film = await fetch('https://maximum-movies.com/all-films',{
          method: 'get',
          //body:category
	       }).then((res) => {
	            return res.json();
	        })
	        .then((data) => {
	          console.log(data)
	            return data;
	        })
	        return{res_all_film}		
	},
	methods:{
		async openVideo(name,url){
			await localStorage.setItem('url',url)
			this.$router.push('/info-page/' + name)
		}
	}
}
</script>