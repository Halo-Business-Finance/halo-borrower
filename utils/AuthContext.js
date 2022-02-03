import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [formState, setFormState] = useState(1);
    return (
        <AuthContext.Provider value={{ formState, setFormState }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
