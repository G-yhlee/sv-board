<script>
	let Dom_Stone ;
	// $: Dom_Stone = document.getElementById("stones");
  
	function createStone(x, y) {
	  console.log(x,y)
	  const stone = document.createElement("div");
	  stone.classList.add("stone");
	  stone.style.left = 100+x * 25 + "px";
	  stone.style.top = 10 + y * 25 + "px";
	  stone.style.width = 20 + "px";
	  stone.style.height = 20 + "px";
	  stone.style.borderRadius = 50+"%";
	  stone.style.backgroundColor= "black";
	  stone.style.position= "absolute";
	  stone.style.transform= "translate(-50%, -50%)";
	  Dom_Stone.appendChild(stone);
	}
  </script>
  
  <button   class="pt-[10px] bg-slate-300 " id="board" bind:this={Dom_Stone}  on:click={(e) =>{
	const x = Math.floor(e.offsetX / 25);
	const y = Math.floor(e.offsetY / 25);
	createStone(x, y);
  }}>
	
	<!-- <button bind:this={Dom_Stone} id="stones"></button> -->
  </button>
  
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
  border: 1px solid black;
}
.stone {
  z-index: -10;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>