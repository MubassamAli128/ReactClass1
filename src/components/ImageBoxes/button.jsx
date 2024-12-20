import React from "react";

const Button=(Bdata)=>{
    return(
        <button onClick={Bdata.onClick} className={`bg-blue-400 ${Bdata.w} p-4 rounded-full font-semibold text-white hover:bg-blue-600`}>
            {Bdata.text}
        </button>
    )
}


export default Button;