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

<Square />