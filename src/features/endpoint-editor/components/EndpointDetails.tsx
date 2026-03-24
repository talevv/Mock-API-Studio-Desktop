import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Combobox,
    ComboboxCollection,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxLabel,
    ComboboxList,
    ComboboxSeparator,
} from "@/components/ui/combobox"
import { HTTP_STATUSES } from "../static-data/statuses"
import { Button } from "@/components/ui/button"
import { Controller, useFormContext } from "react-hook-form"

export const EndpointDetails: React.FC = () => {
    const {control} = useFormContext();

    return (
        <>
            <FieldGroup>
                <Controller 
                    name="method"
                    control={control}
                    render={({field, fieldState}) => {
                        return (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="method">Method</FieldLabel>
                                <ToggleGroup 
                                    value={field.value}
                                    onValueChange={field.onChange} 
                                    type="single" 
                                    variant="outline"
                                >
                                    <ToggleGroupItem value="get" className="data-[state=on]:bg-foreground data-[state=on]:text-background">GET</ToggleGroupItem>
                                    <ToggleGroupItem value="post" className="data-[state=on]:bg-foreground data-[state=on]:text-background">POST</ToggleGroupItem>
                                    <ToggleGroupItem value="put" className="data-[state=on]:bg-foreground data-[state=on]:text-background">PUT</ToggleGroupItem>
                                    <ToggleGroupItem value="patch" className="data-[state=on]:bg-foreground data-[state=on]:text-background">PATCH</ToggleGroupItem>
                                    <ToggleGroupItem value="delete" className="data-[state=on]:bg-foreground data-[state=on]:text-background">DELETE</ToggleGroupItem>
                                </ToggleGroup>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )
                    }}
                />
                <Controller
                    name="path"
                    control={control}
                    render={({field, fieldState}) => {
                        return (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="path">Path</FieldLabel>
                                <Input {...field} aria-invalid={fieldState.invalid} id="path" autoComplete="off" className="font-mono" />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )
                    }}
                />
                <Controller 
                    name="status"
                    control={control}
                    render={({field, fieldState}) => {
                        return (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="status">Status</FieldLabel>
                                <Combobox value={field.value} onValueChange={field.onChange} items={HTTP_STATUSES}>
                                    <ComboboxInput aria-invalid={fieldState.invalid} placeholder="Select a status" />
                                    <ComboboxContent>
                                        <ComboboxEmpty>No status found.</ComboboxEmpty>
                                        <ComboboxList>
                                            {(group, index) => (
                                                <ComboboxGroup key={group.name} items={group.statuses}>
                                                    <ComboboxLabel>{group.name}</ComboboxLabel>
                                                    <ComboboxCollection>
                                                        {(item) => (
                                                            <ComboboxItem key={item.code} value={item.code}>
                                                                {item.code} - {item.label}
                                                            </ComboboxItem>
                                                        )}
                                                    </ComboboxCollection>
                                                    {index < HTTP_STATUSES.length - 1 && <ComboboxSeparator />}
                                                </ComboboxGroup>
                                            )}
                                        </ComboboxList>
                                    </ComboboxContent>
                                </Combobox>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )
                    }}
                />
                <Field>
                    <Button type="submit">Save</Button>
                </Field>
            </FieldGroup>
        </>
    )
}