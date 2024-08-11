    import { useState } from "react";
    import { Button } from "../ui/button";
    import { Input } from "../ui/input";
    import { Label } from "../ui/label";
    import { Select,SelectTrigger,SelectValue,SelectContent,SelectItem } from "../ui/select";
    import { useComponentContext } from "@/context/contextComponent";
    import { VariantType } from "@/context/contextComponent";
    


    export  function ButtonComponent(){
        const { state,setState} = useComponentContext();

        const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
            setState(prev => ({
                ...prev,
                button: { ...prev.button, text: e.target.value }
            }))
        }

        const handleVariantChange = (value)  =>{
            setState((prev) => ({
                ...prev,
                button : {...prev.button, variant : value}
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
             <div className="space-y-2">
             <Label htmlFor="btn-text" className="text-sm font-medium">Variant</Label>
             <Select onValueChange={handleVariantChange}>
                    <SelectTrigger id="variant">
                        <SelectValue placeholder="default" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectItem value="default">default</SelectItem>
                        <SelectItem value="destructive">desctructive</SelectItem>
                        <SelectItem value="outline">outline</SelectItem>
                        <SelectItem value="secondary">secondary</SelectItem>
                        <SelectItem value="ghost">ghost</SelectItem>
                        <SelectItem value="link">link</SelectItem>
                    </SelectContent>
                </Select>
             </div>
        </div>
        )
    }
    

    export function MainButton(){
        const  {state} = useComponentContext();
        return(
            <Button variant={state.button.variant}>{state.button.text}</Button>
        )
    }
