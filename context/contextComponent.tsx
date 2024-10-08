

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export type ComponentType = 'Button' | 'Dialog' | 'Alert' | 'Accordian' | 'Command';
export type VariantType = "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
export type SizeType = "default" | "sm" | "lg" | null | undefined

export interface ButtonState {
    text: string;
    variant : VariantType;
    size : SizeType;
    loading : boolean;
    roundness : number;
    bgColor : string;
    textColor : string;
}

export interface DialogState {
    triggerText  :string;
    triggerTitle : string;
    triggerDescription : string;
    triggerContent : string;
}

interface AccordianItem{
    id : number,
    trigger : string,
    content : string,
}

export interface AccordianState{
    collapsible : boolean;
    accordians : AccordianItem[]
}


type ComponentState = {
    button: ButtonState;
    dialog : DialogState;
    accordian : AccordianState;
};

type ComponentContextType = {
    componentType: ComponentType;
    setComponentType: Dispatch<SetStateAction<ComponentType>>;
    state: ComponentState;
    setState: Dispatch<SetStateAction<ComponentState>>;
};

const ComponentContext = createContext<ComponentContextType | undefined>(undefined);

export function ComponentProvider({ children }: { children: ReactNode }): JSX.Element {
    const [componentType, setComponentType] = useState<ComponentType>("Button");
    const [state, setState] = useState<ComponentState>({
        button: {
            text: "Click me",
            variant : "default",
            size : "default",
            loading : false,
            roundness : 0,
            bgColor : "#FFFFFF",
            textColor : "#000000"
        },
        dialog  :{
            triggerText : "Open Dialog",
            triggerTitle : "Are you absolutely sure?",
            triggerDescription : " This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
            triggerContent : "Add your content here"
        },
        accordian : {
            collapsible : false,
            accordians : [{
                id : 1,
                trigger :"Is it accessible?",
                content : "Yes. It adheres to the WAI-ARIA design pattern."
            },{
                id :  2,
                trigger :"Is it styled?",
                content : "Yes. It comes with default styles that matches the other components' aesthetic."
            },{
                id :  3,
                trigger :"Is it animated?",
                content : "Yes. It's animated by default, but you can disable it if you prefer."
            }]
        }
    });

    return (
        <ComponentContext.Provider value={{ componentType, setComponentType, state, setState }}>
            {children}
        </ComponentContext.Provider>
    );
}

export function useComponentContext() {
    const context = useContext(ComponentContext);
    if (context === undefined) {
        throw new Error('useComponentContext must be used within a ComponentProvider');
    }
    return context;
}

// Export the context if you need to use it directly elsewhere
export { ComponentContext };
