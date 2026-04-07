import { Endpoint, Response } from "@/shared/types/endpoint";
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld(
    "api", 
    {
        saveEndpoint: (endpoint: Endpoint): Promise<Response> => {
            return ipcRenderer.invoke('endpoints:save', endpoint)
        },
        getEndpoints: (): Promise<Response> => {
            return ipcRenderer.invoke('endpoints:getAll')
        }
    }
)