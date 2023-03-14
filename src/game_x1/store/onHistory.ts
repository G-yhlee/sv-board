import { match,P } from 'ts-pattern';
import { get } from 'svelte/store'

// import logger from '$lib/fucntion/logger';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import {S_onHistory,S_onBoard, S_onSelectedStage} from './store'

import { makeBoard } from './function/makeBoard';


export function onHistory(cell:any) {


    S_onHistory.update(s=>
    {
        s.length = get(S_onSelectedStage)

        const prev_history = s
        const prev_last = prev_history[prev_history.length-1]
        const {stage,player} = prev_last
    
        return  s.concat({...cell,
            stage: stage+1,
            player: player=="X" ? "O" : "X"
        })
    })

    
    
    
    S_onBoard.update(s=>{
        return makeBoard(get(S_onHistory),3)
    })

    console.log(get(S_onBoard));

}
