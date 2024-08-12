    import { useState } from "react";
    import { Button } from "../ui/button";
    import { Input } from "../ui/input";
    import { Label } from "../ui/label";
    import { Checkbox } from "../ui/checkbox";
    import { Select,SelectTrigger,SelectValue,SelectContent,SelectItem } from "../ui/select";
    import { useComponentContext } from "@/context/contextComponent";
    import { VariantType } from "@/context/contextComponent";
    import { ReloadIcon } from "@radix-ui/react-icons"


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

        const handleSizeChange = (value)  =>{
            setState((prev) => ({
                ...prev,
                button : {...prev.button, size : value}
            }))
        }
        const handleLoadingState = (checked : boolean)  =>{
            setState((prev) => ({
                ...prev,
                button : {...prev.button, loading : checked}
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
                        <SelectItem value="destructive">destructive</SelectItem>
                        <SelectItem value="outline">outline</SelectItem>
                        <SelectItem value="secondary">secondary</SelectItem>
                        <SelectItem value="ghost">ghost</SelectItem>
                        <SelectItem value="link">link</SelectItem>
                    </SelectContent>
                </Select>
             </div>
             <div className="space-y-2">
             <Label htmlFor="btn-text" className="text-sm font-medium">Size</Label>
             <Select onValueChange={handleSizeChange}>
                    <SelectTrigger id="variant">
                        <SelectValue placeholder="default" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectItem value="default">default</SelectItem>
                        <SelectItem value="sm">sm</SelectItem>
                        <SelectItem value="lg">lg</SelectItem>
                       
                    </SelectContent>
                </Select>
             </div>
             <div className="space-y-2">
             <Label htmlFor="btn-text" className="text-sm font-medium">Loading State</Label>
                <div className="flex items-center space-x-2">
                    <Checkbox id="loading"
                    checked = {state.button.loading}
                    onCheckedChange={handleLoadingState}
                    />
                    <Label
                    htmlFor="loading"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Loading State
                    </Label>
                </div>
             </div>
        </div>
        )
    }
    

    export function MainButton(){
        const  {state} = useComponentContext();
         
        if(state.button.loading){
            return(
                <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            )
        }else{
            return(
            
                <Button variant={state.button.variant} size={state.button.size}>{state.button.text}</Button>
            )
        }
        
    }
