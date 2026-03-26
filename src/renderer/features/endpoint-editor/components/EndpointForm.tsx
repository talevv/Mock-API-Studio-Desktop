import { EndpointDetails } from "./EndpointDetails"
import { ResponseEditor } from "./ResponseEditor"
import { FormProvider, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { EndpointSchema, Endpoint } from "@/shared/types/endpoint";

export const EndpointForm = () => {
    const form = useForm<Endpoint>({
        resolver: zodResolver(EndpointSchema),
        defaultValues: {
            method: "get",
            path: "",
            status: null,
            body: "{}"
        }
    })

    const onSubmit = (data: Endpoint) => {
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