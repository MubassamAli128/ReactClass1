import React from "react";
import {buttonBgColor} from '../../assets/themes/buttonTheme'

const Button=(Bdata)=>{
    return(
        <button  className={`${buttonBgColor} w-full p-4 rounded-full font-semibold text-white hover:bg-blue-600`}>
            {Bdata.text}
        </button>
    )
}


export default Button;