import { match,P } from 'ts-pattern';
// import logger from '$lib/fucntion/logger';

import {S_onNav} from './store'
import { goto } from "$app/navigation";
import { page } from "$app/stores"; 
import { get } from 'svelte/store';
export function onNav(pageName) {
    // const newUrl = new URL(get(page).url);
    // newUrl?.searchParams?.set('hello', 'world');
    // goto(pageName)
    goto("/game/"+pageName)
    S_onNav.update(s=>pageName)
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
