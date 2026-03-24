import { SyntheticEvent } from "react"
import { EndpointDetails } from "./EndpointDetails"
import { ResponseEditor } from "./ResponseEditor"

export const EndpointForm: React.FC = () => {
    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
    }
    
    return (
        <form className="grid grid-cols-[1fr_1fr] h-full" onSubmit={onSubmit}>
            <div className="border-r border-border h-full p-3">
                <EndpointDetails />
            </div>
            <div className="p-3 h-full">
                <ResponseEditor />
            </div>
        </form>
    )
}