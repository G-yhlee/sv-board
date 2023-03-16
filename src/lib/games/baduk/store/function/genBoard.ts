export const genBoard = (x:number) => new Array(x).fill(new Array(x).fill("1,1")).map((arr,x)=>arr.map((_:any,y:any)=>({xy:[x+1,y+1], player: ""})))
