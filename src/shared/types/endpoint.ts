import * as z from "zod"

const HttpMethodSchema = z.enum(["get", "post", "put", "patch", "delete"])

const EndpointSchema = z.object(
    {
        id: z.string(),
        method: HttpMethodSchema,
        path: z.string().min(1),
        status: z.number(),
        body: z.string().optional()
    }
)

export type HttpMethod = z.infer<typeof HttpMethodSchema>
export type Endpoint = z.infer<typeof EndpointSchema>

export const EndpointFormSchema = EndpointSchema.omit({id: true})
export type EndpointFormData = z.infer<typeof EndpointFormSchema>