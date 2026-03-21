import { EndpointForm } from "./EndpointForm"
import { ResponseEditor } from "./ResponseEditor"

export const EndpointEditor: React.FC = () => {
    return (
        <div className="grid grid-cols-[1fr_1fr] h-full">
            <div className="border-r border-border h-full p-3">
                <EndpointForm />
            </div>
            <div className="p-3 h-full">
                <ResponseEditor />
            </div>
        </div>
    )
}