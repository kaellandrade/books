<style>
	.box {
		display: flex;
		border: 1px solid #252020;
		border-radius: 10px;
		width: 300px;
		height: 250px;
		padding: 10px;
		justify-content: center;
	}
	.input-label{
		border-bottom: 1px solid rgba(35, 35, 35, 0.66);
		display: flex;
		flex-direction: column;
	}
	input{
		border: none;
	}
	.enviar-dados{
		cursor: pointer;
		margin: 10px 0 10px 0;
		width: 100%;
	}
</style>
<?php
echo <<<_END
<div class="box">
	<form action="index.php" method="post">
		<div class="input-label">
			<label for="">Author</label>  
			<input type="text" name="author">
		</div>
		<div class="input-label">
			<label for="">Title</label>  
			<input type="text" name="title">
		</div>
		<div class="input-label">
			<label for="">Category</label>  
			<input type="text" name="category">
		</div>
		<div class="input-label">
			<label for="">Year</label>  

			<input type="text" name="year">
		</div>
		<div class="input-label">
			<label for="">ISBN</label>  
			<input type="text" name="isbn">
		</div>
		<button class="enviar-dados" type="submit">Enviar dados</button>
	</form>
</div>
_END;