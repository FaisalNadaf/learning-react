import { useState } from "react";
export default function LudoBoard() {
  let [move, setmove] = useState({
    red: 0,
    blue: 0,
    yello: 0,
    green: 0,
  });
  let upblue=()=>{
        
        setmove((premove)=>{
             return{...premove,blur:premove.blue+=1}
        });
  };
  let upred=()=>{
        
    setmove((premove)=>{
         return{...premove,blur:premove.red+=1}
    });
};
let upgreen=()=>{
        
    setmove((premove)=>{
         return{...premove,blur:premove.green+=1}
    });
};
let upyello=()=>{
        
    setmove((premove)=>{
         return{...premove,blur:premove.yello+=1}
    });
};
  return (
     
    <>
      <p>count={move.blue}</p>
      <button onClick={upblue} style={{backgroundColor:"blue"}}>+1</button>
      <p>count={move.red}</p>
      <button onClick={upred}style={{backgroundColor:"red"}}>+1</button>
      <p>count={move.green}</p>
      <button onClick={upgreen} style={{backgroundColor:"green"}}>+1</button>
      <p>count={move.yello}</p>
      <button  onClick={upyello} style={{backgroundColor:"yellow"}}>+1</button>
    </>
  );
}
