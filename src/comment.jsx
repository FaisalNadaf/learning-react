import { useState } from "react";

export default function Comment(){


     let [FormData,setForrmData]=useState({
        username:"",
        rating:"",
        comment:"",
     });

     let handelInputChange=(event)=>{
        setForrmData((currData)=>{
            return {...currData,[event.target.name]:event.target.value
            }
        });

     };

     let handelSubmit=(event)=>{
        event.preventDefault();
        setForrmData({
            username:"",
            rating:"",
            comment:"",
        });
     };

    return( 
        <>
        <form onSubmit={handelSubmit}>
            <label htmlFor="username">username</label>
            <input type="text" placeholder="username" id="username" name="username" value={FormData.username} onChange={handelInputChange} />
            <br /><br /><br />

            <label htmlFor="rating">rating</label>
            <input type="text" placeholder="rating" id="rating" name="rating" value={FormData.rating} onChange={handelInputChange} />
            <br /><br /><br />

            <label htmlFor="comment">comment</label>
            <textarea type="text" placeholder="comment" id="comment" name="comment" value={FormData.comment} onChange={handelInputChange} />
            <br /><br /><br />

            <button>submit</button>
        </form>
        </>
    )
}