import { Field, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export const ResponseEditor: React.FC = () => {
    return (
        <>
            <Field className="h-full">
                <FieldLabel>
                    Response
                </FieldLabel>
                <Textarea id="response-editor" className="h-full"/>
            </Field>
        </>
    )
}