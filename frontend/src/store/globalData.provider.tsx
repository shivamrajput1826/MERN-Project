import React,{useMemo,useReducer} from 'react';
import { GlobalDataContext } from './globalData.context';
import { globalDataReducer } from './globalData.reducer';

interface IGlobalDataProviderProps {
    children: React.ReactNode;
}

export function GlobalDataProvider({children}:IGlobalDataProviderProps){
    const [state,dispatch]=useReducer(globalDataReducer,{});

    const providerVal=useMemo(()=>{
        return {
            dispatch,
            state
        }
    },[state])
    return (
        <GlobalDataContext.Provider value={providerVal}>
            {children}
        </GlobalDataContext.Provider>
    )
}