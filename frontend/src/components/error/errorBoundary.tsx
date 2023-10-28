import React, { useState,useEffect } from "react";

interface IErrorBoundaryProps{
    children: React.ReactNode;
}
export const ErrorBoundary=({children}:IErrorBoundaryProps)=>{
    const [hasError,setHasError]=useState<boolean>(false);
    const [error,setError]=useState<Error|null>(null);
    const [errorInfo,setErrorInfo]=useState<React.ErrorInfo|null>(null);

    useEffect(()=>{
        const handleError=(event:ErrorEvent)=>{
            const error=event.error;
            setHasError(true);
            setError(error);
            setErrorInfo(error?error.stack:null)
        }
        window.addEventListener('error',handleError);
        return()=>{
            window.removeEventListener('error',handleError)
        }
    },[])

    if(hasError){
        return (<div>
            <h2>Something went wrong</h2>
            <p>{error && error.toString()}</p>
            <p>Component Stack Trace:</p>
           <pre>{errorInfo && errorInfo.componentStack}</pre>
            </div>)
    }
    return(
        <>
        {children}
        </>
    )

}
