import { EndpointDetails } from "./EndpointDetails"
import { ResponseEditor } from "./ResponseEditor"
import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { useDispatch } from "react-redux";
import { addEndpoint } from "@/renderer/store/slices/endpoints-slice";
import { EndpointFormSchema, EndpointFormData } from "@/renderer/shared/types/endpoint";

export const EndpointForm = () => {
    const dispatch = useDispatch();

    const form = useForm<EndpointFormData>({
        resolver: zodResolver(EndpointFormSchema),
        defaultValues: {
            method: "get",
            path: "",
            status: null,
            body: "{}"
        }
    })

    const onSubmit = (data: EndpointFormData) => {
        console.table(data)
        dispatch(addEndpoint(data))
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