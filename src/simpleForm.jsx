
import React, { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        user: "manel123",
        email: "manelballester@gmail.com"
    });
    const { user, email } = formState;

    const changeValue = (e) => {
        const { name, value } = e.target; //de el target desestructuramos el name y el value
        setFormState({
            ...formState,
            [name]: value //usamos [] para que el objeto sea dinamico es decir que pueda cambiar su valor
        });
    }

      /*
    Sin desestruturacion sería asi
    
    const changeValue = (e) => {
    setFormState({
        ...formState,
        [e.target.name]: e.target.value
    });
}
} */



    return (
        <div className='d-flex flex-column mt-4 mx-5 gap-3'>
            <h1>Simple Form</h1>
            <input
                className='form-control'
                type="text"
                name='user'
                placeholder='pon tu username'
                value={user}
                onChange={changeValue}
            />

            <input
                className='form-control mt-3'
                type="email"
                name='email'
                placeholder='pon tu email'
                value={email}
                onChange={changeValue}
            />
            {(user === "manel1234") &&<Message/>}
            
        </div>
    )
}

export default SimpleForm;