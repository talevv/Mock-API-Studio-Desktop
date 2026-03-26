import { Field, FieldError, FieldLabel } from "@/renderer/components/ui/field"
import { Textarea } from "@/renderer/components/ui/textarea"
import { Controller, useFormContext } from "react-hook-form";

export const ResponseEditor = () => {
    const {control} = useFormContext();

    return (
        <>
            <Controller 
                name="body"
                control={control}
                render={({field, fieldState}) => {
                    return (
                        <Field data-invalid={fieldState.invalid} className="h-full">
                            <FieldLabel>
                                Response
                            </FieldLabel>
                            <Textarea {...field} aria-invalid={fieldState.invalid} id="response-editor" className="h-full font-mono" />
                            {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )
                }}
            />
        </>
    )
}