import { writable, type Writable } from 'svelte/store'
import { onPlayer } from './onPlayer'
import { onBoard } from './onBoard'
import { onHistory } from './onHistory'
import { updateBoard } from './updateBoard'
import { updateStage } from './updateStage'
import { get } from 'svelte/store'

const genBoard = (x:number) => new Array(x).fill(new Array(x).fill("1,1")).map((arr,x)=>arr.map((_:any,y:any)=>({value:`${x+1},${y+1}`, player: ""})))

const S_onPlayer:Writable<string> = writable("X")
const S_onBoard = writable(genBoard(3))
const S_onHistory = writable([{xy: [],player: "", stage: 0}])
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
