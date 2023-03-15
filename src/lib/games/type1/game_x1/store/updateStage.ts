import { match,P } from 'ts-pattern';
import { get } from 'svelte/store'

import {S_onHistory, S_onStage} from './store'

export function updateStage(stage:any) {
    S_onStage.update(s=> stage)
}
