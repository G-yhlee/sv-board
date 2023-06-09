import { writable, type Writable } from 'svelte/store'
import { onPlayer } from './onPlayer'
import { onBoard } from './onBoard'
import { onHistory } from './onHistory'
import { updateBoard } from './updateBoard'
import { updateStage } from './updateStage'
import { onSelectedStage } from './onSelectedStage'

import { get } from 'svelte/store'
import { genBoard } from './function/genBoard'


const S_onBoard = writable(genBoard(3))
const S_onHistory = writable([
	{xy: [0,0], player: "O", stage: 0},
])

const S_onPlayer:Writable<string> = writable("X")
const S_onStage = writable(0)
const S_winner = writable("")
const S_onSelectedStage = writable(0)

export { 
	S_winner,
	S_onPlayer,
	onPlayer,
	S_onBoard,
	onBoard,
	updateBoard,
	S_onHistory,
	onHistory,
	S_onStage,
	updateStage,
	S_onSelectedStage,
	onSelectedStage
}
