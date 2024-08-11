'use client'

import { Card,CardHeader,CardDescription,CardContent } from "@/components/ui/card";

import {ButtonComponent,MainButton } from "@/components/RenderComponents/ButtonComponent";
import DialogComponent from "@/components/RenderComponents/DialogComponent";
import ComponentSelection from "@/components/RenderComponents/ComponentSelection";
import { useComponentContext,ComponentType,ComponentProvider } from "@/context/contextComponent";

 function RenderContent() {
  const { componentType, setComponentType } = useComponentContext();


  const handleSelectChange = (value: ComponentType) => {
    setComponentType(value);
  };
  
  const renderOptionComponent = () =>{
    switch(componentType){
      case "Button":
        return <ButtonComponent/>;
      case "Dialog":
        return <DialogComponent/>;

      default :
        return null
    }
  }

  const renderPreviewComponent = () =>{
    switch(componentType){
      case "Button" :
        return <MainButton/>;
      case "Dialog":
        return null
      default :
        return null
    }
  }
  
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-5">
      <div className=" w-full h-screen flex flex-row justify-center items-center">
        <Card className="w-[500px] min-h-[700px] mr-5">
           <CardHeader>
              <CardDescription className="dark:text-white text-xl">Options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
            <ComponentSelection onSelectChange={handleSelectChange} />
            {renderOptionComponent()}
          </CardContent>
         
        </Card>
        <Card className="w-[500px] min-h-[700px] mr-5">
            <CardHeader>
              <CardDescription className="dark:text-white text-xl">Preview</CardDescription>
            </CardHeader>
          <CardContent className="text-center">
              {renderPreviewComponent()}
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}

export default function Render() {
  return (
    <ComponentProvider>
      <RenderContent />
    </ComponentProvider>
  );
}