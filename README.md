<h1 align="center">
    <p align="center">MELON DOCS</p>
    <img align="center" src="https://cdn.discordapp.com/avatars/808706062013825036/1cac2efc38adc97309f21ca229ce4864.png?size=1024" style="border:20px solid;border-radius:50px;" height="200" width="200">
</h1>
 
<p align="center">
    <a href="https://gitpod.io/#https://github.com/japandotorg/melon-docs"><img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"/></a>
    <a href="https://app.netlify.com/sites/docusaurus-2/deploys"><img src="https://api.netlify.com/api/v1/badges/9e1ff559-4405-4ebe-8718-5e21c0774bc8/deploy-status" alt="Netlify Status"></a>
</p>

> **I'm here working hard on MELON, if you're new to MELON's user experience, try seeing the [docs](https://melondocs.netlify.app) for some help and too se what melon can do**

> **You can add MELON to your server by using this [link]()**

### Introduction

Melon is a discord bot made to make moderation and administration really easy and simple.

* Utility
> Melon comes with some powerful and useful utility commands
* Custom Commands
> Melon comes with the ability to create powerful custom commands through the usage of tag blocks
* Leveling
> Melon comes with a powerful leveling system for free

### Installation

You can use this repo as a template for your project/documentation website with the steps shown below:

```py
npm install # install the npm packages
npm build # build the repo
npx http-server ./build # check out the build file in your localhost, default port is 3000
npm start # test and check out the repo in your localhost, default port is 3000
```
File tree:
```
@japandotorg/melon-docs
├── docs
|   ├── custom commands
|   |   ├── _category_.json
|   |   ├── page1.md
|   |   ├── page2.md
|   |   ├── page3.md
|   |   ├── page4.md
|   |   └── page5.md
|   ├── leveler
|   |   ├── _category_.json
|   |   └── page1.mdx
|   ├── lockdown
|   |   ├── _category_.json
|   |   ├── page1.md
|   |   └── page2.md
|   └── intro.md
├── plugins
|   └── case-sensitive-paths
|       └── index.js
├── scripts
|   ├── cli2md.py
|   ├── include_stdlib.py
|   └── requirements.txt
├── src
|   ├── components
|   |   ├── BrowserWindow
|   |   |   ├── index.tsx
|   |   |   └──  styles.module.css
|   |   ├── ColorGenerator
|   |   |   ├── index.tsx
|   |   |   └──  styles.module.css
|   |   ├── version
|   |   |   ├── Container.js
|   |   |   ├── GridBlock.js
|   |   |   └──  MarkdownBlock.js
|   |   ├── HomepageFeatures.js
|   |   └── HomepageFeatures.module.css
|   ├── css
|   |   └── custom.css
```