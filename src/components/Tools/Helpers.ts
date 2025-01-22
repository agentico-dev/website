import tools from '../../data/tools.json';
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

import packageJson from "../../../package.json";

const repoDetails = {
  owner: 'agentico-dev',
  repo: 'website',
  src: 'src/components/ToolsCatalog/tools.json',
  branch: 'deleteme',
  message: 'Add new tool'
};

const client = new Client({
  name: "agentico-dev-website",
  description: packageJson.description,
  version: packageJson.version
}, {
  capabilities: {}
});

const transport = new SSEClientTransport(
  new URL("http://localhost:3000/sse")
);
export const handleToolSubmit = async (newTool: any) => {
  try {
    let updatedTools = {};
    // update if exists, add it otherwise
    if (tools[newTool.name]) {
      console.log('Tool already exists, updating...');
      updatedTools = {
        ...tools,
        [newTool.name]: {
          ...tools[newTool.name],
          ...newTool
        }
      };
    } else {
      updatedTools = {
        ...tools,
        [newTool.name]: newTool
      };
    }
    console.log(`Adding tool to https://api.github.com/repos/${repoDetails.owner}/${repoDetails.repo}/contents/${repoDetails.src}`);
    // Call a tool
    await client.connect(transport);
    const result = await client.callTool({
      name: "create_or_update_file",
      arguments: { ...repoDetails, content: JSON.stringify(updatedTools, null, 2) }
    });
    console.log('Tool added successfully:', result);
    client.close();
    return result;
  } catch (error) {
    console.error('Error updating tools.json:', error);
    throw error;
  }
};