<script>
	// @ts-nocheck
	import Board from './components/board/Board.svelte';
	import History from './components/history/History.svelte';
	import Player from './components/player/player.svelte';
	import Stage from './components/stage/stage.svelte';
	import Winner from './components/winner/winner.svelte';
	import Setting from './components/setting/setting.svelte';
	const canvas = document.querySelector('.canvas');
	const canvas2 = document.querySelector('.canvas2');
	const context = canvas.getContext('2d');
	const context2 = canvas2.getContext('2d');

	context.arc(100, 100, 50, 0, Math.PI*2, false);
	context2.arc(100, 100, 50, 0, Math.PI*2, false);
	context.fill();
	context2.fill();

</script>
<h1>캔버스 사이즈 설정</h1>
<canvas class="canvas" width="500" height="300"></canvas>
<canvas class="canvas canvas2" width="1000" height="600"></canvas>


<style>
	   
      .canvas {
        width: 500px;
        height: 300px;
        background: #eee;
      }
</style>
