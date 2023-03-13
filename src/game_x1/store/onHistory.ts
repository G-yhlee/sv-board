import { match,P } from 'ts-pattern';
import { get } from 'svelte/store'
// import logger from '$lib/fucntion/logger';

import {S_onHistory,S_onBoard} from './store'



export function onHistory(board:any) {
    console.log("====")
    console.log(get(S_onBoard))
    S_onHistory.update(s=>s.concat([{
        stage:s[s.length-1].stage+1,
        msg:`move #${s[s.length-1].stage}`,
        board: get(S_onBoard).map(v=>[...v]),
    }]))

    console.log(get(S_onHistory));
    
}
