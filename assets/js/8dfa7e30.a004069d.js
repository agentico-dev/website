"use strict";(self.webpackChunkagentico_dev=self.webpackChunkagentico_dev||[]).push([[8877],{3184:e=>{e.exports=JSON.parse('{"permalink":"/tools/@k1ssh/qbot-init-project","source":"@site/tools/@k1ssh/qbot-init-project.md","title":"Init Project","description":"AI Tool that simplifies Kubernetes and Helm project initialization so you can focus on what truly matters - building and deploying great software.","date":"2025-01-30T13:19:59.000Z","tags":[{"inline":true,"label":"kubernetes","permalink":"/tools/tags/kubernetes"},{"inline":true,"label":"devops","permalink":"/tools/tags/devops"}],"hasTruncateMarker":true,"authors":[{"name":"La Rebelion Labs","url":"https://rebelion.la","page":{"permalink":"/tools/authors/la-rebelion"},"key":"larebelion"}],"frontMatter":{"title":"Init Project","description":"AI Tool that simplifies Kubernetes and Helm project initialization so you can focus on what truly matters - building and deploying great software.","authors":["larebelion"],"tags":["kubernetes","devops"]},"unlisted":false,"nextItem":{"title":"Echo","permalink":"/tools/echo"}}')},3805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var o=n(3184),s=n(4848),a=n(8453);const r={title:"Init Project",description:"AI Tool that simplifies Kubernetes and Helm project initialization so you can focus on what truly matters - building and deploying great software.",authors:["larebelion"],tags:["kubernetes","devops"]},i=void 0,l={authorsImageUrls:[void 0]},c=[{value:"\ud83d\ude80 Getting Started",id:"-getting-started",level:2},{value:"\ud83d\udcc1 Project Structure",id:"-project-structure",level:2},{value:"\ud83d\udd0d Key Features of This Structure",id:"-key-features-of-this-structure",level:2}];function u(e){const t={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Whether you're a beginner exploring cloud-native development or a seasoned DevOps pro, this tool simplifies project initialization so you can focus on what truly matters - building and deploying great software."}),"\n",(0,s.jsx)(t.p,{children:"\ud83d\udd27 You can try it directly from Claude for Desktop."}),"\n",(0,s.jsx)(t.h2,{id:"-getting-started",children:"\ud83d\ude80 Getting Started"}),"\n",(0,s.jsxs)(t.p,{children:["Configure the tool in your ",(0,s.jsx)(t.code,{children:"claude_desktop_config.json"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "mcpServers": {\n    "init-project": {\n      "command": "npx",\n      "args": [ "-y", "@k1s/qbot-init-project" ]\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"From there, you can start building your Kubernetes and Helm projects with ease. \ud83d\ude80"}),"\n",(0,s.jsxs)(t.p,{children:["Open Claude for Desktop and ask the LLM to create a new project. The LLM automatically detects the installed tools and selects ",(0,s.jsx)(t.code,{children:"init-project"})," for you."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, just type the prompt:",(0,s.jsx)(t.br,{}),"\n",'\ud83d\udc49 "Create a new QBot project named k8s-test"']}),"\n",(0,s.jsx)(t.p,{children:"\ud83d\udca1 And just like that, it sets up your project for you!"}),"\n",(0,s.jsx)(t.h2,{id:"-project-structure",children:"\ud83d\udcc1 Project Structure"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ tree\n.\n\u251c\u2500\u2500 charts\n\u2502   \u2514\u2500\u2500 drift-detection\n\u2502       \u251c\u2500\u2500 Chart.yaml\n\u2502       \u251c\u2500\u2500 README.md\n\u2502       \u251c\u2500\u2500 templates\n\u2502       \u2502   \u251c\u2500\u2500 0-configmap-index-html.yaml\n\u2502       \u2502   \u251c\u2500\u2500 NOTES.txt\n\u2502       \u2502   \u251c\u2500\u2500 _helpers.tpl\n\u2502       \u2502   \u251c\u2500\u2500 conf-secret-app.yaml\n\u2502       \u2502   \u251c\u2500\u2500 conf-secret-db.yaml\n\u2502       \u2502   \u251c\u2500\u2500 configmap-app.yaml\n\u2502       \u2502   \u251c\u2500\u2500 configmap-db.yaml\n\u2502       \u2502   \u251c\u2500\u2500 ingress.yaml\n\u2502       \u2502   \u251c\u2500\u2500 netw-service-app.yaml\n\u2502       \u2502   \u251c\u2500\u2500 netw-service-db.yaml\n\u2502       \u2502   \u251c\u2500\u2500 wrkl-deployment.yaml\n\u2502       \u2502   \u2514\u2500\u2500 wrkl-statefulset.yaml\n\u2502       \u2514\u2500\u2500 values.yaml\n\u251c\u2500\u2500 config\n\u2502   \u2514\u2500\u2500 config.json\n\u251c\u2500\u2500 envs\n\u2502   \u251c\u2500\u2500 base\n\u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n\u2502   \u2502   \u2514\u2500\u2500 values.yaml\n\u2502   \u251c\u2500\u2500 dev\n\u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n\u2502   \u2502   \u251c\u2500\u2500 values-file-1.yaml\n\u2502   \u2502   \u2514\u2500\u2500 values.yaml\n\u2502   \u251c\u2500\u2500 kustomization.yaml\n\u2502   \u251c\u2500\u2500 prod\n\u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n\u2502   \u2502   \u2514\u2500\u2500 values.yaml\n\u2502   \u251c\u2500\u2500 qa\n\u2502   \u2502   \u2514\u2500\u2500 kustomization.yaml\n\u2502   \u251c\u2500\u2500 sandbox\n\u2502   \u2502   \u2514\u2500\u2500 kustomization.yaml\n\u2502   \u251c\u2500\u2500 staging\n\u2502   \u2502   \u251c\u2500\u2500 kustomization.yaml\n\u2502   \u2502   \u2514\u2500\u2500 values.yaml\n\u2502   \u251c\u2500\u2500 test\n\u2502   \u2502   \u2514\u2500\u2500 kustomization.yaml\n\u2502   \u2514\u2500\u2500 uat\n\u2502       \u2514\u2500\u2500 kustomization.yaml\n\u251c\u2500\u2500 snapshots\n\u2514\u2500\u2500 templates\n"})}),"\n",(0,s.jsx)(t.p,{children:"This structure follows Kubernetes best practices while ensuring flexibility for teams that:"}),"\n",(0,s.jsxs)(t.p,{children:["\u2705 Already use Helm and need smooth chart integration.",(0,s.jsx)(t.br,{}),"\n","\u2705 Want to leverage Kustomize for more granular control.",(0,s.jsx)(t.br,{}),"\n","\u2705 Work collaboratively - not in silos, but in tandem! (Teams handling app development and custom configurations can now work seamlessly.)",(0,s.jsx)(t.br,{}),"\n","\u2705 Build both COTS (Commercial Off-The-Shelf) and bespoke software solutions."]}),"\n",(0,s.jsx)(t.h2,{id:"-key-features-of-this-structure",children:"\ud83d\udd0d Key Features of This Structure"}),"\n",(0,s.jsxs)(t.p,{children:["\ud83d\udcc1 envs/ \u2192 Stores environment-specific configs (e.g., development, qa, production).",(0,s.jsx)(t.br,{}),"\n","\ud83d\udcc1 charts/ \u2192 Keeps local Helm charts handy for teams working closely on application and deployment configurations."]}),"\n",(0,s.jsx)(t.p,{children:"Democratizing Kubernetes best practices\u2014making them accessible, easy to use, and adaptable for any project! That's the QBot's goal. \ud83e\udd16"})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(6540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);