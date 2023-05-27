<?php
echo $_SERVER['HTTP_REFERER'];
function test() {
	static $count = 1 + 1; // na segunda chamada essa linah será ignorada
	echo "$count <br>";
	$count++;
}

test();
