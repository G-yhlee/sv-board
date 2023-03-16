import { match,P } from 'ts-pattern';
import { get } from 'svelte/store'
// import logger from '$lib/fucntion/logger';

import {S_onBoard, S_onPlayer} from './store'



export function updateBoard(board:any) {
    S_onBoard.update(s=>[...board])
}
