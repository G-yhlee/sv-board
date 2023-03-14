import { match,P } from 'ts-pattern';
import { get } from 'svelte/store'
// import logger from '$lib/fucntion/logger';

import {S_onHistory,S_onBoard} from './store'



export function onHistory(cell:any) {
    const prev_history = get(S_onHistory)
    const [x,y] = cell.xy

    S_onHistory.update(s=>s.concat({...cell,
        stage: prev_history[prev_history.length-1].stage+1,
        player: prev_history[prev_history.length-1].player=="X" ? "O" : "X"
    }))
    
    S_onBoard.update(s=>{
        s[x-1][y-1] = {...s[x-1][y-1], player: prev_history[prev_history.length-1].player == "X" ? "O" : "X"}
        return s
    })

}
