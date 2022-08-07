<?php
$comando = 'cal';
exec(escapeshellcmd($comando), $output,$status);
if($status) {
	echo "Exec command failed";
}else{
	echo "<pre>";
	foreach ($output as $line) {
		echo "$line\n";
	}
	echo "</pre>";
}
