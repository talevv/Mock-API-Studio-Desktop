import { AddEndpoint } from "@/renderer/features/add-endpoint"
import { useEffect } from "react"

export const Explorer = () => {
    useEffect(() => {
        (async () => {
            const res = await window.api.getEndpoints()
            console.log('endpoints', res)
        })()
    }, [])
    return (
        <div className="border-r border-border h-full p-1">
            <AddEndpoint />
        </div>
    )
}