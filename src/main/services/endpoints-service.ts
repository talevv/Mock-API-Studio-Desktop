import { Endpoint, EndpointRow, Response } from "@/shared/types/endpoint";
import { EndpointsRepository } from "../repositories/endpoints-repository";

export class EndpointsService {
    constructor(private readonly endpointsRepository: EndpointsRepository) {}

    saveEndpoint(endpoint: Endpoint): Response {
        try {
            const saved = this.endpointsRepository.save(endpoint);
            return {
                success: true,
                data: saved
            };
        } catch (err) {
            return {
                success: false,
                error: err instanceof Error ? err.message : 'An unknown error occurred'
            };
        }
    }

    getAllEndpoints(): Response {
        try {
            const endpoints = this.endpointsRepository.getAll();
            return {
                success: true,
                data: endpoints
            };
        } catch (err) {
            return {
                success: false,
                error: err instanceof Error ? err.message : 'An unknown error occurred'
            };
        }
    }
}