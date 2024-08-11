import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

type ComponentType = 'Button' | 'Dialog' | 'Alert' | 'Accordian' | 'Command';

interface ButtonComponentProps{
    onSelectChange : (value : ComponentType) => void;
}

export default function ComponentSelection({ onSelectChange } : ButtonComponentProps) {
    return (
        <form>
            <div className="flex flex-col space-y-1.5">
                <Select onValueChange={onSelectChange}>
                    <SelectTrigger id="Component">
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
        </form>
    )
}