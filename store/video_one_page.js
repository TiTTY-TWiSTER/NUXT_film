export const state = ()=>({
	one_film:[]
})

export const mutations = {
	Response(state,data){
		state.one_film = data
	}
}
export const actions = {
	async oneFilm(ctx,name){
		
		var res = await fetch('https://maximum-movies.com/search-for-async?id='+name).then((res)=>{return res.json()})

	    localStorage.setItem('one_film',JSON.stringify(res))
	    ctx.commit('Response',res)
	}
}
export const getters = {
	one_film: s => s.one_film
}