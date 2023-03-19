<script>
	let Dom_Stone ;
	// $: Dom_Stone = document.getElementById("stones");
    let className;
    export { className as class };
	function createStone(x, y) {
	  console.log(x,y)
	  const stone = document.createElement("div");
	  stone.classList.add("stone");
	  stone.style.left = 100+x * 25 + "px";
	  stone.style.top = 10 + y * 25 + "px";
	  Dom_Stone.appendChild(stone);
	}
  </script>
  
  <div>
  <button   class="pt-[10px] bg-slate-300 " id="board" bind:this={Dom_Stone}  on:click={(e) =>{
	const x = Math.floor(e.offsetX / 25);
	const y = Math.floor(e.offsetY / 25);
	createStone(x, y);
  }}>
  </button>
</div>
  <button  class="pt-[10px] bg-slate-300 stone" ></button>


<style>

#board {
  margin-top: 10px;
  margin-left: 10px;
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  grid-template-rows: repeat(19, 1fr);
  gap: 1px;
  border: 1px solid black;}

  :global(.stone) {
	background-color: rgb(30, 17, 17) !important;
	position: absolute;
	width: 20px;
	height: 20px;
	border-Radius : 50%;
	transform: translate(-50%,-50%)
}
</style>