<?php

class Navio implements Transporte {

	public function realizarEntrega(string $sPacoteID): string {
		$nomeClasse = get_class();

		return "Realizando entrega pelo mar estreito ($nomeClasse) (Encomenda: $sPacoteID)" . PHP_EOL;
	}
}