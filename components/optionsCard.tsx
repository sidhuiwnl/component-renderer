'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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

type VariantType = "default" | "link" | "destructive" | "outline" | "secondary" | "ghost";
type SizeType = "default" | "sm" | "lg" | "icon" ;

export default function OptionsCard(){
    const[text,setText] = useState("Click me");
    const[variant,setVariant] = useState<VariantType>("default");
    const[sizeOfBtn,setSizeOfBtn] = useState<SizeType>("default");
    return(
        <div className=" w-full h-screen flex flex-row justify-center items-center">
            <Card className="w-[350px] mr-5">
        <CardHeader>
          <CardDescription className="text-white">Options</CardDescription>
          
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
                <Input id="btn-text" defaultValue={"Click me"} onChange={(e) => setText(e.target.value)}/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Variant</Label>
                <Select onValueChange={(value : VariantType) => setVariant(value)}>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="default" />
                  </SelectTrigger>
                  <SelectContent position="popper" >
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
                <Select onValueChange={(value : SizeType) => setSizeOfBtn(value)}>
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
             
            </div>
          </form>
        </CardContent>
       
      </Card>
      <Card className="w-[350px] h-[400px]">
        <div className="p-5 text-center">
        <Button variant={variant} size={sizeOfBtn} >{text}</Button>
        </div>
      </Card>
      
        </div>
        
    )
}