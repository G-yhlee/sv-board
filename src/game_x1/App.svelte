<script>
	// @ts-nocheck
	import Board from './components/board/Board.svelte';
	import History from './components/history/History.svelte';
	import Player from './components/player/player.svelte';
	import Stage from './components/stage/stage.svelte';
	import Winner from './components/winner/winner.svelte';
	
</script>

<div class='game'>
	<div class='game-board'>
		<Board/>
	</div>
	<!-- <Player></Player> -->
	<!-- <Stage></Stage> -->
	<Winner></Winner>

	<History></History>
</div>

<style>
	.game {
		font: 14px "Century Gothic", Futura, sans-serif;
		margin: 20px;
		display: flex;
		flex-direction: row;
	}

	ol {
		padding-left: 30px;
	}
</style>
