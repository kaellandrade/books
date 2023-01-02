<?php
include 'CriadorTransporteNavio.php';
include 'CriadorTransporteCaminhao.php';

class Cliente {
	private TransporteAbstrato $oProduto ;
	public function __construct(TransporteAbstrato $oProduto) {
		$this->oProduto = $oProduto;
		$this->oProduto->entregarEncomenda();
	}
}
new Cliente(new CriadorTransporteNavio('158AA'));
new Cliente(new CriadorTransporteCaminhao('158BB'));