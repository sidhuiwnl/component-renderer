
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { v4 as uuid } from 'uuid';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AccordianState, useComponentContext } from "@/context/contextComponent"


interface AccordianTriggerBoxProps {
    onRemove: () => void;
    trigger : string;
    content : string;
    id : number;
}

function AccordianTriggerBox({onRemove,trigger,content,id} : AccordianTriggerBoxProps){
    const { state , setState} = useComponentContext();

    function inputChange(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name , value } = e.target;
            setState((prev) =>({
                ...prev,
                accordian :{
                    ...prev.accordian,
                    accordians  : prev.accordian.accordians.map((item) =>
                        item.id === id  ? {...item,[name] : value} : item
                    )
                }
            }))
    }
   
    return(
        <div className="border-2 p-1 rounded-lg">
            <div className="space-y-3 m-3">
                <Input 
                value={trigger}
                name = "trigger"
                onChange={inputChange}
                placeholder={`Trigger ${id}`}
                />
                <Textarea 
                value={content}
                placeholder={`Content ${id}`}
                name="Content"
                onChange={inputChange}
                />
                <Button variant="destructive" onClick={onRemove}>Remove Item</Button>
            </div>
        </div>
    )
}



export function Accordian(){
    const { state , setState} = useComponentContext();

   
    
    const addItem = () => {
        setState((prev) => {
            const newId = prev.accordian.accordians.length > 0 
                ? Math.max(...prev.accordian.accordians.map(item => item.id)) + 1 
                : 1;
            return {
                ...prev,
                accordian: {
                    ...prev.accordian,
                    accordians: [
                        ...prev.accordian.accordians,
                        {
                            id: newId,
                            trigger: "",
                            content: ""
                        }
                    ]
                }
            };
        });
    }

    const removeitem = (id : number) => {
        setState((prev) =>({
            ...prev,
            accordian : {
                ...prev.accordian,
                accordians  : [
                    ...prev.accordian.accordians.filter(item => item.id != id)
                ]
            }
        }))
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
                {state.accordian.accordians.map((item) =>(
                    <AccordianTriggerBox id={item.id} trigger={item.trigger} content={item.content} onRemove={() => removeitem(item.id)}/>
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
        {state.accordian.accordians.map((item) =>(
            <AccordionItem value={item.id.toString()}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
        </>
       
    )
}

export function AccordianCode(AccordianState : AccordianState){
    const AccCode = 
    `
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordianDemo(){
    return(
        <Accordina type="single" collapsible=${AccordianState.collapsible} className="w-full">
            ${AccordianState.accordians.map((item) =>(
                `<AccordianItem value="${item.id}">
                    <AccordianTrigger>${item.trigger}</AccordianTrigger>
                    <AccordianContent>
                        ${item.content}
                    </AccordianContent>
                </AccordianItem>`
            )).join('')}
        </Accordian>
    )
}
    `

    return AccCode
}