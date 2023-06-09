import { match,P } from 'ts-pattern';
import { get } from 'svelte/store'

import {S_onBoard, S_onPlayer} from './store'

export function onBoard(box:any) {
    
    const [x,y] = box.xy.split(",")

    S_onBoard.update(s=>{
        s[x-1][y-1] = {...s[x-1][y-1], player: get(S_onPlayer)}
        return s
    })
}
