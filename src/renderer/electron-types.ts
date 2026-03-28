import { Endpoint, EndpointRow } from "@/shared/types/endpoint";

export interface ElectronAPI {
  saveEndpoint: (endpoint: Endpoint) => Promise<EndpointRow>,
}

declare global {
  interface Window {
    api: ElectronAPI
  }
}