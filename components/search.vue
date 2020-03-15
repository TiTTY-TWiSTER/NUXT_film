<template>
	<div>
		<img src="~/assets/search.png" alt="иконка поиска" title="найти фильм" id="searchFilm" @click='focuz()'>
		
		<input v-show='search' type="text" name='nameFilm' class='animated bounceInRight form-control' id='nameFi' v-on:keyup.prevent.enter='nameForSearch' placeholder="найти фильм" v-model="value">

		<transition name='fade'>
			<div v-show='video[0]'>
				<video class="d-block mx-auto" :src="video[1]" controls style='max-height: 85vh;'></video>
			</div>			
		</transition>
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
		methods:{
			focuz(){						
				var Vinput = $('#nameFi').val().trim()
				if(Vinput !=''){ //если инпут не пустой, вызываем функцию запроса которая ниже
					this.nameForSearch()
					this.value = ''
				}
				this.search = !this.search				
			},
			 async nameForSearch(){
				var Vinput = $('#nameFi').val().trim() //название из инпута

				var boo = [] //создаем до запроса массив в который будем пушить данные ответа

				if(Vinput !=""){
					this.folk = await $.ajax({
			          url:'https://maximum-movies.com/searchfilm',
			          type:"POST",
			          cache: false,
			          data:{'nameFilm':Vinput},
			          success:function(data){
			          	//console.log(JSON.parse(data).url)

			          	if(JSON.parse(data) == null){
			          		boo.push(false)
			          		alert('Не найдено')
			          	}
			          	else{
			          		boo.push(true)
			          		boo.push('https://maximum-movies.com/' + JSON.parse(data).url)
			          		boo.push(JSON.parse(data).name) 		         		         		
			          				          		
			          	}
			          }
		        })	
		        //console.log(boo)		        	
				this.video = boo //после запроса в переменной boo лежат данные. Кладем в переменную vue и обращемся в тегах к ней
				// async await впринципе можно не писать, но он вернет красивый результат выполнения 
				//console.log(this.video)
				await localStorage.setItem('titleFilm',boo[2])		
				}				
			},
		}
	}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
	  transition: opacity 1.7s;
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
		max-width:100%;
	}
	@media (min-width:200px) and (max-width:650px){
		video{
			margin-top:15%;
		}
	}
</style>