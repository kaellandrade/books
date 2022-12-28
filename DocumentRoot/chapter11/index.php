<?php
require_once 'login.php';
require_once 'form.php';

try {
	$pdo = new PDO($attr, $user, $pass, $opts);
} catch (PDOException $e) {
	throw new PDOException($e->getMessage(), (int)$e->getCode());
}

$query = "SELECT * FROM TEST";
$result = $pdo->query($query);

if (isset($_POST['delete']) && isset($_POST['isbn'])) {
	$isbn = get_post($pdo, 'isbn');
	$query = "DELETE FROM TEST WHERE isbn=$isbn";
	$result = $pdo->query($query);
}

if (isset($_POST['author']) &&
	isset($_POST['title']) &&
	isset($_POST['category']) &&
	isset($_POST['year']) &&
	isset($_POST['isbn'])
) {
	$author = get_post($pdo, 'author');
	$title = get_post($pdo, 'title');
	$category = get_post($pdo, 'category');
	$year = get_post($pdo, 'year');
	$isbn = get_post($pdo, 'isbn');
	$query = "INSERT INTO TEST VALUES" . "($author, $title, $category, $year, $isbn)";
	$result = $pdo->query($query);
}
while ($row = $result->fetch()) {
	$r0 = htmlspecialchars($row['author']);
	$r1 = htmlspecialchars($row['title']);
	$r2 = htmlspecialchars($row['category']);
	$r3 = htmlspecialchars($row['year']);
	$r4 = htmlspecialchars($row['isbn']);
	echo <<<_END
<pre>
Author $r0
Title $r1
Category $r2
Year $r3
ISBN $r4
</pre>
<form action='index.php' method='post'>
<input type='hidden' name='delete' value='yes'>
<input type='hidden' name='isbn' value='$r4'>
<input type='submit' value='DELETE RECORD'></form>
_END;
}
function get_post($pdo, $var): string {
	return $pdo->quote($_POST[$var]);
}