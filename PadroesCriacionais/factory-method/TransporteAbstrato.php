<?php

abstract class TransporteAbstrato {
	protected string $tipoProduto;

	public function __construct(string $nomeDoProduto) {
		$this->tipoProduto = $nomeDoProduto;
	}
	public function realizarOperacao():string{
		// Chamando o método criacional para realizar a criação do produto.
		$produto = $this->criarProduto();
		//	Agora podemos usar o produto criado.
		$resultado = $produto->realizarEntrega();
		echo $resultado;
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
	public abstract function criarProduto(): Transporte;
}