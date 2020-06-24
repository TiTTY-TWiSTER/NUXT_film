<?php
	$url = $_SERVER['REQUEST_URI']; //получаем текующий url
	$url2 = explode('?',$url); //разбиваем до параметров строку в массив
	$urlCategory = $url2[1]; //категория
	
	$category = $_POST['category'];
	//echo $category;
	

	$mysql = new mysqli('localhost', 'drakebell_nuxt_f', 'Drakebell32', 'drakebell_nuxt_f'); //подключение к БД
	
	$bdRandomResult = $mysql->query("SELECT * FROM `all_films` WHERE `category` = '$category' ORDER BY RAND() ");
	$dataOne = $bdRandomResult->fetch_assoc(); //будет один рандомный фильм
	
	//это если хотим получить все фильмы из категории
	$data = array();

	while($row = $bdRandomResult->fetch_assoc()){
		$data[] = $row;
	}
	echo json_encode($dataOne);
	
	//$final = $bdRandomResult->fetch_assoc();
	//echo($final['img_url'].'$'.$final['category'].'$'.$final['name'].'$'.$final['description'].'$'.$final['ratingKinopoisk'].'$'.$final['ratingIMDB'].'$'.$final['alt'].'$'.$final['torrent'].'$'.$final['url']);
	
	$randoms = rand(1,5);
	 
	// if($category == 'required'){ //для категории "обязательные к просмотру"
	// 	$result_set = $mysql->query("SELECT * FROM `all_films` WHERE `id` = $randoms AND `required` = 'required' ");
	// 	$final = $result_set->fetch_assoc();
			
	// 	echo($final['img_url'].'$'.$final['category'].'$'.$final['name'].'$'.$final['description'].'$'.$final['ratingKinopoisk'].'$'.$final['ratingIMDB'].$final['alt']);
	// }
	
	// else{ // рандом по категориям
	// 	$result_set = $mysql->query("SELECT * FROM `all_films` WHERE `id` = $randoms AND `category` = '$category' ");
	// 	$final = $result_set->fetch_assoc();
			
	// 	echo($final['img_url'].'$'.$final['category'].'$'.$final['name'].'$'.$final['description'].'$'.$final['ratingKinopoisk'].'$'.$final['ratingIMDB'].'$'.$final['alt'].'$'.$final['torrent']);
	// }
	

	
//	echo "</br>";
//	echo ();
	// $mysql->close();