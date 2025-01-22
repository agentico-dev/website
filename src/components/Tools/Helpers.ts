import tools from '../../data/tools.json';
import { createOrUpdateFile } from '@modelcontextprotocol/server-github/dist/operations/files';

const repoDetails = {
  owner: 'agentico-dev',
  repo: 'website',
  src: 'src/components/ToolsCatalog/tools.json',
  branch: 'deleteme'
};

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
    const result = await createOrUpdateFile(
      repoDetails.owner,
      repoDetails.repo,
      repoDetails.src,
      // @todo - validate that the content doesn't already exist
      JSON.stringify(updatedTools, null, 2),
      'Add new tool',
      repoDetails.branch
    );
    console.log('Tool added successfully:', result);
    return result;
  } catch (error) {
    console.error('Error updating tools.json:', error);
    throw error;
  }
};