<script>
	import { S_onHistory } from "../../store/store";


    
</script>
<ol>
    {#each $S_onHistory as history}
    <li >
        <button>Go to {history.msg} </button>
    </li>
    {/each}
</ol>


