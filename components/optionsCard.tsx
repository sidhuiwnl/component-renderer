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

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-5">
      <div className=" w-full h-screen flex flex-row justify-center items-center">
        <Card className="w-[500px] mr-5">
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
          <CardDescription className="text-white p-5">Preview</CardDescription>
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
        <CardDescription className="text-white p-5">Code</CardDescription>
        <div className="relative p-5">
          <pre className="dark:bg-zinc-900 bg-gray-100 p-6 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`import { Button } from "@/components/ui/button"

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
}`}
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
