import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [formState, setFormState] = useState(0);
    const [username, setUsername] = useState(null);
    const [phone, setPhone] = useState(null);
    return (
        <AuthContext.Provider value={{
             formState, 
             setFormState ,
             setPhone,
             phone,
             username,
             setUsername
             }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
