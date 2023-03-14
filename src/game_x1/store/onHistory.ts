import { match,P } from 'ts-pattern';
import { get } from 'svelte/store'

// import logger from '$lib/fucntion/logger';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import {S_onHistory,S_onBoard, S_onSelectedStage, S_winner} from './store'

import { makeBoard } from './function/makeBoard';
import { transpose } from './function/transpose';
import { getDiagonals } from './function/diagonal';


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



    let getXLines = (board) => get(board).map(d=>d.map(d=>d.player))
    let getYLines = (board) => transpose(board)
    let lines = (board) => [...getXLines(board),...getYLines(getXLines(board)),...getDiagonals(getXLines(board))]
    let filter = (lines) => lines.map(v=>[...new Set(v)]).filter(v=>v.length == 1).filter(v=>["X","O"].includes(v[0]) )

    let winner = filter(lines(S_onBoard))
    console.log(winner);
    console.log(winner || "");
    
    S_winner.update(s=>winner.length ? winner : "")




}


