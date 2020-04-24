<template>
	<section>
		<div class="container animated fadeIn">
			<h1>{{$route.params.video}}</h1>
			<!-- <p>{{$route.query}}</p> -->
			<video :src="'https://maximum-movies.com' + req.url" controls></video>
			<p>{{req.description}}</p>
		</div>
	</section>
</template>
<script>
import JQuery from 'jquery'
  let $ = JQuery
	export default{
		async asyncData({params}){
			var name = params.video //получили параметры переданные в корневой странице в папке

			var FormData = require('form-data'); //собрали данные для отправки через FormData
		    var filmName = new FormData();
		    filmName.append('nameFilm', name);
			
			var req = await fetch('https://maximum-movies.com/search-for-async',{ //делаем POST запрос
	          method: 'post',
	          body:filmName
		       }).then((res) => {
		            return res.json();
		        })
		        .then((data) => {
		          console.log(data)
		            return data;
		        })
			return{req}

		},
		head(){
			return{
				title: this.req.name + " Смотреть онлайн без рекламы | films-generator",
				meta:[
					{ hid: 'description', name: 'description', content:this.req.description + ' Смотри онлайн на films-generator' }
				]
			}			
		}
	}
	
</script>
<style scoped>
	.container{
		width:90vw;
		height:90vh;
	}
	video{
		max-width:100%;
	}
</style>