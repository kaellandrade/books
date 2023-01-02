<?php

class Caminhao implements Transporte {

	public function realizarEntrega(): string {
		$nomeClasse = get_class();

		return "Realizando entrega por BR-101 ($nomeClasse)" . PHP_EOL;
	}
}