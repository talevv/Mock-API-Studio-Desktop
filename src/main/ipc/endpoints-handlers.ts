import { ipcMain } from "electron"
import { EndpointsService } from "../services/endpoints-service"
import { Endpoint, EndpointRow } from "@/shared/types/endpoint"
import { success } from "zod"

interface Response {
    success: boolean,
    data?: EndpointRow | Array<EndpointRow>,
    error?: string
}

export const registerEndpointsHandlers = (endpointsService: EndpointsService) => {
    ipcMain.handle("endpoints:save", (_, endpoint: Endpoint): Response => {
        try {
            const saved = endpointsService.saveEndpoint(endpoint)
            return {
                success: true,
                data: saved
            }
        } catch(err) {
            return {
                success: false,
                error: err.message
            }
        }
    });

    ipcMain.handle("endpoints:getAll", (): Response => {
        try {
            const endpoints = endpointsService.getAllEndpoints();
            return {
                success: true,
                data: endpoints
            }
        } catch(err) {
            return {
                success: false,
                error: err.message
            }
        }
    })
}