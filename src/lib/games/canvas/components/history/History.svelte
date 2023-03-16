<script>
	import { onSelectedStage } from "../../store/onSelectedStage";
	import { onBoard, onHistory, S_onHistory,updateBoard,updateStage } from "../../store/store";

</script>

<div class="flex  bg-slate-300  justify-center items-center ml-[30px] p-[10px]">
    <div class="">
        <div>
            <div>
                <span>착점위치</span>
                <span>플레이어</span>
                <span>스테이지</span>
            </div>
        </div>
        {#each $S_onHistory as history}
            <div>
                <button 
                class="flex justify-around items-center hover:bg-slate-400 hover:cursor-pointer w-[100%]"
                on:click={
                    ()=>onSelectedStage(history.stage)
                }
                
                >
                    <span class="text-center">{history.xy[0]}{history.xy[1]}</span>
                    <span>{history.player}</span>
                    <span>{history.stage}</span>
                </button>
            </div>
        {/each}
    </div>
</div>



<style>
    
</style>
