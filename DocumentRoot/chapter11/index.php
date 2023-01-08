<?php
require_once 'form.php';

class Cliente {

	private PDO $pdo;

	public function __construct() {
		$host = 'mysql80';
		$data = 'publications';
		$user = 'root';
		$pass = '123';
		$chrs = 'utf8mb4';
		$attr = "mysql:host=$host;dbname=$data;charset=$chrs";
		$opts = [
			PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
			PDO::ATTR_EMULATE_PREPARES => false,
		];


		try {
			$this->pdo = new PDO($attr, $user, $pass, $opts);
			//			$this->form();
			$this->query1();
		} catch (PDOException $e) {
			throw new PDOException($e->getMessage(), (int)$e->getCode());
		}
	}

	function form(): void {
		$query = "SELECT * FROM TEST";
		$result = $this->pdo->query($query);

		if (isset($_POST['delete']) && isset($_POST['isbn'])) {
			$isbn = $this->get_post($this->pdo, 'isbn');
			$query = "DELETE FROM TEST WHERE isbn=$isbn";
			$result = $this->pdo->query($query);
		}

		if (isset($_POST['author']) &&
			isset($_POST['title']) &&
			isset($_POST['category']) &&
			isset($_POST['year']) &&
			isset($_POST['isbn'])
		) {
			$author = $this->get_post($this->pdo, 'author');
			$title = $this->get_post($this->pdo, 'title');
			$category = $this->get_post($this->pdo, 'category');
			$year = $this->get_post($this->pdo, 'year');
			$isbn = $this->get_post($this->pdo, 'isbn');
			$query = "INSERT INTO TEST VALUES" . "($author, $title, $category, $year, $isbn)";
			$result = $this->pdo->query($query);
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
	}

	function query1(): void {
		$stmt = $this->pdo->prepare('INSERT INTO classics VALUES(?,?,?,?,?,?)');
		$stmt->bindParam(1, $author, PDO::PARAM_STR, 128);
		$stmt->bindParam(2, $title, PDO::PARAM_STR, 128);
		$stmt->bindParam(3, $type, PDO::PARAM_STR, 16);
		$stmt->bindParam(4, $year, PDO::PARAM_INT);
		$stmt->bindParam(5, $id, PDO::PARAM_INT);
		$stmt->bindParam(6, $isbn, PDO::PARAM_STR, 13);
		$author = 'Micael Testes SMT';
		$title = 'Emily Brontë';
		$type = 'Classic Fiction';
		$year = '1847';
		$id = 12345;
		$isbn = '9780553212587';

		$stmt->execute([$author, $title, $type, $year, $id, $isbn]);
		printf("%d Row inserted.\n", $stmt->rowCount());

		$query = "SELECT * FROM customers";
		$result = $this->pdo->query($query);
		while ($row = $result->fetch()) {
			$custname = htmlspecialchars($row['name']);
			$custisbn = htmlspecialchars($row['isbn']);
			echo "$custname purchased ISBN $custisbn: <br>";
			$subquery = "SELECT * FROM classics WHERE isbn='$custisbn'";
			$subresult = $this->pdo->query($subquery);
			$subrow = $subresult->fetch();
			$custbook = htmlspecialchars($subrow['title']);
			$custauth = htmlspecialchars($subrow['author']);
			echo "&nbsp;&nbsp; '$custbook' by $custauth<br><br>";
		}
	}

	function get_post($pdo, $var): string {
		return $pdo->quote($_POST[$var]);
	}
}

new Cliente();