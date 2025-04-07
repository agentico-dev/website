---
title: Init Project
description: AI Tool that simplifies Kubernetes and Helm project initialization so you can focus on what truly matters - building and deploying great software.
authors:
  - larebelion
tags:
  - kubernetes
  - devops
---

Whether you're a beginner exploring cloud-native development or a seasoned DevOps pro, this tool simplifies project initialization so you can focus on what truly matters - building and deploying great software.

<!-- truncate -->

🔧 You can try it directly from Claude for Desktop.

## 🚀 Getting Started

Configure the tool in your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "init-project": {
      "command": "npx",
      "args": [ "-y", "@k1s/qbot-init-project" ]
    }
  }
}
```

From there, you can start building your Kubernetes and Helm projects with ease. 🚀

Open Claude for Desktop and ask the LLM to create a new project. The LLM automatically detects the installed tools and selects `init-project` for you.

For example, just type the prompt:  
👉 "Create a new QBot project named k8s-test"

💡 And just like that, it sets up your project for you!

## 📁 Project Structure

```bash
$ tree
.
├── charts
│   └── drift-detection
│       ├── Chart.yaml
│       ├── README.md
│       ├── templates
│       │   ├── 0-configmap-index-html.yaml
│       │   ├── NOTES.txt
│       │   ├── _helpers.tpl
│       │   ├── conf-secret-app.yaml
│       │   ├── conf-secret-db.yaml
│       │   ├── configmap-app.yaml
│       │   ├── configmap-db.yaml
│       │   ├── ingress.yaml
│       │   ├── netw-service-app.yaml
│       │   ├── netw-service-db.yaml
│       │   ├── wrkl-deployment.yaml
│       │   └── wrkl-statefulset.yaml
│       └── values.yaml
├── config
│   └── config.json
├── envs
│   ├── base
│   │   ├── kustomization.yaml
│   │   └── values.yaml
│   ├── dev
│   │   ├── kustomization.yaml
│   │   ├── values-file-1.yaml
│   │   └── values.yaml
│   ├── kustomization.yaml
│   ├── prod
│   │   ├── kustomization.yaml
│   │   └── values.yaml
│   ├── qa
│   │   └── kustomization.yaml
│   ├── sandbox
│   │   └── kustomization.yaml
│   ├── staging
│   │   ├── kustomization.yaml
│   │   └── values.yaml
│   ├── test
│   │   └── kustomization.yaml
│   └── uat
│       └── kustomization.yaml
├── snapshots
└── templates
```

This structure follows Kubernetes best practices while ensuring flexibility for teams that:

✅ Already use Helm and need smooth chart integration.  
✅ Want to leverage Kustomize for more granular control.  
✅ Work collaboratively - not in silos, but in tandem! (Teams handling app development and custom configurations can now work seamlessly.)  
✅ Build both COTS (Commercial Off-The-Shelf) and bespoke software solutions.

## 🔍 Key Features of This Structure

📁 envs/ → Stores environment-specific configs (e.g., development, qa, production).  
📁 charts/ → Keeps local Helm charts handy for teams working closely on application and deployment configurations.  

Democratizing Kubernetes best practices—making them accessible, easy to use, and adaptable for any project! That's the QBot's goal. 🤖
