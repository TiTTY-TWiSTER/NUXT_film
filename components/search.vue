<template>
	<div>
		<img src="~/assets/search.png" alt="иконка поиска" title="найти фильм" id="searchFilm" @click='focus'>
		
		<input v-if='search'  type="text" name='nameFilm' class='animated bounceInRight form-control' id='nameFi' v-on:keyup.prevent.enter='nameForSearch' autofocus placeholder="найти фильм" value="">
	</div>
</template>
<script>
import JQuery from 'jquery'
 	let $ = JQuery
	export default{
		data(){
			return{
				search:''
			}
		},
		async asyncData(){
			var search = false
			return{search}
		},
		methods:{
			focus(){
				var Vinput1 = $('#nameFi').val()
				this.search = !this.search
				if(this.search == true && Vinput1 !=''){
					alert(1)
				}
			},
			nameForSearch(){
				var Vinput = $('#nameFi').val()
				//console.log(Vinput)
				localStorage.setItem('SearchFilm',Vinput)
			}
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