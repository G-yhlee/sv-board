<script lang="ts">
	import { each } from "svelte/internal";
	import { onPlayer,onBoard, S_onBoard, onHistory, updateStage } from "../../store/store";
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

{#each $S_onBoard as xs}
<div class="board-row">
	{#each xs as x}
		<button 
		on:click={ () => {
			if(x.player) return
			onBoard(x) 
			onPlayer(x)
			onHistory(x)
			updateStage(x)
			} 
		}
		>{ x.player }</button> 
	{/each}	
</div>
{/each}




