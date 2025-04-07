---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a Server

The easiest way to create a server is to use the `MCPServer` class from the `mcp-server` package. This class provides a simple way to register and manage tools, as well as execute workflows. Execute the steps defined on each tab below to create a new server, register a tool, and test a simple example.


<Tabs>
<TabItem value="create" label="1 Create Server" default>

```bash
# Create a new server, tool included in the directory `echo-tool`
npx @agentico/mcp-create-tool echo-tool

# With options
npx @agentico/mcp-create-tool echo-tool --name "MCP Echo Tool" --description "A custom MCP tool that echoes input messages."

cd echo-tool     # Navigate to server directory
npm install && npm run build    # Install dependencies and build once
```

</TabItem>
<TabItem value="test" label="2 Test Server from Your Browser">

```bash
npm run start    # Start the server

# Test your server in your browser
npm run inspector
```

After testing the server in your browser, you can stop the server by pressing `Ctrl+C` in the terminal.

</TabItem>
<TabItem value="claude" label="3 Test Server with Claude">

Open the Claude Desktop App, if this is not installed on your machine, download it from the [Claude website](https://claude.ai/download).

In the step one, when the server was created, the `mcp-create-tool` command created a `claude.json` file with the server configuration. When you open the Claude Desktop App if everything is correctly configured, you will see the server's tools avaliable to be used.

For this test, you don't need to start the server manually, Claude will start the server for you.

</TabItem>
</Tabs>