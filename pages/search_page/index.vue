<template>
	<div>
		<div class="container">
			<h1>Страница поиска</h1>
			<div v-if='$store.getters["search/search_films"].length > 0' v-for='item in $store.getters["search/search_films"]'>
				<p @click.prevent='openVideo(item.id)'>{{item.name}}</p>
			</div>
			<div v-if='datas !="" && $store.getters["search/search_films"].length === 0  ' v-for='data in datas'>
				<p @click.prevent='openVideo(data.id)'>{{data.name}}</p>
			</div>
		</div>	
	</div>
</template>
<script>
	export default{
		head(){
			return{
				title:"Поиск фильмов | films-generator",
				meta:[
					{ hid: 'description', name: 'description', content:'Страница поиска фильмов'}
				]		
			}			
		},
		data(){
			return{
				datas:''
			}
		},
		mounted(){
			console.log(JSON.parse(localStorage.getItem('searchFilms_store')))
			console.log(this.$store.state.search.search_films)
			console.log(this.datas)
			if(this.$store.state.search.search_films.length == 0 && localStorage.getItem('searchFilms_store')!=''){
				this.datas = JSON.parse(localStorage.getItem('searchFilms_store'))
			}
		},
		methods:{
			openVideo(id){			
				this.$router.push('/movies-page/' + id)
			},
		}
	};
</script>
<style scoped>
	p{
		opacity: 0.7;
		cursor: pointer;
		transition: all 0.5s;
	}
	p:hover{
		opacity: 1;
	}
</style>