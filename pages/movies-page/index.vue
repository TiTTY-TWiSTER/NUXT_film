<template>
	<div>
		<div class="container pt-5">
			<h1>Список доступных фильмов:</h1>
		</div>
		<section>
			<div class="container mt-4">
				<h2>Последние добавления</h2>
				<ul>
					<li v-for='(item,index) in trouble(all_r)' v-if='index < 10 && item' @click.prevent='openVideo(item.id)'>{{item.name}}</li>
				</ul>
			</div>
		</section>
		<section>
			<div class="container mt-4">
				<h2>Комедия.</h2>
				<ul>
					<li v-for='item in all_r' v-show='item.category == "comedy"' @click.prevent='openVideo(item.id)'>{{item.name}}</li>
				</ul>
			</div>
		</section>
		
		<section>
			<div class="container mt-2">
				<h2>Драмма.</h2>
				<ul>
					<li v-for='item in all_r' v-show='item.category == "drama"' @click.prevent='openVideo(item.id)'>{{item.name}}</li>
				</ul>
			</div>
		</section>

		<section>
			<div class="container mt-2">
				<h2>Триллер.</h2>
				<ul>
					<li active-class='active' v-for='item in all_r' v-show='item.category == "thriller"' @click.prevent='openVideo(item.id)'>{{item.name}}</li>
				</ul>
			</div>
		</section>
		<div class="container p-5" style="background:lightgrey;" id="store_films">
			<div v-for='film in trouble(all_r)'>
				<img v-if='film.img_url.split("/").filter($options.filters.capitalize)[1] == "build"' :src="'https://maximum-movies.com' + film.img_url" :alt="film.name + 'смотреть онлайн'">
				<img v-else src="~/assets/no_photo.jpg" alt="изображение временно отсутствует">
				<p>{{film.description}}</p>
			</div>
		</div>
	</div>
</template>
<script>
import JQuery from 'jquery'
 	let $ = JQuery

	export default{		
		async asyncData({$axios}){
			var all = await $axios.$get('https://films-generator.ru/php/search_for_async.php?id=')
			
			var all_r = all.reverse()			
			return{all_r}
		},
		head(){
			return{
				meta:[
					{
			            hid:'og:site_name',
			            name: 'og:site_name',
			            content:'films-generator.ru'
			        },
			      {
			            hid:'og:url',
			            name: 'og:url',
			            content:'https://films-generator.ru/'
			      },
			      {
			            hid:'og:title',
			            name: 'og:title',
			            content:'Список доступных фильмов | films-generator.ru'
			      },
			      {
			            hid:'og:description',
			            name: 'og:description',
			            content:'Выбор фильма по категориям, последние добавления.'
			       },
			      {
			            hid:'og:image',
			            name: 'og:image',
			            content:'https://maximum-movies.com/assets/build/randomFilm/forrest_gump.png'
			      }
				]
			}
		},
		data(){
			return{
				all_r_sort:''
			}
		},
		mounted(){
			//вырезаем дубли из массива объектов (по ключу name) полученных после асинхронного запроса
			// var arr2 = []
			// for(var i=0;i<this.all_r.length;i++){
			// 	arr2.push({
			// 		name:this.all_r[i].name,//этот ключ ВАЖЕН нам, т.к в нем есть дубли из-за разных категорий
			// 		url:this.all_r[i].url,//может пригодится
			// 		img_url:this.all_r[i].img_url,//может пригодится
			// 		description:this.all_r[i].description,//может пригодится
			// 		id:this.all_r[i].id,
			// 	})
			// }
			// this.all_r_sort = Array.from(new Set(arr2.map(JSON.stringify))).map(JSON.parse);//вырезание дублей из массива ДЛЯ ОБЪЕКТОВ
			// //END//
			
		},
		filters:{
			capitalize:function(item){
				if(item!= " "){
					return item
				}
			},
		},
		methods:{
			openVideo(id){			
				this.$router.push('/movies-page/' + id)
				//this.$router.push({path:'/movies-page/',params: { video: id },query:{id:id}})
			},
			trouble(data){//вырезание дублей по названию, т.к. уникальный id нам нужен
				var item2 = this.all_r //берем два одних и тех же массива
				for(var i=0;i<data.length;i++){//перебираем из разных переменных для того что бы сравнить друг с другом
					for(var q=0;q<item2.length;q++){
						if(data[i].name == item2[q].name && data[i].id != item2[q].id){//если названия объекта одинаковые а id разные
							//удаляем такой элемент из переданного аргументом массива
							data.splice(i,1)						
						}
					}
				}
				return data
			}
		}
};
</script>
<style scoped>
	p{
		font-size: 12px;
	}
	section ul{
		display:inline-block;
		color:rgba(15,15,15,0.7);
	}
	section li{
		cursor:pointer;
		max-width: max-content;
		color:rgba(15,15,15,0.7);
	}
	section li:hover{
		color:rgba(15,15,15,1);
	}
	#store_films{
		display: grid;
		grid-template-columns: repeat(2,1fr);
		gap:20px;
		justify-items: center;
	}
	#store_films img{
		max-width: 100%;
	}
	@media (max-width: 700px){
		#store_films{
			display: block;
			padding: 10px;
		}	
	}
</style>