<?php
include_once "Caminhao.php";
class CriadorTransporteCaminhao extends TransporteAbstrato implements Transporte {

	public function realizarEntrega():string {
		$nomeClasse = get_class();
		return "Realizando entrega pela rodovia 101-BR ($nomeClasse)" . PHP_EOL;
	}

	public function criarProduto(): Transporte {
		return new Caminhao;
	}
}