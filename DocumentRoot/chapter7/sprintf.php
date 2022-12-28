<?php
/**
 * Utilizando a função sprinf para guardar a saída em uma outra variável
 */

/**
 * Recebe uma cor RGB e retorna em Heaxadecimal
 * @param int $r
 * @param int $g
 * @param int $b
 * @return string
 */
function convertToHex(int $r, int $g, int $b): string {
	return sprintf("#%X%X%X", $r, $g, $b);
}

echo convertToHex(255, 255, 255);
