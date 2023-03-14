import { writable, type Writable } from 'svelte/store'
import { onPlayer } from './onPlayer'
import { onBoard } from './onBoard'
import { onHistory } from './onHistory'
import { updateBoard } from './updateBoard'
import { updateStage } from './updateStage'
import { get } from 'svelte/store'




const genBoard = (x:number) => new Array(x).fill(new Array(x).fill("1,1")).map((arr,x)=>arr.map((_:any,y:any)=>({xy:[x+1,y+1], player: ""})))


const S_onBoard = writable(genBoard(3))
const S_onHistory = writable([
	{xy: [0,0], player: "O", stage: 0},
	    //     {xy: [2,2], player: "x", stage: 2},
        // {xy: [2,3], player: "o", stage: 3},
        // {xy: [4,4], player: "x", stage: 4},
        // {xy: [2,4], player: "x", stage: 5},
        // {xy: [2,2], player: "x", stage: 2},

])








const S_onPlayer:Writable<string> = writable("X")
const S_onStage = writable(0)



export { 
	S_onPlayer,
	onPlayer,
	S_onBoard,
	onBoard,
	updateBoard,
	S_onHistory,
	onHistory,
	S_onStage,
	updateStage,
}
