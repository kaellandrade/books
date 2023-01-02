<?php

class Caminhao implements Transporte {

	public function realizarEntrega(string $sPacoteID): string {
		$nomeClasse = get_class();

		return "Realizando entrega por BR-101 ($nomeClasse) (Encomenda: $sPacoteID)" . PHP_EOL;
	}
}