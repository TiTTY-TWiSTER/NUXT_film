<template>
	<div>
		<div class="container animated fadeIn">
			<h1>{{shit.name}}</h1>
			<video :src="'https://maximum-movies.com' + shit.url" controls></video>
			<p>{{shit.description}}</p>
		</div>
	</div>
</template>
<script>
	export default{
		validate({params}) {
			console.log('validate')
			return /^\d+$/.test(params.video)
		},
		data(){
			return{
				shit:''
			}
		},
		// async asyncData({params,store,$axios}){
		// 	var req = await $axios.$get('https://maximum-movies.com/search-for-async?id='+params.video)
		// 	//await store.dispatch('video_one_page/oneFilm',params.video)
			
		// 	// var req = await store.getters['video_one_page/one_film']	
			
		// 	 return {req}
		// },
		// computed:{
		// 	req(){
		// 		// if(localStorage.getItem('searchFilms_store') != ''){
		// 		// 	return JSON.parse(localStorage.getItem('one_film'))
		// 		// }else{
		// 			return this.$store.getters['video_one_page/one_film']
		// 		//}				
		// 	}
		// },
		async mounted(){
			//console.log(this.$store.getters['video_one_page/one_film'])
			var req = await this.$axios.$get('https://films-generator.ru/php/search_for_async.php?id='+this.$route.params.video)
			this.shit = req
		},
		head(){
			return{
				title: this.shit.name + " Смотреть онлайн без рекламы | films-generator",
				meta:[
					{ hid: 'description', name: 'description', content:this.shit.description + ' Смотри онлайн на films-generator' },
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
			            content:this.shit.name + ' | films-generator.ru'
			      },
			      {
			            hid:'og:description',
			            name: 'og:description',
			            content:'Мой фильм на сегодня.'
			       },
			       {
			            hid:'og:image',
			            name: 'og:image',
			            content:'https://maximum-movies.com'+ this.shit.img_url
			      }
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