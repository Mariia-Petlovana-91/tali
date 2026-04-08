import { useEffect } from "react";

export const useEscapeHook =(onEscape :() => void,active=true)=>{
    useEffect(()=>{
        if (!active) return;

        const handleEsc = (e:KeyboardEvent)=>{
            if(e.key === "Escape"){
                onEscape();
        }}

        window.addEventListener("keydown",handleEsc);

        return () => window.removeEventListener("keydown",handleEsc);
    },[onEscape,active])
}