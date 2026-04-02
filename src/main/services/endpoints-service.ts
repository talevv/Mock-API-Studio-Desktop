import { Endpoint, EndpointRow } from "@/shared/types/endpoint";
import { EndpointsRepository } from "../repositories/endpoints-repository";

export class EndpointsService {
    constructor(private readonly endpointsRepository: EndpointsRepository) {}

    saveEndpoint(endpoint: Endpoint): EndpointRow {
        return this.endpointsRepository.save(endpoint);
    }

    getAllEndpoints(): Array<EndpointRow> {
        return this.endpointsRepository.getAll()
    }
}