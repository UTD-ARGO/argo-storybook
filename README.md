# ARGO UX Master Component Library

## Table of Contents

- [ARGO UX Master Component Library](#argo-ux-master-component-library)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
    - [Purpose](#purpose)
    - [Information](#information)
    - [Members](#members)
  - [Sample Projects](#sample-projects)
  - [Latest Build](#latest-build)
  - [Getting Started](#getting-started)
    - [Package Installation/Usage](#package-installationusage)
    - [Develop Locally](#develop-locally)
  - [Contributing](#contributing)
    - [Overview](#overview)
    - [Creating a Pull Request](#creating-a-pull-request)
    - [Creating a Component](#creating-a-component)
    - [Styling a Component](#styling-a-component)

## About

### Purpose
The ARGO UX Master Component Library is a collection of React components that are used to build the ARGO UX. The library is a proof of concept built to solve ARGO's issues of scalability, design standardization, and reusability. The goal is to have a centrally managed design system which permits updates to be made across all projects from a single codebase. 

### Information

The library is built using [Storybook](https://storybook.js.org/), a tool for developing UI components in isolation. 

The library is deployed using [Chromatic](https://www.chromatic.com/), a visual regression testing and review tool for Storybook.

The library is distributed using [NPM](https://www.npmjs.com/), a package manager for JavaScript.

### Members
- [@Kevin Roa](https://github.com/Kevin-Roa) (Team Lead)
- [@Aliah De Guzman](https://github.com/aidigii)
- [@Samuel Anozie](https://github.com/sanozie)
- [@Saud Baig](https://github.com/saudbaig456)
- [@Noah Turrin](https://github.com/superMasterSword)
- [@Te'a Washington](https://github.com/tewashi)

## Sample Projects
- [Stocks Dashboard](https://github.com/UTD-ARGO/argo-stocks-example)
- [Social Media Analytics Dashboard](https://github.com/UTD-ARGO/argo-analytics-example)
- [Fresh Oranges](https://github.com/UTD-ARGO/argo-imbd-example)

## Latest Build
Deployments are automatically generated by GitHub Actions when a pull request is merged into main. The latest deployment can be found at the following links:
- View latest storybook deployment at: 
  - [https://main--63f2c0bed84a2da0ed389ac2.chromatic.com](https://main--63f2c0bed84a2da0ed389ac2.chromatic.com)
- View latest storybook build at:
  - [https://www.chromatic.com/library?appId=63f2c0bed84a2da0ed389ac2&branch=main](https://www.chromatic.com/library?appId=63f2c0bed84a2da0ed389ac2&branch=main)

Packages are automatically generated by GitHub Actions when a new release is published. The latest package can be found at the following link:
- View latest package at:
  - [https://www.npmjs.com/package/@utd-argo/ux-master-library](https://www.npmjs.com/package/@utd-argo/ux-master-library)

## Getting Started

### Package Installation/Usage
1. Install the package
   ``` bash
   npm install @utd-argo/ux-master-library@latest
   ```
2. Import a component
   ``` javascript
   import { Component } from '@utd-argo/ux-master-library';
   ```
3. Use the component
   ``` jsx
   <Component ...>
      ...
   </Component>
   ```

### Develop Locally

1. Clone the repository from main
   ``` bash
   git clone https://github.com/UTD-ARGO/argo-storybook.git
   ```
2. Navigate into the project directory
   ``` bash
   cd argo-storybook
   ```
3. Install dependencies
   ``` bash
   npm install
   ```
4. Start the local development server
   ``` bash
   npm run storybook
   ```
5. Navigate to `http://localhost:6006` in your browser

## Contributing
### Overview
1. Create a new feature branch from `main`
2. Make commits on this branch
3. Push to this branch as you develop
4. Once you are ready to merge, create a pull request
5. Have at least 1 team member review your changes
6. Merge changes into main

### Creating a Pull Request
1. Rebase your branch
   ``` bash
   git rebase main
   ```
2. Push your branch
   ``` bash
   git push --force
   ```
3. Create a pull request on GitHub
   1. Navigate to the repository on GitHub
   2. Go to the `Pull Requests` tab
   3. Click the `New pull request` button
   4. Select your feature branch as the `compare` branch
   5. Select `main` as the `base` branch
   6. Add a title and description
   7. Click the `Create pull request` button


### Creating a Component
1. Create a new directory in `src/components` called `<componentName>`
2. Create 3 files within the new directory: `<componentName>.tsx`, `<componentName>.css`, `<componentName>.stories.tsx`
3. Import the component in `src/index.tsx` and add `<componentName>` to the export list.

### Styling a Component
1. Each component should have its own CSS file associated with it
2. Styles must follow a specific set of guidelines to be accepted
   1. See: [CSS Guidelines](css-guidelines.md)