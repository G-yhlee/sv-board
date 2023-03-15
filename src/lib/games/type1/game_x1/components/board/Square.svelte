<script lang="ts">
	import { each } from "svelte/internal";
	import { onPlayer,onBoard, S_onBoard, onHistory, updateStage, S_onSelectedStage, onSelectedStage, S_winner, S_onHistory } from "../../store/store";
	// @ts-nocheck
	
</script>

<style>
	button {
		background: #fff;
		border: 1px solid #999;
		float: left;
		font-size: 24px;
		font-weight: bold;
		line-height: 34px;
		
		margin: -1px;
		padding: 0;
		text-align: center;
		width: 50px;
		height: 50px; 
	}

	button:focus {
		outline: none;
	}
</style>

{#each $S_onBoard as cells}
<div class="board-row">
	{#each cells as cell}
		<button 
		class="hover:cursor-pointer {cell.player? "hover:bg-gray-200" : "hover:bg-green-200"} {$S_winner && "hover:bg-gray-200"}"
		on:click={ () => {
			if(cell.player ) return
			if($S_winner && $S_onHistory[$S_onHistory.length-1].stage == $S_onSelectedStage ) return
			onSelectedStage($S_onSelectedStage+1)
			onHistory(cell)
			} 
		}
		>{ cell.player }</button> 
	{/each}	
</div>
{/each}




