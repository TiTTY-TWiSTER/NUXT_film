<?php
$nameFilm = mb_strtolower($_POST['nameFilm']);

	
$mysql = new mysqli('localhost', 'drakebell_nuxt_f', 'Drakebell32', 'drakebell_nuxt_f');//подключаемся к БД
$result_set = $mysql->query("SELECT * FROM `all_films` WHERE `nameForSearch` LIKE '%$nameFilm%' ");

$data = array();

while($row = $result_set->fetch_assoc()){
	$data[] = $row;
}
echo json_encode($data);