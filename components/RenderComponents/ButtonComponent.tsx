    import { useState } from "react";
    import { Button } from "../ui/button";
    import { Input } from "../ui/input";
    import { Label } from "../ui/label";
import { useComponentContext } from "@/context/contextComponent";

    export  function ButtonComponent(){
        const { state,setState} = useComponentContext();

        const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
            setState(prev => ({
                ...prev,
                button: { ...prev.button, text: e.target.value }
            }))
        }
        return(
            <div className="space-y-4">
            <div className="space-y-2">
            <Label htmlFor="btn-text" className="text-sm font-medium">Button text</Label>
            <Input
                id="btn-text"
                defaultValue={state.button.text}
                onChange={handleTextChange}
                className="w-full"
            />
            </div>
            
        </div>
        )
    }
    

    export function MainButton(){
        const  {state} = useComponentContext();
        return(
            <Button>{state.button.text}</Button>
        )
    }
