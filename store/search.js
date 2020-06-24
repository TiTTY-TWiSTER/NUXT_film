export const actions = {
	async searchFilms(ctx,name){

		var FormData = require('form-data');
			var obj = new FormData;
			obj.append('nameFilm',name)

		var res = await fetch('https://films-generator.ru/php/search.php',{
			method:'post',
			body:obj
		}).then((res)=>{
			return res.json();
		}).then((data)=>{
			return data;
		})
		//нужны только конкретные данные для вырезания дублей
		var arr = []
		for(var i = 0; i < res.length; i++){
			arr.push({
				name:await res[i].name,
				img_url:await res[i].img_url,
				url:await res[i].url,
				description:await res[i].description
			})	
		}
		
		const data = Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);//вырезание дублей из массива ДЛЯ ОБЪЕКТОВ

		localStorage.setItem('searchFilms_store',JSON.stringify(data))//записываем в локал стор, что бы потом распарсить
	//для сохранения объекта ПРИ ПЕРЕЗАГРУЗКЕ страницы, потому как store.state VUEX очищается,т.к. нету запроса из'~/components/search.vue'

		ctx.commit('Response',data)
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