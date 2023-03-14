<script>
	import { onBoard, onHistory, S_onHistory,updateBoard,updateStage } from "../../store/store";


    let historys = [
        // {xy: [0,0], player: "x", stage: 0},
        {xy: [1,1], player: "o", stage: 1},
        {xy: [2,2], player: "x", stage: 2},
        {xy: [2,3], player: "o", stage: 3},
        {xy: [4,4], player: "x", stage: 4},
        {xy: [2,4], player: "x", stage: 5},
    ]

    
</script>

<div class=" bg-slate-300 flex justify-center items-center">
    <div class="">
        <div>
            <div>
                <span>착점위치</span>
                <span>플레이어</span>
                <span>스테이지</span>
            </div>
        </div>
        {#each historys as history}
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

<!-- {each} -->
<!-- 
<ol>
    {#each $S_onHistory as history}
    <li >
        <button on:click={
            ()=>{
                updateBoard(history.board)
                updateStage(history.stage)
            }
        }>Go to {history.msg} </button>
    </li>
    {/each}
</ol>
 -->


<style>
    
</style>
