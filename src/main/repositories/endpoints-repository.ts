import { Endpoint } from "@/shared/types/endpoint";
import Database from "better-sqlite3";

export interface EndpointsRepository {
    save(endpoint: Endpoint) : void
}

export class EndpointsRepositorySQlite implements EndpointsRepository {
    constructor(private readonly db: Database.Database) {}

    save(endpoint: Endpoint) {
        this.db.prepare(`
            INSERT INTO endpoints (method, path, status, body) VALUES (@method,@path,@status,@body)
        `).run(endpoint);
    }
}