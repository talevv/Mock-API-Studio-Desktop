import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
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

export const EndpointDetails: React.FC = () => {
    return (
        <>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="method">Method</FieldLabel>
                    <ToggleGroup type="single" variant="outline" defaultValue="get">
                        <ToggleGroupItem value="get" className="data-[state=on]:bg-foreground data-[state=on]:text-background">GET</ToggleGroupItem>
                        <ToggleGroupItem value="post" className="data-[state=on]:bg-foreground data-[state=on]:text-background">POST</ToggleGroupItem>
                        <ToggleGroupItem value="put" className="data-[state=on]:bg-foreground data-[state=on]:text-background">PUT</ToggleGroupItem>
                        <ToggleGroupItem value="patch" className="data-[state=on]:bg-foreground data-[state=on]:text-background">PATCH</ToggleGroupItem>
                        <ToggleGroupItem value="delete" className="data-[state=on]:bg-foreground data-[state=on]:text-background">DELETE</ToggleGroupItem>
                    </ToggleGroup>
                </Field>
                <Field>
                    <FieldLabel htmlFor="path">Path</FieldLabel>
                    <Input id="path" autoComplete="off" className="font-mono" />
                    {/* <FieldError>Error.</FieldError> */}
                </Field>
                <Field>
                    <FieldLabel htmlFor="path">Status</FieldLabel>
                    <Combobox items={HTTP_STATUSES}>
                        <ComboboxInput placeholder="Select a status" />
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

                    {/* <Input id="path" autoComplete="off" type="number"/> */}
                    {/* <FieldError>Error.</FieldError> */}
                </Field>
                <Field>
                    <Button type="submit">Save</Button>
                </Field>
            </FieldGroup>
        </>
    )
}