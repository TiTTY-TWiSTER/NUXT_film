<template>
	<div>
		<social-sharing url="/" :title="'Мой фильм на сегодня' + ':' + ' ' + name_film" inline-template>
		  <div id="social-share" class="mt-2 text-center">
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
		    <network network="vk">
		      <img src="~/assets/vk.png" alt="vk icon" class='icon-soc'>
		    </network>
		    <network network="whatsapp">
		      <img src="~/assets/icon_whats-app.png" alt="whats-app icon" class='icon-soc'>
		    </network>
		  </div>
</social-sharing>
	</div>
</template>
<script>
	export default{
		  head: {
		    script: [
		      { src: 'https://use.fontawesome.com/96852991d8.js' }
		    ],
		  },
		  data(){
		  	return{
		  		name_film:''
		  	}
		  },
		mounted(){
			setInterval(()=>{
				this.Set()
			},1000)
		},
		methods:{
			Set(){ //функция для добавление названия фильма в ссылку share.
				this.name_film = localStorage.getItem('titleFilm')
			},
		}
	}
</script>
<style>
	#social-share{
		position:absolute;
		bottom:0;
		right:0;
		left:0;		
		background-color:rgba(15,15,15,0.2);
	}
	.icon-soc{
		width: 50px;
		cursor:pointer;
		padding: 0 5px;
		transition:all 0.7s;
	}
	.icon-soc:hover{
		transform:scale(1.1);
	}
	@media (min-width:200px) and (max-width:650px){
		.icon-soc{
			width:40px;
		}
	}
</style>