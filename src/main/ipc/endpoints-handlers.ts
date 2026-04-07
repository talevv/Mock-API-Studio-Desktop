import { ipcMain } from "electron"
import { EndpointsService } from "../services/endpoints-service"
import { Endpoint, Response } from "@/shared/types/endpoint"

export const registerEndpointsHandlers = (endpointsService: EndpointsService) => {
    ipcMain.handle("endpoints:save", (_, endpoint: Endpoint): Response => {
        return endpointsService.saveEndpoint(endpoint);
    });

    ipcMain.handle("endpoints:getAll", (): Response => {
        return endpointsService.getAllEndpoints();
    });
}