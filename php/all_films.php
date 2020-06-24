<?php

$mysql = new mysqli('localhost', 'drakebell_nuxt_f', 'Drakebell32', 'drakebell_nuxt_f'); //подключение к БД

$arr =array();

$bdResult = $mysql->query("SELECT * FROM `all_films`");

while($row = $bdResult->fetch_assoc()){
	$arr[]= $row;
}

echo json_encode($arr);
