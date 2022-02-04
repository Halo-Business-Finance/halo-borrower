import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';


export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [formState, setFormState] = useState(0);
    const [username, setUsername] = useState(null);
    const [phone, setPhone] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        initialLoad();
      }, []);
    
      const initialLoad = async () => {
        const token  = sessionStorage.getItem("token")?.toString();
    console.log(token,'tk')
        if (token) {
        //   var decoded = await jwt_decode(token);
        //   if (decoded?.unique_name) {
            setAuthenticated(true);
            setLoading(false);
            console.log('dec')
            return;
        //   }
        } else {
          setLoading(false);
          setAuthenticated(false);
        }
      };
    return (
        <AuthContext.Provider value={{
             formState, 
             setFormState ,
             authenticated,
             setAuthenticated,
             loading,
             setLoading,
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
