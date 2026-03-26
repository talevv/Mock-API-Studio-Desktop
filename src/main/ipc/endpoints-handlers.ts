import { ipcMain } from "electron"
import { EndpointsService } from "../services/endpoints-service"
import { Endpoint } from "@/shared/types/endpoint"

export const registerEndpointsHandlers = (endpointsService: EndpointsService) => {
    ipcMain.handle("endpoints:save", (_, endpoint: Endpoint) => {
        endpointsService.saveEndpoint(endpoint)
    })
}