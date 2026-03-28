import { Endpoint, EndpointRow } from "@/shared/types/endpoint";
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld(
    "api", 
    {
        saveEndpoint: (endpoint: Endpoint): Promise<EndpointRow> => {
            return ipcRenderer.invoke('endpoints:save', endpoint)
        },
    }
)