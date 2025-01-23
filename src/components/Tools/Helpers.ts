import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

import packageJson from "../../../package.json";

type RepoDetails = {
  owner: string;
  repo: string;
  path: string;
  branch: string;
  message: string;
};

type MCPGithubClientOptions = {
  id: string;
  serverUrl: string;
  repoDetails: RepoDetails;
};

const githubToolConfig = {
  id: 'mcp-github-client-agentico',
  serverUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/github' : 'https://mcp.agentico.dev/github',
  repoDetails: {
    owner: 'agentico-dev',
    repo: 'website',
    path: 'src/data/tools.json',
    branch: 'deleteme',
  },
} as MCPGithubClientOptions;

const client = new Client({
  name: packageJson.name,
  description: packageJson.description,
  version: packageJson.version
}, {
  capabilities: {}
});

export const handleToolSubmit = async (newTool: any) => {
  try {
    const transport = new SSEClientTransport(new URL(`${githubToolConfig.serverUrl}`));    
    await client.connect(transport);
    const toolsFile = await getFileContents();
    await addOrUpdateTool(toolsFile, newTool);
  } catch (error) {
    throw error;
  } finally {
    client.close();
  }
};

async function getFileContents() {
  // @todo - can we implement this (MCP clients) as a plugin?
  // const pluginData = usePluginData('mcp-github-client-agentico') as { mcpGithubClient: any };
  // const { mcpGithubClient } = pluginData;
  // const response = await mcpGithubClient.client.callTool({
  const repoDetails = {
    ...githubToolConfig.repoDetails,
    branch: process.env.NODE_ENV === 'production' ? 'new-tools' : 'deleteme',
  };
  const response = await client.callTool({
    name: "get_file_contents",
    arguments: repoDetails
  });
  // The response is an array of content objects with type and text properties
  // the text content is are the file properties, we need the content property (Content of content object)
  const content = JSON.parse(JSON.parse(response.content[0].text).content);
  return content || {};
}
function mergeTools(currentTools: any, newTool: any) {
  const mergedTool = { ...currentTools };

  for (const key in newTool) {
    if (newTool.hasOwnProperty(key)) {
      // is this an object? Then we need to recursively merge
      if (typeof newTool[key] === 'object') {
        mergedTool[key] = mergeTools(currentTools[key], newTool[key]);
      } else if (newTool[key] !== null && newTool[key] !== undefined && newTool[key] !== '') {
        mergedTool[key] = newTool[key];
      }
    }
  }

  return mergedTool;
}
async function addOrUpdateTool(currentTools: any, newTool: any) {
  const repoDetails = {
    ...githubToolConfig.repoDetails,
    branch: process.env.NODE_ENV === 'production' ? 'new-tools' : 'deleteme',
  };
  let updatedTools = {};
  let message = '';
  // update if exists, add it otherwise
  if (currentTools[newTool.name]) {
    message = `Update tool ${newTool.name}`;
    updatedTools = mergeTools(currentTools[newTool.name], newTool);
  } else {
    message = `Add tool ${newTool.name}`;
    updatedTools = {
      ...currentTools,
      [newTool.name]: newTool
    };
  }
  // @todo - can we implement this (MCP clients) as a plugin?
  // const pluginData = usePluginData('mcp-github-client-agentico') as { mcpGithubClient: any };
  // const { mcpGithubClient } = pluginData;
  // Call a tool -to add or update the tool into the tools.json file
  await client.callTool({
    name: "create_or_update_file",
    arguments: { ...repoDetails, message, content: JSON.stringify(updatedTools, null, 2) }
  });
}
