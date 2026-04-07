import { Endpoint, Response } from "@/shared/types/endpoint";

export interface ElectronAPI {
  saveEndpoint: (endpoint: Endpoint) => Promise<Response>,
  getEndpoints: () => Promise<Response>
}

declare global {
  interface Window {
    api: ElectronAPI
  }
}