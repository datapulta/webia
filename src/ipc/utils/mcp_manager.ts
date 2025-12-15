import { db } from "../../db";
import { mcpServers } from "../../db/schema";
// import { experimental_createMCPClient, experimental_MCPClient } from "ai";
import { eq } from "drizzle-orm";

import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

class McpManager {
  private static _instance: McpManager;
  static get instance(): McpManager {
    if (!this._instance) this._instance = new McpManager();
    return this._instance;
  }

  private clients = new Map<number, any>();

  async getClient(serverId: number): Promise<any> {
    throw new Error("MCP is temporarily disabled due to dependency issues");
  }

  dispose(serverId: number) {
    const c = this.clients.get(serverId);
    if (c) {
      c.close();
      this.clients.delete(serverId);
    }
  }
}

export const mcpManager = McpManager.instance;
