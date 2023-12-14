import axios from 'axios'
import React, { useState } from 'react'

const VarifyEmail = () => {
    const [t,setT] = useState(true)
    const [text, setText] = useState(
      "Your Email is not varified. Please varified it."
    );
    const varifyEmailID = async () => {

        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDkixPtmAYpRieik_IySWFQgHiBpWJZrt4",
          {
            requestType: "VERIFY_EMAIL",
            idToken: localStorage.getItem("idToken"),
          } 
        );
        setText("Please check your mail. and confirm the mail.");
        setT(false)
    }

    return (
      <div className='m-5'>
            <p className='display-3'>{text}</p>
      {t&&  <button onClick={()=>varifyEmailID()} className=" btn btn-lg btn-secondary">Varify Email</button>
     } </div>
    );
}

export default VarifyEmail