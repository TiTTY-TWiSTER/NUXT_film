<template>
	<div>
		<social-sharing :title="'Мой фильм на сегодня' + ':' + ' ' + titleFilm" inline-template :media='"https://maximum-movies.com"+imgOG'>
		  <div id="social-share" class="mt-2 text-center">
		  	<network network="vk">
		      <img src="~/assets/vk.png" alt="vk icon" class='icon-soc'>
		    </network>
		    <network network="facebook">
		      <img src="~/assets/facebook-icon.png" alt="facebook-icon" class='icon-soc'>
		    </network>
		    <network network="linkedin">
		      <img src="~/assets/Linkedin-Icon.png" alt="Linkedin-Icon" class='icon-soc'>
		    </network>
		    <network network="pinterest">
		      <img src="~/assets/Pinterest-logo.png" alt="Pinterest-icon" class='icon-soc'>
		    </network>
		    <network network="reddit">
		      <img src="~/assets/reddit.png" alt="reddit icon" class='icon-soc'>
		    </network>
		    <network network="twitter">
		      <img src="~/assets/twitter_logo.png" alt="twitter icon" class='icon-soc'>
		    </network>		    
		    <network network="whatsapp">
		      <img src="~/assets/icon_whats-app.png" alt="whats-app icon" class='icon-soc'>
		    </network>
		    <network network="telegram">
		      <img src="~/assets/telegram.png" alt="whats-app icon" class='icon-soc'>
		    </network>
		  </div>
</social-sharing>
	</div>
</template>
<script>
import JQuery from 'jquery'
 	let $ = JQuery

	export default{
		  head: {
		    script: [
		      { src: 'https://use.fontawesome.com/96852991d8.js' }
		    ],
		  },
		  data(){
		  	return{
		  		titleFilm:'',
		  		imgOG:''
		  	}
		  },
		mounted(){
			setInterval(()=>{
				this.Set()
			},1000);
		},
		methods:{
			Set(){ //функция для добавление названия фильма в ссылку share.
				this.titleFilm = localStorage.getItem('titleFilm')
				this.imgOG = localStorage.getItem('imgOG')
			},
		}
	}
</script>
<style>
	#social-share{
		position:fixed;
		bottom:0;
		right:0;
		left:0;
		width:100%;	
		background-color:rgba(15,15,15,0.2);
		overflow: hidden;
		display: flex;
    	flex-wrap: wrap;
    	justify-content: center;
	}
	.icon-soc{
		width: 50px;
		cursor:pointer;
		padding: 0 5px;
		transition:all 0.7s;
	}
	.icon-soc:hover{
		overflow-y:hidden;
		transform:scale(1.1);
	}
	@media screen and (orientation:landscape) {
    /* стили для горизонтальной */
    #social-share{
		position:fixed;
    }
}
	@media (min-width:200px) and (max-width:650px){
		.icon-soc{
			width:40px;
		}
		#social-share{
			position:fixed;
			justify-content: start;
	    }
	}
</style>