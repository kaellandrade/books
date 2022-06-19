<style>
	body{
		background-color: rgba(0, 0, 0, 0.73);
		color: white;
	}
</style>
<?php
for ($i=0; $i < 10 ; $i++) { 
    for ($j=0; $j < 10 ; $j++) { 
        echo "$j" . "<br>";
        if($j>=5) break 1;
    }

}