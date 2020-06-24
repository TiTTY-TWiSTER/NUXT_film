export const actions = {
	async fetchGet(ctx){
		var res = await fetch('https://films-generator.ru/php/all_films.php')
		const data = await res.json()
		ctx.commit('Response',data)
	}
}

export const state = ()=>({
	films:[]
})

export const mutations = {
	Response(state,data){
		state.films = data
	}
}