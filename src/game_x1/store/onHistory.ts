import { match,P } from 'ts-pattern';
import { get } from 'svelte/store'

// import logger from '$lib/fucntion/logger';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import {S_onHistory,S_onBoard} from './store'

import { makeBoard } from './function/makeBoard';


export function onHistory(cell:any) {
    const prev_history = get(S_onHistory)
    const prev_last = prev_history[prev_history.length-1]
    const {stage,player} = prev_last
    const [x,y] = cell.xy

    S_onHistory.update(s=>s.concat({...cell,
        stage: stage+1,
        player: player=="X" ? "O" : "X"
    }))

    
    S_onBoard.update(s=>{
        return makeBoard(get(S_onHistory),3)
    })

}
