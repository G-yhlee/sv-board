import { writable, type Writable } from 'svelte/store'
import { onPlayer } from './onPlayer'
import { onBoard } from './onBoard'
import { onHistory } from './onHistory'
import { updateBoard } from './updateBoard'
import { get } from 'svelte/store'

let genBoard = (x:number) => new Array(x).fill(new Array(x).fill("1,1")).map((arr,x)=>arr.map((_:any,y:any)=>({value:`${x+1},${y+1}`, player: ""})))

const S_onPlayer:Writable<String> = writable("X")
const S_onBoard = writable(genBoard(3))
const S_onHistory = writable([{stage: 1, msg: "game start", board: get(S_onBoard).map(v=>[...v])}])



export { 
	S_onPlayer,
	onPlayer,
	S_onBoard,
	onBoard,
	updateBoard,
	S_onHistory,
	onHistory,
}
