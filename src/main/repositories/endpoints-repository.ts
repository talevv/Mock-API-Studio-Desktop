import { Endpoint, EndpointRow } from "@/shared/types/endpoint";
import Database from "better-sqlite3";

export interface EndpointsRepository {
    save(endpoint: Endpoint) : EndpointRow,
    getAll(): Array<EndpointRow>
}

export class EndpointsRepositorySQlite implements EndpointsRepository {
    constructor(private readonly db: Database.Database) {}

    save(endpoint: Endpoint): EndpointRow {
        const result = this.db.prepare(`
            INSERT INTO endpoints (method, path, status, body) VALUES (@method,@path,@status,@body)
        `).run(endpoint);
        const endpointRow: EndpointRow = {...endpoint, id: result.lastInsertRowid}

        return endpointRow;
    }

    getAll(): Array<EndpointRow> {
        const result = this.db.prepare(`
            SELECT * FROM endpoints    
        `).all() as Array<EndpointRow>
        return result
    }
}