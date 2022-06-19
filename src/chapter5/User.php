<?php
class User {
	public string $sNome;
	public string $sSennha;
	
	/**
	 * @param string $sNome
	 * @param string $sSennha
	 */
	public function __construct(string $sNome, string $sSennha) {
		$this->sNome = $sNome;
		$this->sSennha = $sSennha;
	}
	
	
	public function save_user(): void {
		echo 'Usuário salvo com sucesso!';
	}
	
	final public function copy():void {
		echo 'Todos os direitos reservados!';
	}
}
