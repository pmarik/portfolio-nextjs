"use client";

import React, {createContext, useState, useEffect, useContext} from 'react'
import { useRouter } from 'next/router';

type TContactContext = {
    isContact: boolean;
    setIsContact: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactContext = createContext<TContactContext | null>(null);


export default function ContactContextProvider({children}: {children: React.ReactNode,}){
    const [isContact, setIsContact] = useState(false)

    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            setIsContact(false)
        }

        router.events.on('routeChangeStart', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
        router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router.events])


    return (
        <ContactContext.Provider
            value={{
                isContact,
                setIsContact
            }}
        >
            {children}
        </ContactContext.Provider>
    )
}

export function useContactContext(){
    const context = useContext(ContactContext);
    if(!context){
        throw new Error(
            "useContactContext must be used within a ContactContextProvider"
        );
    }
    return context;
}