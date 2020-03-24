<template>
	<section>
		<div class="container">
			<h1>{{$route.params.video}}</h1>
			<!-- <p>{{$route.query}}</p> -->
			<video :src="'https://maximum-movies.com' + video" controls></video>
		</div>
	</section>
</template>
<script>
import JQuery from 'jquery'
  let $ = JQuery
	export default{
		validate({params}){
			return params.video
			//console.log(this.$route)
		},
		async asyncData(){
			var name = $route.params.video //

			var FormData = require('form-data');
		    var filmName = new FormData();
		    filmName.append('nameFilm', name);

			var video = localStorage.getItem('url')

			
			var req = await fetch('https://maximum-movies.com/searchfilm',{
	          method: 'post',
	          body:filmName
		       }).then((res) => {
		            return res.json();
		        })
		        .then((data) => {
		          console.log(data)
		            return data;
		        })
			return{video,req}

		}
	}
	
</script>