<?php
include 'User.php';

class Subscriber extends User {
	private string $sEmail;
	private string $iAge;
	
	public function __construct(string $sNome, string $sSenha, string $sEmail, int $iAge) {
		
		parent::__construct($sNome, $sSenha);
		$this->sEmail = $sEmail;
		$this->iAge = $iAge;
	}
	
	public function save_user(): void {
		echo $this->sNome;
	}
	
}

$oSub = new Subscriber('Micael', '12312312#@$@', 'micael.java@gmail.com', 10);
var_dump($oSub);
$oSub->save_user();
echo '<br>';
$oSub->copy();