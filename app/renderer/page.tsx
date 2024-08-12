'use client'

import { Card,CardHeader,CardDescription,CardContent } from "@/components/ui/card";

import {ButtonComponent,MainButton,ButtonCode } from "@/components/RenderComponents/ButtonComponent";
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

  const renderCode = () =>{
    switch(componentType){
      case "Button" :
        return <ButtonCode/>;
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
      <Card className="w-full min-h-[400px] max-w-[1020px]">
        <CardDescription className="dark:text-white p-5 text-2xl">Code</CardDescription>
        <div className="relative p-5">
          <pre className="dark:bg-zinc-900 bg-gray-100 p-6 rounded-md overflow-x-auto">
            <code className="text-sm">
              {renderCode()}
            </code>
          </pre>
        </div>
      </Card>
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