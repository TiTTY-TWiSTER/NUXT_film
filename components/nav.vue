<template>
	<div>
		<nav>
	        <img src="~/assets/comedy-text.png" alt="фильмы из категории комедия" id="comedy-category"  @click='category_go("comedy")' @mouseover="imgOver('#comedy-category',category_img[0].img2)" @mouseleave='imgLeave("#comedy-category",category_img[0].img1)'>

	        <img src="~/assets/drama-text.png" alt="фильмы из категории драма, мелодрама" id="drama-category" @click='category_go("drama")' @mouseover="imgOver('#drama-category',category_img[1].img2)" @mouseleave='imgLeave("#drama-category",category_img[1].img1)'>

	        <img src="~/assets/thriller-text.png" alt="фильмы из категории триллер" id="thriller-category" @click='category_go("thriller")' @mouseover="imgOver('#thriller-category',category_img[2].img2)" @mouseleave='imgLeave("#thriller-category",category_img[2].img1)'>
	    </nav>
	    <transition name='fade'>
	    	<div v-if='category.length > 0' id="response-category-block">
		        <h2>{{category[0].name}}</h2>
		        <div style="position:relative;">
		        	<img :src="'https://maximum-movies.com/'+category[0].img_url" alt="" id='film-img'>
		        	<img v-if='category[0].url != ""' src="~/assets/play.png" alt="смотреть онлайн" id="film-img-after">
		        </div>	        
		        <p class="pt-3">{{category[0].description}}</p>
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
			    category:''
			}
		},
		methods:{
		async category_go(category){
        console.log(this.category)// здесь выведет пустую
       var category_response = []
        var req = await $.ajax({
                url:'https://maximum-movies.com/php-films-res',
                type:"POST",
                cache: false,
                data:{'category':category},
                success:function(data){
                  category_response.push(JSON.parse(data))
                }
            })
       this.category = category_response
       await localStorage.setItem('titleFilm',this.category[0].name)//для og разметки
        console.log(this.category) // а здесь уже с объектом в массиве
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
	}
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
	  nav:hover{
	    left:5%;
	  }
	  #response-category-block{
	  	margin-left:40%;
	  }
	  #film-img{
	  	transform: scale(1) perspective(1040px) rotateY(-17deg) rotateX(1deg);
    	box-shadow: rgba(0, 0, 0, 0.8) 10px 0.52rem 0.6rem;
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
</style>