<?php

abstract class TransporteAbstrato {
	protected string $sIdEncomenda;

	public function __construct(string $sCodigoEncomenda) {
		$this->sIdEncomenda = $sCodigoEncomenda;
	}
	public function entregarEncomenda():string{
		// Chamando o método criacional para realizar a criação do produto.
		$produto = $this->getFormaDeTransporte();
		//	Agora podemos usar o produto criado.
		$resultado = $produto->realizarEntrega($this->sIdEncomenda);
		echo "$resultado";
		return $resultado;
	}

	/**
	 * Método criacional.
	 *
	 * @return Transporte
	 *
	 * @author Micael Andrade Dos Santos micaelandrade@moobitech.com.br
	 * @since 1.0.0 - Definição do versionamento da classe
	 */
	public abstract function getFormaDeTransporte(): Transporte;
}