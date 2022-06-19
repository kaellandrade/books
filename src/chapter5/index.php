<?php
$a1 = 'MICAEL';
$a2 = 'JOICE';
$a3 = 'PAULO';

//fix_name2();
//fix_names($a1, $a2, $a3);

//echo $a1 . " " . $a2 . " " . $a3 . "<br>";


function fix_names(string &$n1, string &$n2, string &$n3): void {
	$n1 = ucfirst(strtolower($n1));
	$n2 = ucfirst(strtolower($n2));
	$n2 = ucfirst(strtolower($n3));
}

function fix_name2(): void {
	global $a1;
	$a1 = 'Teste um dois trêss';
}

function testeVariable(): void {
	static $statica = 2;
	++$statica;
	echo $statica;
}

$ar1 = ['micael', 'maria', 'joão', 'pedro'];
$ar2 = ['milho', 'feijão', 'banana', 'arroz'];

//echo phpversion();
//echo function_exists('array_combine')?'Tem':'Não';

$temp = new Test();
echo "Test A: " . Test::CONSTANTE . "<br>";
echo "Test B: " . $temp->get_sp() . "<br>";

class Test {
	const CONSTANTE = "Eu sou uma constante";
	
	public function get_sp(): string {
		return self::CONSTANTE;
	}
}