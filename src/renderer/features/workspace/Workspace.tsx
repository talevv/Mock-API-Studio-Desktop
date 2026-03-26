import { Explorer } from "@/renderer/features/explorer"
import { EndpointForm } from "@/renderer/features/endpoint-editor"


export const Workspace = () => {
    return (
        <div className="grid grid-cols-[3fr_9fr] h-full">
            <div>
                <Explorer />
            </div>
            <div>
                <EndpointForm />
            </div>
        </div>
    )
}