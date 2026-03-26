import * as z from "zod"

const HttpMethodSchema = z.enum(["get", "post", "put", "patch", "delete"])

export const EndpointSchema = z.object(
    {
        method: HttpMethodSchema,
        path: z.string().min(1),
        status: z.number(),
        body: z.string().optional()
    }
)

export type HttpMethod = z.infer<typeof HttpMethodSchema>
export type Endpoint = z.infer<typeof EndpointSchema>