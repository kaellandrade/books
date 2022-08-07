<?php
//echo time() * 7 * 24 * 60 * 60; // Timestamp do próximo domingo.
echo '<br>';
// Criando um TimeStamp
//echo mktime(20, 41, 0, 7, 24, 2022);
//echo '<br>';
//echo date("L a", time());
//$dateFormat = date(DATE_COOKIE);
//// Constantes de datas
//echo "<h1>$dateFormat</h1>";
// Checkdates

/**
 * Verifica se a data está correta
 *
 * @author Micael Andrade Dos Santos micaelandrade@moobitech.com.br
 * @param int $mes
 * @param int $dia
 * @param int $ano
 * @return bool
 *
 * @since 1.0.0 - Definição do versionamento da classe
 */
function checarData(int $dia, int $mes, int $ano): bool{
	return checkdate($mes, $dia, $ano);
}

/**
 * Veriica Verifica se o arquivo existe me disco
 *
 * @author Micael Andrade Dos Santos micaelandrade@moobitech.com.br
 * @param int $mes
 * @param int $dia
 * @param int $ano
 * @return bool
 *
 * @since 1.0.0 - Definição do versionamento da classe
 */
function verificarArquivo(string $sNomeArquivo): bool{
	return file_exists($sNomeArquivo);
}

/**
 * Cria um novo arquivo
 *
 * @author Micael Andrade Dos Santos micaelandrade@moobitech.com.br
 * @param string $sNomeArquivo
 * @return bool
 *
 * @since 1.0.0 - Definição do versionamento da classe
 */
function criarAquivo(string $sNomeArquivo): bool {
	$fh = fopen($sNomeArquivo, 'w') or die('Falha ao criar o arquivo :\'(');
	$text = <<<_END
console.log('Olá mundo novo!');
_END;
	fwrite($fh, $text) or die('Não foi possível escrever no arquivo.');
	fclose($fh);
	echo "Arquivo $sNomeArquivo.txt criado com sucesso!";
	return true;
}

function lendoArquivos(string $sNomeArquivo) : void {
	$file = fopen($sNomeArquivo, 'r');
	$file2 = fopen($sNomeArquivo, 'r');
	
	$line = fgets($file);
	$lineTruncate = fread($file2, 4);
	
	fclose($file);
	fclose($file2);
	echo "<h1>$line</h1>";
	echo "<h1>$lineTruncate</h1>";
}

function copyFile(string $sNomeArquivoOriginal, string $sNomeArquivoCopia ): void {
	if(!copy($sNomeArquivoOriginal, $sNomeArquivoCopia)) {
		echo "<span>Não foi possível criar uma cópia de $sNomeArquivoOriginal</span>";
		return;
	}
		echo "<span>Arquivo $sNomeArquivoCopia criado com sucesso! </span>";
}

function renameFile(string $sNomeArquivoOriginal, string $sNomeArquivoCopia ): void {
	if(!rename($sNomeArquivoOriginal, $sNomeArquivoCopia)) {
		echo "<span>Não foi possível renomear $sNomeArquivoOriginal</span>";
		return;
	}
	echo "<span>Arquivo $sNomeArquivoCopia renomedo com sucesso! </span>";
}

function deleteFile (string $sNomeArquivo):void {
	if(!unlink($sNomeArquivo)) {
		echo "<span>Não foi possível deletar $sNomeArquivo</span>";
		return;
	}
	echo "<span>Arquivo deletado com sucesso!</span>";
}

function updateFile (string $sNomeArquivo, string $sDados):void {
	$fh = fopen($sNomeArquivo, 'r+') or die("Failed to open file");
	if (flock($fh, LOCK_EX))
	{
		fseek($fh, 0, SEEK_END);
		fwrite($fh, $sDados) or die("Could not write to file");
		flock($fh, LOCK_UN);
	}
	fclose($fh);
	echo "File 'testfile.txt' successfully updated";
	
}


//checarData(24,7,2022) ? print '<h1>Válida</h1>' : print '<h1>Inválida</h1>';
//verificarArquivo('teste.php')? print '<h1>Existe</h1>' : print '<h1>Não</h1>';
//criarAquivo('script1.js');
//lendoArquivos('script1.js');
//renameFile('script1.js','sciprtJavaScript.js');
//deleteFile('sciprtJavaScript.js');
//deleteFile('sciprtJavaScript.js');
updateFile('home.txt',"\nDire Straits");