import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import packageJson from "../package.json";
const { siteConfig } = useDocusaurusContext();

type RepoDetails = {
  owner: string;
  repo: string;
  path: string;
  branch: string;
};

interface MCPGithubClientOptions {
  id: string;
  serverUrl: string;
  repoDetails: RepoDetails;
}

//https://docusaurus.io/__docusaurus/debug/metadata
export default async function mcpGithubClient(context: any, options: MCPGithubClientOptions) {
  const client = new Client({
    name: siteConfig.title,
    description: siteConfig.tagline,
    version: packageJson.version
  }, {
    capabilities: {}
  });
  return {
    name: options.id,
    async loadContent() {
      const transport = new SSEClientTransport(new URL(`${options.serverUrl}`));
      await client.connect(transport);
    },
    async contentLoaded({ content, actions }) {
      //https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#setGlobalData
      const { setGlobalData } = actions;
      const repoDetails = options.repoDetails as RepoDetails;
      setGlobalData({ mcpGithubClient: { client, repoDetails } });
    }
  };
}