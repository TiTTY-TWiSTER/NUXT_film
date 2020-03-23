<template>
	<div>
		<router-link to='/info-page'>
			<img src="~/assets/info.png" alt="info icon" title='список фильмов' id='info_site'>
		</router-link>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	#info_site{
		width:45px;
		position:fixed;
		bottom:95px;
		right:15px;
		z-index:10000;
		cursor:pointer;
	}	
</style>