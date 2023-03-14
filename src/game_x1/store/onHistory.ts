import { match,P } from 'ts-pattern';
import { get } from 'svelte/store'
// import logger from '$lib/fucntion/logger';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import {S_onHistory,S_onBoard} from './store'



export function onHistory(cell:any) {
    const prev_history = get(S_onHistory)
    const prev_last = prev_history[prev_history.length-1]
    const {stage,player} = prev_last
    const [x,y] = cell.xy

    S_onHistory.update(s=>s.concat({...cell,
        stage: stage+1,
        player: player=="X" ? "O" : "X"
    }))

    console.log(get(S_onHistory));

    const makeBoard = (history :any) => {
        
        // const genBoard = (x:number) => new Array(x).fill(new Array(x).fill("1,1")).map((arr,x)=>arr.map((_:any,y:any)=>({xy:[x+1,y+1], player: ""})))

        // let map

        // history.map(({player,xy} : any ) => {
        //     let [x,y] = xy
        //     genBoard(5)
            
        //     // return 
        // })

    }
    
    
    S_onBoard.update(s=>{
        s[x-1][y-1] = {...s[x-1][y-1], player: player == "X" ? "O" : "X"}
        return s
    })

}
