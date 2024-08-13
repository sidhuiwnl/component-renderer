import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogState, useComponentContext } from "@/context/contextComponent";
import { Dialog,DialogTitle,DialogTrigger,DialogHeader,DialogContent,DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";


export  function DialogComponent(){
    const { state , setState } = useComponentContext();

    function DialogTriggerText(e : React.ChangeEvent<HTMLInputElement>){
        setState((prev) =>({
            ...prev,
            dialog : {...prev.dialog, triggerText : e.target.value}
        }))
    }

    function DialogTriggerTitle(e : React.ChangeEvent<HTMLInputElement>){
        setState((prev) =>({
            ...prev,
            dialog : {...prev.dialog,triggerTitle : e.target.value}
        }))
    }
    function DialogTriggerDescription(e : React.ChangeEvent<HTMLInputElement>){
        setState((prev) =>({
            ...prev,
            dialog : {...prev.dialog,triggerDescription : e.target.value}
        }))
    }
    function DialogTriggerContent(e : React.ChangeEvent<HTMLInputElement>){
        setState((prev) =>({
            ...prev,
            dialog : {...prev.dialog,triggerContent : e.target.value}
        }))
    }
    return(
        <div className="space-y-4">
            <div className="space-y-2">
                <Label className="text-sm font-medium">Dialog Text</Label>
                <Input
                    type="text"
                    value={state.dialog.triggerText}
                    onChange={DialogTriggerText}
                />
            </div>
            <div className="space-y-2">
                <Label className="text-sm font-medium">Dialog Title</Label>
                <Input
                type="text"
                value={state.dialog.triggerTitle}
                onChange={DialogTriggerTitle}
                />
            </div>
            <div className="space-y-2">
                <Label className="text-sm font-medium">Dialog Description</Label>
                <Input
                type="text"
                value={state.dialog.triggerDescription}
                onChange={DialogTriggerDescription}
                />
            </div>
            <div className="space-y-2">
                <Label className="text-sm font-medium">Dialog Content</Label>
                <Input
                type="text"
                value={state.dialog.triggerContent}
                onChange={DialogTriggerContent}
                />
            </div>
        </div>
    )
}

export function DialogRenderComponent(){
    const {state} = useComponentContext();
    return(
        <Dialog>
        <DialogTrigger>
            <Button>{state.dialog.triggerText}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{state.dialog.triggerTitle}</DialogTitle>
            <DialogDescription>
              {state.dialog.triggerDescription}
            </DialogDescription>
          </DialogHeader>
          {state.dialog.triggerContent}
        </DialogContent>
      </Dialog>
      
    )
}

export function DialogCode(DialogState : DialogState){
    const DialogCode = 
    `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger>
    <Button>${DialogState.triggerText}</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>${DialogState.triggerTitle}</DialogTitle>
      <DialogDescription>
        ${DialogState.triggerDescription}
      </DialogDescription>
    </DialogHeader>
    ${DialogState.triggerContent}
  </DialogContent>
</Dialog>
    `

    return DialogCode
}