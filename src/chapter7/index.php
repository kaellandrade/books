<?php
const NOME = 'MICAEL ANDRADE DOS SANTOS';
/**
 * Span colorido com printf formatando para exadecimal
 * @param int $r
 * @param int $g
 * @param int $b
 * @return void
 */
function printSpan(int $r, int $g, int $b): void {
	echo '<br>';
	printf("<span style='color: #%X%X%X'>Olá, sou %s!</span>", $r, $g, $b, NOME);
}

/**
 * Utilizando a precisão do printf
 * @return void
 */
function printPrecision(): void {
	printf("<br>The result is: $%.3f", 123.42 / 12);
}

/**
 * Utilizando espaçamentos
 * @param int $pad
 * @return void
 */
function padingPrinf(int $pad): void {
	echo "<pre>";
	//	Pad com 15 espaços
	printf("O resultado é $%{$pad}f\n", 123.42 / 12);
	//	Pad com {$pad} espaços, preenchidos com zeros
	printf("O resultado é $%0{$pad}f\n", 123.42 / 12);
	//	Pad com {$pad} espaços, 2 casas decimais de precisão.
	printf("O resultado é $%{$pad}.2f\n", 123.42 / 12);
	//	Pad {$pad} espaços, 2 casas decimais de precisão, preenchido por zeros
	printf("O resultado é $%0{$pad}.2f\n", 123.42 / 12);
	// Pad {$pad} espaços, 2 casas deciamais de precisão preenchidos pos #
	printf("O resultado é $%'*{$pad}.2f\n", 123.42 / 12);
	
}

/**
 * Imprimindo strings
 * @param string $sNome
 * @return void
 */
function stringPad(string $sNome): void {
	echo "<pre>"; // Enables viewing of the spaces
	printf("[%s]\n", $sNome); // Saída padrão
	printf("[%12s]\n", $sNome); // Justificado à direita com 12 espaços
	printf("[%-12s]\n", $sNome); // Justificado à esquerda com 12 espaços
	printf("[%012s]\n", $sNome); // Preenchimento com zeros
	printf("[%'#12s]\n\n", $sNome); // Preenchimento personalizado com '#'
	$d = 'Rasmus Lerdorf'; // The original creator of PHP
	printf("[%12.8s]\n", $d); // Justificado à direita cortando 8 caracteres
	printf("[%-12.12s]\n", $d); // Left justify, cutoff of 12 characters
	printf("[%-'*12.5s]\n", $d); // Left justify, pad with '@', cutoff 10 char
	
}

printSpan(65, 127, 245);
printPrecision();
padingPrinf(9);
stringPad('Micael');