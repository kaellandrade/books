<?php
echo <<<_END
<html>
	<head>
		<title>PHp Form Upload File</title>
	</head>
	<body>
		<form method="POST" enctype="multipart/form-data" action="uploadFile.php">
			<label for="filename">Selecione um arquivo</label>
			<input type="file" name="filename" size="10">
			<button type="submit">Enviar</button>
		</form>
_END;

if ($_FILES) {
	$sName = $_FILES['filename']['name'];
	$ext = match ($_FILES['filename']['type']) {
		'image/jpeg' => 'jpg',
		'image/gif' => 'gif',
		'image/png' => 'png',
		'image/tiff' => 'tif',
		default => '',
	};
	if ($ext) {
		$sName = "image.$ext";
		move_uploaded_file($_FILES['filename']['tmp_name'], $sName);
		echo "Imagem carregada '$sName' <br> <img src='$sName'>";
	} else {
		echo "Arquivo inválido, por por favor escolha uma imagem.";
	}
} else {
	echo "Nenhuma imagem selecionada.";
}
echo "</body></html>";