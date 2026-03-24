import { EndpointDetails } from "./EndpointDetails"
import { ResponseEditor } from "./ResponseEditor"
import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"

export const EndpointForm: React.FC = () => {
    const formSchema = z.object(
        {
            method: z.literal(["get", "post", "put", "patch", "delete"], {message: "Select an HTTP method"}),
            path: z.string().min(1, "Endpoint path is required"),
            status: z.number({message: "HTTP status code is required"}),
            body: z.string().optional()
        }
    )

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            method: "get",
            path: "",
            status: null,
            body: "{}"
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.table(data)
    }

    return (
        <FormProvider {...form}>
            <form className="grid grid-cols-[1fr_1fr] h-full" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="border-r border-border h-full p-3">
                    <EndpointDetails />
                </div>
                <div className="p-3 h-full">
                    <ResponseEditor />
                </div>
            </form>
        </FormProvider>
    )
}