

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export type ComponentType = 'Button' | 'Dialog' | 'Alert' | 'Accordian' | 'Command';
export type VariantType = "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
export type SizeType = "default" | "sm" | "lg" | null | undefined

interface ButtonState {
    text: string;
    variant : VariantType;
    size : SizeType
}


type ComponentState = {
    button: ButtonState;
    
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
        },
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
