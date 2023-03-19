<script>
	import { onMount } from "svelte";

//https://cdn.online-go.com/5.1/img/kaya.jpg
let canvas ;
//= document.getElementById('board');
onMount(() => {
const ctx = canvas.getContext('2d');
const cellSize = canvas.width / 19;
for (let i = 0; i < 19; i++) {
  // draw horizontal line
  ctx.beginPath();
  ctx.moveTo(0, i * cellSize);
  ctx.lineTo(canvas.width, i * cellSize);
  ctx.stroke();
  
  // draw vertical line
  ctx.beginPath();
  ctx.moveTo(i * cellSize, 0);
  ctx.lineTo(i * cellSize, canvas.height);
  ctx.stroke();
}

for (let i = 3; i <= 15; i += 6) {
  for (let j = 3; j <= 15; j += 6) {
    ctx.fillRect(i * cellSize - 2, j * cellSize - 2, 4, 4);
  }
}

// return () => {
// 			cancelAnimationFrame(frame);
// 		};
})

</script>
<canvas bind:this={canvas} id="board" width="400" height="400"></canvas>


<style>

#board {
  margin-top: 10px;
  margin-left: 10px;
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  background-image: url("https://cdn.online-go.com/5.1/img/kaya.jpg");
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  grid-template-rows: repeat(19, 1fr);
  
  gap: 1px;
  border: 1px solid black;
}


</style>