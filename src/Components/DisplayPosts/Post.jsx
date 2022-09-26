import React, { useState } from 'react';

function Post(props){
    const [val,setVal]=useState([]);
    const handleAdd=()=>{
        const abc=[...val,[]]
        setVal(abc)
    }
    const handleChange=(onChangeValue,i)=>{
        const inputdata=[...val]
        inputdata[i]=onChangeValue.target.value;
        setVal(inputdata)
   }
   console.log(val,"data-")
    return (
        <>
        <button onClick={()=>handleAdd()}>Add</button>
            {val.map((data,i)=>
            {
                return(
                    <div>
                        <input onChange={e=>handleChange(e,i)} />
                        <button>hey where am I?</button>
                    </div>
                )
            })}
        </>
    );
}
export default Post;