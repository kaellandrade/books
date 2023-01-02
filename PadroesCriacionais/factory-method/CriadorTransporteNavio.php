<?php
include 'Transporte.php';
include 'TransporteAbstrato.php';
include 'Navio.php';

class CriadorTransporteNavio extends TransporteAbstrato {
	public function getFormaDeTransporte(): Transporte {
		return new Navio;
	}
}