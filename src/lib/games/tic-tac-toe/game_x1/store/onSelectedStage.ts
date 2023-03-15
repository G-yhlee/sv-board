import { get } from 'svelte/store';
import { makeBoard } from './function/makeBoard';
import {S_onHistory, S_onSelectedStage,updateBoard} from './store'

export function onSelectedStage(stage) {
    S_onSelectedStage.update(s=>stage)

    const history = get(S_onHistory).slice(0,get(S_onSelectedStage)+1)
    
    updateBoard(makeBoard(history,3))
}
