import { EndpointForm } from "./EndpointForm"

export const EndpointEditor: React.FC = () => {
    return (
        <div className="grid grid-cols-[1fr_1fr] h-full">
            <div className="border-r border-border h-full p-3">
                <EndpointForm />
            </div>
            <div className="p-1 h-full">Response Editor</div>
        </div>
    )
}