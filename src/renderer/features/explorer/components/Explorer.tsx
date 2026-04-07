import { Spinner } from "@/renderer/components/ui/spinner"
import { useGetEndpointsQuery } from "@/renderer/api/api"
import { AddEndpoint } from "@/renderer/features/add-endpoint"
import { Badge } from "@/renderer/components/ui/badge"
import { Separator } from "@/renderer/components/ui/separator"

export const Explorer = () => {
    const {data, error, isLoading} = useGetEndpointsQuery()
    console.log(data)
    return (
        <div className="border-r border-border h-full p-3">
            <AddEndpoint />
            <Separator className="mt-3 mb-3" />
            {isLoading ? <Spinner /> : null}
            {error ? <div className="text-red-500">Error</div> : null}
            {data && data.length === 0 ? <div>No endpoints found. Start by adding one!</div> : null}
            {data && data.length > 0 ? (
                <ul className="space-y-1">
                    {data.map((endpoint) => (
                        <li key={endpoint.id} className="flex items-center gap-2 text-sm p-2 rounded hover:bg-muted/50">
                            <Badge variant="secondary" >
                                {endpoint.method.toUpperCase()}
                            </Badge>
                            <span className="flex-1 truncate">{endpoint.path}</span>
                            <span className="text-muted-foreground text-xs">{endpoint.status}</span>
                        </li>
                    ))}
                </ul>
            ) : null}

        </div>
    )
}