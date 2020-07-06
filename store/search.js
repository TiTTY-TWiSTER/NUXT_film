export const actions = {
	async searchFilms(ctx,name){
		if(name != ''){
			//собрали данные через form-data
			var FormData = require('form-data');
				var obj = new FormData;
				obj.append('nameFilm',name)

			//post запрос
			var res = await fetch('https://films-generator.ru/php/search.php',{
				method:'post',
				body:obj
			}).then((res)=>{
				return res.json();
			}).then((data)=>{
				return data;
			})

			//создали функцию для вырезания дублей из результата запроса
			function trouble(data){//вырезание дублей по названию, т.к. уникальный id нам нужен
				var item2 = data //берем два одних и тех же массива
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

			//кладем в переменную результат запроса с вырезанными данными
			const data = trouble(res)
			
			localStorage.setItem('searchFilms_store',JSON.stringify(data))//записываем в локал стор, что бы потом распарсить
	//для сохранения объекта ПРИ ПЕРЕЗАГРУЗКЕ страницы, потому как store.state VUEX очищается,т.к. нету запроса из'~/components/search.vue'

			//вызов мутации с передаей данных из нашего actions
			ctx.commit('Response',data)	
		}		
	}
}

export const state = ()=>({
	search_films:[]
})

export const mutations = {
	Response(state,data){
		state.search_films = data
	}
}

export const getters = {
	search_films: s => s.search_films
}