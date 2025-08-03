import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
export const usercontext= createContext({});
export function UserContextProvider({children})
{

    const [user, setUser]=useState(null);
    useEffect(()=>{
        if(!user)
        {
            axios.get('/profile',{withCredentials:true}).then(({data})=>{
                setUser(data)
            })
        }
    },[])
    return(
        <usercontext.Provider value={{user , setUser}}>
            {children}
            </usercontext.Provider>
    )
}