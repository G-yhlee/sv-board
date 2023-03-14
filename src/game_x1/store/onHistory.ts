import { match,P } from 'ts-pattern';
import { get } from 'svelte/store'

// import logger from '$lib/fucntion/logger';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import {S_onHistory,S_onBoard} from './store'
import { genBoard } from './function/genBoard';



export function onHistory(cell:any) {
    const prev_history = get(S_onHistory)
    const prev_last = prev_history[prev_history.length-1]
    const {stage,player} = prev_last
    const [x,y] = cell.xy

    S_onHistory.update(s=>s.concat({...cell,
        stage: stage+1,
        player: player=="X" ? "O" : "X"
    }))


    const makeBoard = (history :any,size: number) => {
        const board = genBoard(size)
   
        history.filter((v: { stage: number; })=>v.stage!=0).forEach((v: {player: any; xy: [any, any] }) => {
            console.log(v);
            
            const [x,y] = v.xy
            board[x-1][y-1] = {...board[x-1][y-1], player: v.player}
        })

        console.log(board);
        
        return board
    }
    
    
    S_onBoard.update(s=>{
        return makeBoard(get(S_onHistory),3)
    })

}
