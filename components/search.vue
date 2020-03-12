<template>
	<div>
		<img src="~/assets/search.png" alt="иконка поиска" title="найти фильм" id="searchFilm" @click='focus()'>
		
		<input v-if='search'  type="text" name='nameFilm' class='animated bounceInRight form-control' id='nameFi' v-on:keyup.prevent.enter='nameForSearch' autofocus placeholder="найти фильм" v-model="value">
		<video src="https://maximum-movies.com/assets/build/randomFilm/video/The_Nice_Guys_2016_720p_BDRip.mp4" controls></video>
	</div>
</template>
<script>
import JQuery from 'jquery'
 	let $ = JQuery

	export default{
		data(){
			return{
				search:'',
				value:'',

			}
		},
		async asyncData(){
			var search = false
			return{search}
		},
		methods:{
			focus(){
				//console.log(this.value)
				this.search = !this.search				
				if(this.value !=''){				
					localStorage.setItem('SearchFilm',this.value.trim())
					this.value = ''
				}
				
			},
			async nameForSearch(){ //https://maximum-movies.com/searchfilm
				var Vinput = $('#nameFi').val().trim()
				if(Vinput !=""){
					localStorage.setItem('SearchFilm',Vinput)
					//window.location.href='https://maximum-movies.com'
					//var data = await fetch('https://maximum-movies.com/searchfilm').then(res=>res.json());
					//console.log(data)
					$.ajax({
			          url:'https://maximum-movies.com/searchfilm',
			          type:"POST",
			          cache: false,
			          data:{'nameFilm':Vinput},
			          success:function(data){
			          	console.log(JSON.parse(data).url)

			          	if(JSON.parse(data) == null){
			          		alert('Нет такой буквы')
			          	}
			          	else{
			          		$('video').attr({
			          			src:'https://maximum-movies.com/' + JSON.parse(data).url
			          		})
			          	}
			          }
		        })		
				}		
				//console.log(Vinput)			
			},
		}
	}
</script>
<style scoped>
	#searchFilm{
		width:50px;
		position:fixed;
		bottom:5px;
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
</style>