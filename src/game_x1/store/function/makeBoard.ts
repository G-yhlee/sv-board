import { genBoard } from './genBoard';
export const makeBoard = (history :any,size: number) => {
    const board = genBoard(size)

    history.filter((v: { stage: number; })=>v.stage!=0).forEach((v: {player: any; xy: [any, any] }) => {
        console.log(v);
        
        const [x,y] = v.xy
        board[x-1][y-1] = {...board[x-1][y-1], player: v.player}
    })

    
    return board
}
