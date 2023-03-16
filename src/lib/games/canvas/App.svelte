<script>
	import { onMount } from 'svelte';

	// let canvas;
	let canvas;
	// let canvas2;
	

	onMount(() => {
	const context = canvas.getContext('2d');
	// const context2 = canvas2.getContext('2d');

	function 라디안(각도) {
        return 각도 * Math.PI / 180;
      }
	context.beginPath();
      context.arc(300, 200, 50, 0, 라디안(360), false);
      context.stroke();
      context.beginPath();
      context.arc(500, 100, 20, 0, 라디안(360), false);
      context.stroke();


	// context2.arc(100, 100, 50, 0, Math.PI*2, false);
	// context2.fill();
		
	});
</script>

<!-- <canvas
	bind:this={canvas}
	width={32}
	height={32}
></canvas> -->

<h1>캔버스 사이즈 설정</h1>
<canvas bind:this={canvas} class="canvas" width="500" height="300"></canvas>
<!-- <canvas bind:this={canvas2} class="canvas canvas2" width="1000" height="600"></canvas> -->


<style>
      body {
        margin: 0;
      }
      .canvas {
        /* width: 500px; */
        /* height: 300px; */
        background: #eee;
      }
</style>
