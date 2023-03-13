import { writable } from 'svelte/store'
import { onPlayer } from './onPlayer'

const S_onPlayer = writable("X")


export { 

	S_onPlayer,
	onPlayer
	// F_onPage,
	// S_onPageData

}
