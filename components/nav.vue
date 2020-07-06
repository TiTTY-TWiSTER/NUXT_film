<template>
	<div>
		<!-- <button @click='al'>route</button> -->
		<nav @mouseover='nav=true' :class="{'navHover':nav}" @mouseleave='nav=false'>
	        <img src="~/assets/comedy-text.png" alt="фильмы из категории комедия" id="comedy-category"  @click='category_go("comedy");' @mouseover="imgOver('#comedy-category',category_img[0].img2)" @mouseleave='imgLeave("#comedy-category",category_img[0].img1)'>

	        <img src="~/assets/drama-text.png" alt="фильмы из категории драма, мелодрама" id="drama-category" @click='category_go("drama");' @mouseover="imgOver('#drama-category',category_img[1].img2)" @mouseleave='imgLeave("#drama-category",category_img[1].img1)'>

	        <img src="~/assets/thriller-text.png" alt="фильмы из категории триллер" id="thriller-category" @click='category_go("thriller");' @mouseover="imgOver('#thriller-category',category_img[2].img2)" @mouseleave='imgLeave("#thriller-category",category_img[2].img1)'>
	    </nav>

    	<div id="response-category-block">

	        <div id="label-film-category" class="animated fadeIn" v-if="video==false" :key="category.id">
	        	<h2>{{category.name}}</h2>
	        	<div style="position:relative;">
		        	<img :src="'https://maximum-movies.com/'+category.img_url" alt="" id='film-img'>
		        	<img v-if="playshit" src="~/assets/play.png" alt="смотреть онлайн" id="film-img-after" @click='play'>
	       		</div>
	       		<p class="pt-3">{{category.description}}</p>	
	        </div>      
	        
	        <div v-show="video[0]" id='video_category' class="animated fadeIn" :key="category.id">
	        	<video  :src="'https://maximum-movies.com'+video[1]" controls ></video>	
	        </div>		        	        
	    </div>

	</div>
</template>
<script>
import JQuery from 'jquery'
 	let $ = JQuery

	export default{
		data(){
				return{
					nav:false,
					category_img:[
				       {
				        title:'comedy',
				        img1:require('~/assets/comedy-text.png'),
				        img2:require('~/assets/comedy-text2.png')
				       },{
				        title:'drama',
				        img1:require('~/assets/drama-text.png'),
				        img2:require('~/assets/drama-text2.png')
				       },{
				        title:'thriller',
				        img1:require('~/assets/thriller-text.png'),
				        img2:require('~/assets/thriller-text2.png')
				       }
				       ],
				    category:'',
				    video:false,
				    playshit:false
				}
			},
			mounted(){
				
			},
		methods:{
			al(){
				//console.log(this.$route)
			},
		async category_go(category){			
			this.video = false

			var FormData = require('form-data'); //собираем данные для отправки через FormData
			var obj = new FormData();
			obj.append('category', category);

			var res = await fetch('https://films-generator.ru/php/nav_main_film.php',{
			    	method:'post',
			    	body:obj
			    }).then((res)=>{
			    	return res.json();
			    })
			    .then((data)=>{
			    	return data;
			    })       		

       		localStorage.setItem('titleFilm',res.name)//для og разметки
       		localStorage.setItem('imgOG',res.img_url)//для og разметки        	
        	
        	this.category = res
        	if(res.url != ''){
        		this.playshit = true
        	}else{
        		this.playshit = false
        	}
        	console.log(this.category)
      },
      play(){
      	if(this.category.url !=''){ //если путь к видео в БД есть

      		this.video = []
      		this.video.push(true)
      		this.video.push(this.category.url)
      	}
      	//$('#response-category-block').css('display','none')
      	console.log(this.video)
      },

      imgOver(item,img){
        $(item).attr({
          src:img
        })
        $(item).css({
          "transform":"scale(1.1)"
        })
      },

      imgLeave(item,img){
        $(item).attr({
          src:img
        })
        $(item).css({
          "transform":"scale(1.0)"
        })
      },
	}
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
	  transition: opacity 1.5s;
	}
	.fade-enter, .fade-leave-to{
	  opacity: 0;
	}
	  img{
	    max-width:100%;
	    border-radius:8px;
	  }
	  p{
	  	font-size: 1rem;
	  }
	  video{
	  	height: 85vh;
	  	width:85%;
	  	position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%,-50%);
	  }
	  nav{
	    display:grid;
	    gap:27px;
	    position:absolute;
	    left:-5%;
	    top:20%;
	    transition:all 1s;
	    z-index: 2;
	  }
	  nav img{
	  	cursor:pointer;
	  }
	  .navHover{
	    left:5%;
	  }
	  .navLeave{
	  	left:-5%;
	  }
	  #response-category-block{
	  	margin-left:40%;
	  }
	  #film-img{
	  	/*transform: scale(1) perspective(1040px) rotateY(-17deg) rotateX(1deg); */
    	box-shadow: rgba(0, 0, 0, 0.8) 10px 0.52rem 0.7rem;
	  }
	  #film-img-after{
		cursor:pointer;
	    position: absolute;
	    top: 50%;
	    left: 51%;
	    transform: translate(-50%,-50%);
	    transition:all 0.4s;
	    opacity:0.7;
}
#film-img-after:hover{
	opacity:1;
}

@media (min-width:200px) and (max-width:850px){
	h2{
		font-size:1.3rem;
	}
	p{
		font-size:0.8rem;
	}
	nav{
		gap:50px;
		width:55%;
		top: 50%;
	    left: 50%;
	    transform: translate(-50%,-50%);
	}
	#response-category-block{		
		margin:unset;
		margin-top: 2.5rem!important;
	}
}
</style>