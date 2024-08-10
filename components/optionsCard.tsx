"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  
  CardHeader,
  
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { VariantType, SizeType } from "@/app/types";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Slider } from "@/components/ui/slider";


export default function OptionsCard() {
  
  const [text, setText] = useState("Click me");
  const [variant, setVariant] = useState<VariantType>("default");
  const [sizeOfBtn, setSizeOfBtn] = useState<SizeType>("default");
  const [loadingState, setLoadingState] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [color, setColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#FFFFFF");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  function generateCodeToCopy(){
    return loadingState ? `import { ReloadIcon } from "@radix-ui/react-icons"

    import { Button } from "@/components/ui/button"
    
    export function ButtonLoading() {
      return (
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      )
    }
    ` : `import { Button } from "@/components/ui/button"
    
    export function ButtonDemo() {
      return (
        <Button
          variant=${variant}
          size=${sizeOfBtn}
          style={{ borderRadius: ${sliderValue}px,color : ${textColor}, backgroundColor : ${color}}}
        >
          ${text}
        </Button>
      )
    }`
  }

 


  return (
    <div className="w-full min-h-screen flex flex-col items-center p-5">
      <div className=" w-full h-screen flex flex-row justify-center items-center">
        <Card className="w-[500px] mr-5">
          <CardHeader>
            <CardDescription className="dark:text-white">Options</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Button" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="Button">Button</SelectItem>
                      <SelectItem value="Dialog">Dialog</SelectItem>
                      <SelectItem value="Alert">Alert</SelectItem>
                      <SelectItem value="Accordian">Accordian</SelectItem>
                      <SelectItem value="Command">Command</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="btn-text">Button text</Label>
                  <Input
                    id="btn-text"
                    defaultValue={"Click me"}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Variant</Label>
                  <Select
                    onValueChange={(value: VariantType) => setVariant(value)}
                  >
                    <SelectTrigger id="framework">
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
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Size</Label>
                  <Select
                    onValueChange={(value: SizeType) => setSizeOfBtn(value)}
                  >
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="default" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="default">default</SelectItem>
                      <SelectItem value="sm">sm</SelectItem>
                      <SelectItem value="lg">lg</SelectItem>
                      {/* <SelectItem value="icon">icon</SelectItem> */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex space-x-2">
                  <Checkbox
                    id="terms"
                    checked={loadingState}
                    onCheckedChange={(checked) =>
                      setLoadingState(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Loading state
                  </label>
                </div>
                <div className="space-y-4">
                  <Label>Roundness</Label>
                  <Slider
                    value={[sliderValue]}
                    onValueChange={(value) => setSliderValue(value[0])}
                    max={20}
                    step={1}
                  />
                </div>
                <div className="space-y-4">
                  <Label>Background Color</Label>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Input
                        type="color"
                        value={color}
                        onChange={handleColorChange}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 overflow-hidden appearance-none"
                        style={{ padding: 0 }}
                      />
                      <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>

                    <Input
                      type="text"
                      value={color}
                      onChange={handleColorChange}
                      className="flex-grow px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label>Text Color</Label>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Input
                        type="color"
                        value={textColor}
                        onChange={handleTextColorChange}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 overflow-hidden appearance-none"
                        style={{ padding: 0 }}
                      />
                      <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ backgroundColor: textColor }}
                      ></div>
                    </div>

                    <Input
                      type="text"
                      value={textColor}
                      onChange={handleTextColorChange}
                      className="flex-grow px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="w-[500px] h-[650px] mr-5">
          <CardDescription className="dark:text-white p-5">Preview</CardDescription>
          <div className="p-5 text-center">
            {loadingState ? (
              <ButtonLoading />
            ) : (
              <DefaultButton
                variant={variant}
                text={text}
                sizeOfBtn={sizeOfBtn}
                sliderValue={sliderValue}
                color={color}
                textColor={textColor}
              />
            )}
          </div>
        </Card>
      </div>
      <Card className="w-full min-h-[400px] max-w-[1020px]">
        <CardDescription className="dark:text-white p-5 flex justify-between items-center">
          Code
          <CopyIcon codeToCopy={generateCodeToCopy()}/>
          </CardDescription>
        
        <div className="relative p-5">
          <pre className="dark:bg-zinc-900 bg-gray-100 p-6 rounded-md overflow-x-auto">
            <code className="text-sm">
              {generateCodeToCopy()}
            </code>
           
          </pre>
        </div>
       
        
        
      </Card>
    </div>
  );
}

function ButtonLoading() {
  return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}

function DefaultButton({
  variant,
  text,
  sizeOfBtn,
  sliderValue,
  color,
  textColor,
}: {
  variant: VariantType;
  text: string;
  sizeOfBtn: SizeType;
  sliderValue: number;
  color: string;
  textColor: string;
}) {
  return (
    <Button
      
      className="rounded-full"
      variant={variant}
      size={sizeOfBtn}
      style={{
        ...(color !== '#000000' && { backgroundColor: color }),
        ...(textColor !== '#FFFFFF' && { color: textColor }),
        borderRadius : `${sliderValue}px`
      }}
    >
      {text}
    </Button>
  );
}

function copyToClickBoard(codeToCopy){
  
  navigator.clipboard.writeText(codeToCopy)
  .then(() =>{
    alert("Successfully copied")
  })
}


function CopyIcon({codeToCopy}){
  return(
    <Button onClick={() => copyToClickBoard(codeToCopy)}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H7V13H3.5C3.22386 13 3 12.7761 3 12.5V2.5C3 2.22386 3.22386 2 3.5 2H4V2.25C4 2.66421 4.33579 3 4.75 3H10.25C10.6642 3 11 2.66421 11 2.25V2H11.5C11.7761 2 12 2.22386 12 2.5V7H13V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5ZM10.5 9C10.7761 9 11 8.77614 11 8.5C11 8.22386 10.7761 8 10.5 8C10.2239 8 10 8.22386 10 8.5C10 8.77614 10.2239 9 10.5 9ZM13 8.5C13 8.77614 12.7761 9 12.5 9C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8C12.7761 8 13 8.22386 13 8.5ZM14.5 9C14.7761 9 15 8.77614 15 8.5C15 8.22386 14.7761 8 14.5 8C14.2239 8 14 8.22386 14 8.5C14 8.77614 14.2239 9 14.5 9ZM15 10.5C15 10.7761 14.7761 11 14.5 11C14.2239 11 14 10.7761 14 10.5C14 10.2239 14.2239 10 14.5 10C14.7761 10 15 10.2239 15 10.5ZM14.5 13C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5C14 12.7761 14.2239 13 14.5 13ZM14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15ZM8.5 11C8.77614 11 9 10.7761 9 10.5C9 10.2239 8.77614 10 8.5 10C8.22386 10 8 10.2239 8 10.5C8 10.7761 8.22386 11 8.5 11ZM9 12.5C9 12.7761 8.77614 13 8.5 13C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12C8.77614 12 9 12.2239 9 12.5ZM8.5 15C8.77614 15 9 14.7761 9 14.5C9 14.2239 8.77614 14 8.5 14C8.22386 14 8 14.2239 8 14.5C8 14.7761 8.22386 15 8.5 15ZM11 14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5C10 14.2239 10.2239 14 10.5 14C10.7761 14 11 14.2239 11 14.5ZM12.5 15C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>

    </Button>
  )
}