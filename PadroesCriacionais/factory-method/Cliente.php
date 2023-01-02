<?php
include 'CriadorTransporteNavio.php';
include 'CriadorTransporteCaminhao.php';

class Cliente {
	private TransporteAbstrato $oProduto ;
	public function __construct(TransporteAbstrato $oProduto) {
		$this->oProduto = $oProduto;
		$this->oProduto->realizarOperacao();
	}
}
new Cliente(new CriadorTransporteNavio('A'));
new Cliente(new CriadorTransporteCaminhao('B'));