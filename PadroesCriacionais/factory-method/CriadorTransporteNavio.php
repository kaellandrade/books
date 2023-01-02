<?php
include 'Transporte.php';
include 'TransporteAbstrato.php';
include 'Navio.php';

class CriadorTransporteNavio extends TransporteAbstrato implements Transporte {

	public function realizarEntrega(): string {
		$nomeClasse = get_class();

		return "Realizando entrega pelo mar estreito ($nomeClasse)" . PHP_EOL;
	}

	public function criarProduto(): Transporte {
		return new Navio;
	}
}