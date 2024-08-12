'use client'

import { Card,CardHeader,CardDescription,CardContent } from "@/components/ui/card";


import {ButtonComponent,MainButton,ButtonCode } from "@/components/RenderComponents/ButtonComponent";
import DialogComponent from "@/components/RenderComponents/DialogComponent";
import ComponentSelection from "@/components/RenderComponents/ComponentSelection";
import { useComponentContext,ComponentType,ComponentProvider } from "@/context/contextComponent";
import { Button } from "@/components/ui/button";


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
              <CardDescription className="dark:text-white text-xl font-bold">Options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
            <ComponentSelection onSelectChange={handleSelectChange} />
            {renderOptionComponent()}
          </CardContent>
         
        </Card>
        <Card className="w-[500px] min-h-[700px] mr-5">
            <CardHeader>
              <CardDescription className="dark:text-white text-xl font-bold">Preview</CardDescription>
            </CardHeader>
          <CardContent className="text-center">
              {renderPreviewComponent()}
          </CardContent>
        </Card>
      </div>
      <Card className="w-full min-h-[400px] max-w-[1020px]">
        <CardDescription className="dark:text-white p-5 flex justify-between items-center text-xl font-bold">
          Code
          <Button>
              <svg className="hover:cursor-pointer" width="25" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H7V13H3.5C3.22386 13 3 12.7761 3 12.5V2.5C3 2.22386 3.22386 2 3.5 2H4V2.25C4 2.66421 4.33579 3 4.75 3H10.25C10.6642 3 11 2.66421 11 2.25V2H11.5C11.7761 2 12 2.22386 12 2.5V7H13V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5ZM10.5 9C10.7761 9 11 8.77614 11 8.5C11 8.22386 10.7761 8 10.5 8C10.2239 8 10 8.22386 10 8.5C10 8.77614 10.2239 9 10.5 9ZM13 8.5C13 8.77614 12.7761 9 12.5 9C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8C12.7761 8 13 8.22386 13 8.5ZM14.5 9C14.7761 9 15 8.77614 15 8.5C15 8.22386 14.7761 8 14.5 8C14.2239 8 14 8.22386 14 8.5C14 8.77614 14.2239 9 14.5 9ZM15 10.5C15 10.7761 14.7761 11 14.5 11C14.2239 11 14 10.7761 14 10.5C14 10.2239 14.2239 10 14.5 10C14.7761 10 15 10.2239 15 10.5ZM14.5 13C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5C14 12.7761 14.2239 13 14.5 13ZM14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15ZM8.5 11C8.77614 11 9 10.7761 9 10.5C9 10.2239 8.77614 10 8.5 10C8.22386 10 8 10.2239 8 10.5C8 10.7761 8.22386 11 8.5 11ZM9 12.5C9 12.7761 8.77614 13 8.5 13C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12C8.77614 12 9 12.2239 9 12.5ZM8.5 15C8.77614 15 9 14.7761 9 14.5C9 14.2239 8.77614 14 8.5 14C8.22386 14 8 14.2239 8 14.5C8 14.7761 8.22386 15 8.5 15ZM11 14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5C10 14.2239 10.2239 14 10.5 14C10.7761 14 11 14.2239 11 14.5ZM12.5 15C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>

          </Button>
          </CardDescription>
        
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