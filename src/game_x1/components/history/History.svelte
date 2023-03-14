<script>
	import { onBoard, onHistory, S_onHistory,updateBoard,updateStage } from "../../store/store";

    let historys = [
        {xy: [1,1], player: "o", stage: 1},
        // {xy: [2,2], player: "x", stage: 2},
        // {xy: [2,3], player: "o", stage: 3},
        // {xy: [4,4], player: "x", stage: 4},
        // {xy: [2,4], player: "x", stage: 5},
        // {xy: [2,2], player: "x", stage: 2},
    ]

    
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
                <div class="flex justify-around items-center ">
                    <span class="text-center">{history.xy[0]}{history.xy[1]}</span>
                    <span>{history.player}</span>
                    <span>{history.stage}</span>
                </div>
            </div>
        {/each}
    </div>
</div>



<style>
    
</style>
