export const actions = {
	async fetchPost(ctx,category){
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

		const data = res
		ctx.commit('categoryResponse',data)
	}
}

export const state = ()=>({
	data:[]
})

export const mutations = {
	categoryResponse(state,data){
		state.data = data
	}
}