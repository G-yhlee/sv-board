import { writable, type Writable } from 'svelte/store'
import { onNav } from './onNav'


const PageName = {
    ["tictactoe"]: {name:"tic-tac-toe"},
    ["tetris"]: {name:"tetris"},
    ["baduk"]: {name:"baduk"},
    ["cytosketch"]: {name:"cytosketch"},
}

const S_onNav = writable(PageName.tictactoe.name)


export { 
	S_onNav,
    onNav,
    PageName,
}
