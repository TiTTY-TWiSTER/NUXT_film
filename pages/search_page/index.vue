<template>
	<div>
		<div class="container">
			<h1>Страница поиска</h1>
			<div v-for='item in $store.state.search.search_films'>
				<p @click.prevent='openVideo(item.name)'>{{item.name}}</p>
			</div>
		</div>	
	</div>
</template>
<script>
	export default{
		mounted(){
			console.log(JSON.parse(localStorage.getItem('searchFilms_store')))
		},
		methods:{
			openVideo(name){			
				this.$router.push('/movies-page/' + name)
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