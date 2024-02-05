import { useState } from "react";


export default function Liked(){
    let [like,setLike]=useState(false);
    let toggle=()=>{
            setLike(!like);

    }
    return(
        <>
        <p onClick={toggle}>{like ?(<i className="fa-solid fa-heart"></i>):
        (<i className="fa-regular fa-heart"></i>)}</p>
        </>
    );
}