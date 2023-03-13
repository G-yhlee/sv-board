<script>
	import Square from './Square.svelte';
</script>

<style>
	.board-row:after {
		clear: both;
		content: "";
		display: table;
	}
</style>

<div>
	<div class="board-row">
		<Square />
		<Square />
		<Square />
	</div>
	<div class="board-row">
		<Square />
		<Square />
		<Square />
	</div>
	<div class="board-row">
		<Square />
		<Square />
		<Square />
	</div>
</div>
