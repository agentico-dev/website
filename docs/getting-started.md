---
sidebar_position: 1
slug: intro
---

# Getting Started

Agentico is a platform for integrating AI models into your daily processes, leveraging any local or cloud automation tool and data source. It is designed to be a simple and easy-to-use tool for data scientists, developers, and business users. Built on the foundation of the MCP (Model Context Protocol) framework, Agentico provides a simplified way to manage agentic workflows.

With Agentico, developers and DevOps engineers can:

* Easily register and configure tools.
* Seamlessly connect workflows across platforms.
* Automate repetitive tasks **while maintaining full control**.

Take a look on the quick-guides to start using Agentico:

* [Creating a Server](./quickstart/create-a-server)

## UML Diagram

To give you a better understanding of how the MCP Server works, here is a UML diagram of the main classes and their relationships:

![UML Diagram](https://github.com/agentico-dev/mcp-server/raw/main/mcp-server.png)

* **MCPServer**: Registers the tools that will be used by the server.
* **Tool**: Base class for all tools, containing common properties and methods. `execute` is the method that will be called when the tool is invoked, implement your logic here.
* **EchoTool**: Specific implementation of a tool, extending the Tool class and defining its own schema and initialization logic.
* **EchoSchema**: Defines the structure of the input for the EchoTool.
* **EchoInput**: Type definition for the input based on the schema.

This pattern allows for a flexible and extensible way to manage and implement tools using the MCPServer and Tool classes.