<script>
	import { onBoard, onHistory, S_onHistory,updateBoard } from "../../store/store";


    
</script>
<ol>
    {#each $S_onHistory as history}
    <li >
        <button on:click={()=>updateBoard(history.board)}>Go to {history.msg} </button>
    </li>
    {/each}
</ol>


