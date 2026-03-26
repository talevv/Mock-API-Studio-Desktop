import { Button } from "@/renderer/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";

export const AddEndpoint = () => {
    return (
        <>
            <Button><PlusIcon/> New endpoint</Button>
        </>
    )
}