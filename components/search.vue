<template>
	<div>
		<img src="~/assets/search.png" alt="иконка поиска" title="найти фильм" id="searchFilm" @click='focuz()'>
		
		<input type="text" name='nameFilm' v-show='search'  class='animated bounceInRight form-control' id='nameFi' v-on:keyup.enter='nameForSearch();RoutParm()' placeholder="найти фильм" v-model="value" autofocus>

		
		<div v-show='video[0] == true && this.$route.query.search == true'>
			<video class="animated fadeIn d-block mx-auto res-vid" :src="video[1]" controls style='max-height: 85vh;' :key='video[3]' :id="video[3]"></video>
		</div>
	</div>
</template>
<script>
import JQuery from 'jquery'
 	let $ = JQuery

	export default{		
		data(){
			return{
				search:false,
				value:'',
				video:false,
			}
		},
		mounted(){
		},
		methods:{
			focuz(){
				var Vi = this.value
				//console.log(Vi)
				if(Vi !=''){ //если инпут не пустой, вызываем функцию запроса которая ниже
					this.nameForSearch()
					this.value = ''					
				}
				this.search = !this.search				
			},
			 async nameForSearch(){
			 	
				var Vinput = $('#nameFi').val().trim() //название из инпута

				if(Vinput !=""){
					await this.$store.dispatch('search/searchFilms',Vinput)//передали название искомого фильма
					
					if(this.$store.state.search.search_films.length > 0){
						this.$router.push('/search_page')
					}else{
						alert('SORRY. Не найдено')
					}
				}				
			},
		}
	}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
	  transition: opacity 1.5s;
	}
	.fade-enter, .fade-leave-to{
	  opacity: 0;
	}

	#searchFilm{
		width:50px;
		position:fixed;
		bottom:25px;
		right:15px;
		z-index:10000;
		cursor:pointer;
	}
	#nameFi{
		position:fixed;
		bottom:15px;
		right:65px;
		z-index:10000;
		max-width:230px;
	}
	video{
		width:85%;
	}
	@media (min-width:200px) and (max-width:650px){
		video{
			margin-top:15%;
		}
	}
</style>