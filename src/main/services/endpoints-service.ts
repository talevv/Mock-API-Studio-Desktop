import { Endpoint } from "@/shared/types/endpoint";
import { EndpointsRepository } from "../repositories/endpoints-repository";

export class EndpointsService {
    constructor(private readonly endpointsRepository: EndpointsRepository) {}

    saveEndpoint(endpoint: Endpoint) {
        this.endpointsRepository.save(endpoint);
    }
}