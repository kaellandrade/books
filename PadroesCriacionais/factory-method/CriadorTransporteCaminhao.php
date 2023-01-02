<?php
include_once "Caminhao.php";
class CriadorTransporteCaminhao extends TransporteAbstrato{
	public function getFormaDeTransporte(): Transporte {
		return new Caminhao;
	}
}