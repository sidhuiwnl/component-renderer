import { useState } from "react"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useComponentContext } from "@/context/contextComponent"


interface AccordianTriggerBoxProps {
    onRemove: () => void;
}

function AccordianTriggerBox({onRemove} : AccordianTriggerBoxProps){
    return(
        <div className="border-2 p-1 rounded-lg">
            <div className="space-y-3 m-3">
                <Input/>
                <Textarea/>
                <Button variant="destructive" onClick={onRemove}>Remove Item</Button>
            </div>
        </div>
    )
}



export function Accordian(){
    const { state , setState} = useComponentContext();

    const[accordianItem,setAccordianItem] = useState([{id : 1}]);

    const addItem = () =>{
        setAccordianItem([...accordianItem,{id  :Date.now()}])
    }

    const removeItem = (id : number)=>{
        setAccordianItem(accordianItem.filter(accId => accId.id != id))
    }

    const handleCollapsibleChange = (checked : boolean) =>{
        setState((prev) =>({
            ...prev,
            accordian : {...prev.accordian,collapsible : checked}
        }))
    }

    return(
        <div className="space-y-3">
            <div className="space-y-2">
                <Label className="text-sm font-medium">Do need Collapsible?</Label>
                <div className="flex items-center space-x-2">
                    <Checkbox 
                    id="collapsible"
                    checked={state.accordian.collapsible}
                    onCheckedChange={handleCollapsibleChange}
                    />
                    <Label
                    htmlFor="collapsible"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    
                    >
                        Yes
                    </Label>
                </div>
            </div>
            <div className="space-y-2">
                <Label className="text-sm font-medium">Accordian Items</Label>
                {accordianItem.map((item) =>(
                    <AccordianTriggerBox key={item.id} onRemove={() => removeItem(item.id)}/>
                ))}
            </div>
            <div>
                <Button onClick={addItem}>Add Item</Button>
            </div>
        </div>
    )
}

export function PreviewAccordian(){
    const { state } = useComponentContext();
    return(
        <>
        
         <Accordion 
         type="single" 
         collapsible={state.accordian.collapsible} 
         className="w-full">

        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
        </>
       
    )
}