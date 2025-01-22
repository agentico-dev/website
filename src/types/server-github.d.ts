declare module '@modelcontextprotocol/server-github/dist/operations/files' {
  export function createOrUpdateFile(
    owner: string,
    repo: string,
    path: string,
    content: string,
    message: string,
    branch: string,
    sha?: string,
  ): Promise<any>;
}