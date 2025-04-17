---
sidebar_position: 9
title: Updates
description: Documentation updates and changes
---

This page contains information about updates and changes made to the documentation. It is intended to help users understand the evolution of the documentation and any new features or changes that have been introduced.

## 2025-04
- **Deprecated**: The [`mcp-server`](https://github.com/agentico-dev/mcp-server) repository and [`npm`](https://www.npmjs.com/package/@agentico/mcp-server) has been deprecated; when I started the project MCP version 0.3.0 was the latest version, and it was not until version [version 1.3.0](https://github.com/modelcontextprotocol/typescript-sdk/releases/tag/1.3.0) that it was introduced a very similar approach, a `facade` to load the tools, resources, and prompts.
- The `npm` package [`@agentico/mcp-intent-based`](https://www.npmjs.com/package/@agentico/mcp-intent-based) is available, using [Intent-Based approach](./intent-based-mcp), which is a more advanced and flexible way to define the tools and their interactions.
- The new repository [`@agentico/mcp`](https://www.npmjs.com/package/@agentico/mcp) includes a demo of the Intent-Based implementation approach with examples and community tools using this innovative approach.