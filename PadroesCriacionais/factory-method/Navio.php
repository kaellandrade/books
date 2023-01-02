<?php

class Navio implements Transporte {

	public function realizarEntrega(): string {
		$nomeClasse = get_class();

		return "Realizando entrega pelo mar estreito ($nomeClasse)" . PHP_EOL;
	}
}