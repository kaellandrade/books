<?php

interface Transporte {
	public function realizarEntrega(string $sPacoteID):string;
}