<?php 
	$nombres = ['Oscar Heredia Tartajo', 'Miguel Ángel Zamora Blanco', 'Miguel Ángel López Moyano', 'Lucas Marquez Muñoz', 'Roberto Carlos Flores Gómez', 'Alejandro Carrillo Roldán', 'Antonio Luque Bravo'];
	$respuesta = $_REQUEST["r"];

	$coincidencias = "";

	if ($respuesta !== "") {
		$respuesta = strtolower($respuesta);
		$l = strlen($respuesta);
		foreach ($nombres as $nombre) {
			if (stristr($respuesta, substr($nombre, 0, $l))) {
				if ($coincidencias === "") {
					$coincidencias = $nombre;
				}else{
					$coincidencias .= ", " . $nombre;
				}
			}
		}
	}
	if ($coincidencias == "") {
		echo "No hay coincidencias";
	}else{
		echo $coincidencias;
	}
?>