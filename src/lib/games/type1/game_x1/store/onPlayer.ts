import { match,P } from 'ts-pattern';
// import logger from '$lib/fucntion/logger';

import {S_onPlayer} from './store'

export function onPlayer(x:number) {
    console.log(x);
    
    S_onPlayer.update(s=>s=="X" ? "O" : "X")
    // logger(actionPattern)
    // let {pageLength, pageCurrent} = actionPattern

    // let eventResponse = match({...actionPattern, isEnd: (pageLength === pageCurrent), isStart: (pageCurrent===1) })
    // .with({ type: 'increase', isEnd: false  } , (res)=> {
    //     S_onPage.update(s=> Number(s+1))
    //     S_onPageData.update(s=> res)
    //     return {...res,msg: 'page right'}
    // })
    // eventResponse.run()
}
