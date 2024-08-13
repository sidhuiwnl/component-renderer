import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import {
  ButtonState,
  SizeType,
  useComponentContext,
} from "@/context/contextComponent";
import { VariantType } from "@/context/contextComponent";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Slider } from "../ui/slider";

export function ButtonComponent() {
  const { state, setState } = useComponentContext();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      button: { ...prev.button, text: e.target.value },
    }));
  };

  const handleVariantChange = (value: string) => {
    setState((prev) => ({
      ...prev,
      button: { ...prev.button, variant: value as VariantType },
    }));
  };

  const handleSizeChange = (value: string) => {
    setState((prev) => ({
      ...prev,
      button: { ...prev.button, size: value as SizeType },
    }));
  };
  const handleLoadingState = (checked: boolean) => {
    setState((prev) => ({
      ...prev,
      button: { ...prev.button, loading: checked },
    }));
  };

  const roundnessChange = (value: number[]) => {
    setState((prev) => ({
      ...prev,
      button: { ...prev.button, roundness: value[0] },
    }));
  };

  // const handleColorChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
  //     setState((prev) =>({
  //         ...prev,
  //         button : {...prev.button,bgColor : e.target.value }
  //     }))
  // }
  // const handleTextColorChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
  //     setState((prev) =>({
  //         ...prev,
  //         button : {...prev.button,textColor : e.target.value }
  //     }))
  // }
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="btn-text" className="text-sm font-medium">
          Button text
        </Label>
        <Input
          id="btn-text"
          defaultValue={state.button.text}
          onChange={handleTextChange}
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="btn-text" className="text-sm font-medium">
          Variant
        </Label>
        <Select onValueChange={handleVariantChange}>
          <SelectTrigger id="variant">
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
      <div className="space-y-2">
        <Label htmlFor="size" className="text-sm font-medium">
          Size
        </Label>
        <Select onValueChange={handleSizeChange}>
          <SelectTrigger id="variant">
            <SelectValue placeholder="default" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="default">default</SelectItem>
            <SelectItem value="sm">sm</SelectItem>
            <SelectItem value="lg">lg</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="Loading-state" className="text-sm font-medium">
          Loading State
        </Label>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="loading"
            checked={state.button.loading}
            onCheckedChange={handleLoadingState}
          />
          <Label
            htmlFor="loading"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Loading State
          </Label>
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-sm font-medium">Roundness</Label>
        <Slider
          defaultValue={[0]}
          max={20}
          step={1}
          value={[state.button.roundness]}
          onValueChange={(value) => roundnessChange(value)}
        />
      </div>
      {/* <div className="space-y-2">
                <Label className="text-sm font-medium">Text Color</Label>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <Input
                        type="color"
                        value={state.button.textColor}
                        onChange={handleTextColorChange}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 overflow-hidden appearance-none"
                        />
                         <div 
                            className="absolute inset-0 rounded-full pointer-events-none"
                            style={{ backgroundColor: state.button.textColor }}
                        ></div>
                       
                    </div>
                    <Input
                        type="text"
                        value={state.button.textColor}
                        onChange={handleTextColorChange}
                        className="flex-grow px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                
             </div>
             <div className="space-y-2">
                <Label className="text-sm font-medium">Background Color</Label>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <Input
                        type="color"
                        value={state.button.bgColor}
                        onChange={handleColorChange}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 overflow-hidden appearance-none"
                        />
                         <div 
                            className="absolute inset-0 rounded-full pointer-events-none"
                            style={{ backgroundColor: state.button.bgColor }}
                        ></div>
                       
                    </div>
                    <Input
                        type="text"
                        value={state.button.bgColor}
                        onChange={handleColorChange}
                        className="flex-grow px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
             </div> */}
    </div>
  );
}

export function MainButton() {
  const { state } = useComponentContext();

  if (state.button.loading) {
    return (
      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    );
  } else {
    return (
      <Button
        variant={state.button.variant}
        size={state.button.size}
        style={{
          borderRadius: `${state.button.roundness}px`,
        }}
      >
        {state.button.text}
      </Button>
    );
  }
}

export const MainCode = (buttonState: ButtonState) => {
  const loadingCode = `
        import { ReloadIcon } from "@radix-ui/react-icons"
 
        import { Button } from "@/components/ui/button"
 
        export function ButtonLoading() {
            return (
                <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                     Please wait
                </Button>
            )
        }
        `;

  const MainButtonCode = `
    import { Button } from "@/components/ui/button"
    
    export function ButtonDemo() {
        return (
          <Button
            variant="${buttonState.variant}"
             size="${buttonState.size}"
            style={{ borderRadius: "${buttonState.roundness}px" }
            
          >
            
            ${buttonState.text}
          </Button>
        )
      }

        `;
  if (buttonState.loading) {
    return loadingCode;
  } else {
    return MainButtonCode;
  }
};
