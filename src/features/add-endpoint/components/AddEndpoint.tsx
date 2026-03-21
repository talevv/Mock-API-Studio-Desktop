import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";

export const AddEndpoint: React.FC = () => {
    return (
        <>
            <Button><PlusIcon/> New endpoint</Button>
        </>
    )
}