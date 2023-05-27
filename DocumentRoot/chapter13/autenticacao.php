<?php
if (isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['PHP_AUTH_PW'])){
	echo 'Bem vindo usuário: ' . htmlspecialchars($_SERVER['PHP_AUTH_USER']) .
		' Senha: ' . htmlspecialchars($_SERVER['PHP_AUTH_PW']);
}else{
	header('WWW-Authenticate: Basic realm="Restricted Area"');
	header('HTTP/1.1 401 Unauthorized');
	die("Por favor entre com sua senha.");
}