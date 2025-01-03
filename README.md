# Responsive Personal Website

This is my personal website.
The Website is available here [www.maciejbugaj.com](http://147.135.211.148/)

[![RWD website video](https://raw.githubusercontent.com/maciejbugaj/personal-website/master/.github/images/personalwebsite.gif)](http://147.135.211.148/)

[![publish](https://github.com/maciejbugaj/personal-website/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/maciejbugaj/personal-website/actions/workflows/docker-publish.yml)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/maciejbugaj/personal-website/graphs/commit-activity)
[![W3C](https://raw.githubusercontent.com/maciejbugaj/personal-website/develop/.github/images/w3c.svg)](https://validator.w3.org/nu/?doc=http%3A%2F%2F147.135.211.148%2F)
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://147.135.211.148/)

## Documentation

The documentation is divided into several sections:

* [Prerequisites](#prerequisites)
* [Used libraries](#libraries)
* [Running the application](#running-the-application)
* [Environments](#environments)
    * [Localhost environment](#localhost-environment)
    * [Production environment](#production-environment)
* [Application screens](#application-screens)


## Prerequisites

- [Docker](https://www.docker.com/)

## Libraries

| Library Name                             | Description                                                                                                   |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **@fontsource/raleway**                  | Self-hosted Raleway font family, allowing you to include fonts in your project without relying on external services. |
| **@headlessui/react**                    | A set of completely unstyled, fully accessible UI components for React, designed to integrate beautifully with Tailwind CSS. |
| **clsx**                                 | A utility for constructing `className` strings conditionally, helping to manage dynamic class names in React components. |
| **i18next**                              | An internationalization framework offering a complete solution for localizing your React application.         |
| **i18next-browser-languagedetector**     | A plugin for i18next used to detect user language in the browser, supporting various detection mechanisms like cookies, localStorage, and the browser's language settings. |
| **react**                                | A JavaScript library for building user interfaces, allowing developers to create reusable UI components.      |
| **react-awesome-button**                 | Performant, extendable, highly customizable, production-ready React component that renders an animated set of UI buttons. |
| **react-awesome-slider**                 | A 60fps, extendable, highly customizable, production-ready React component that renders a media (image/video) gallery slider/carousel. |
| **react-dom**                            | Provides DOM-specific methods that enable React to interact with the DOM, serving as the entry point to the DOM and server renderers for React. |
| **react-i18next**                        | A powerful internationalization framework for React / React Native which is based on i18next.                |
| **react-player**                         | A React component for playing various types of media, including YouTube, SoundCloud, and Vimeo.              |
| **react-switch**                         | A React component for creating iOS-style toggle switches.                                                    |
| **react-type-animation**                 | A simple typing animation component for React applications.                                                  |
| **react-vertical-timeline-component**    | A vertical timeline component for React, useful for displaying chronological data.                           |
| **react-youtube**                        | A React component for displaying YouTube videos.                                                             |
| **@iconify/react**                      | Provides a React component for displaying icons from the Iconify icon set, offering a wide range of icons in a consistent format. |
| **@types/node**                          | TypeScript definitions for Node.js, providing type information for the Node.js API.                          |
| **@types/react**                         | TypeScript definitions for React, enabling type checking and IntelliSense for React features.                |
| **@types/react-dom**                     | TypeScript definitions for React DOM, providing type information for React DOM APIs.                         |
| **@types/react-vertical-timeline-component** | TypeScript definitions for the `react-vertical-timeline-component` library, enabling type checking for this component. |
| **@typescript-eslint/eslint-plugin**     | An ESLint plugin which provides linting rules for TypeScript codebases.                                      |
| **@typescript-eslint/parser**            | An ESLint parser that allows ESLint to lint TypeScript code.                                                 |
| **@vitejs/plugin-react-swc**             | A Vite plugin that provides support for React using the SWC compiler, offering faster builds and hot module replacement. |
| **autoprefixer**                         | A PostCSS plugin which parses your CSS and adds vendor prefixes, ensuring compatibility with different browsers. |
| **eslint**                               | A pluggable linting utility for JavaScript and TypeScript, helping to find and fix problems in your code.     |
| **eslint-config-prettier**               | Disables ESLint rules that might conflict with Prettier, allowing both tools to work together seamlessly.     |
| **eslint-config-standard-with-typescript** | An ESLint shareable config for JavaScript Standard Style with TypeScript support.                            |
| **eslint-plugin-import**                 | An ESLint plugin that helps validate proper imports, preventing issues with misspelled or missing import paths. |
| **eslint-plugin-n**                      | An ESLint plugin for Node.js, enforcing best practices and coding conventions for Node.js applications.      |
| **eslint-plugin-promise**                | An ESLint plugin that enforces best practices for JavaScript promises, helping to avoid common mistakes.     |
| **eslint-plugin-react**                  | An ESLint plugin that provides linting rules for React applications, ensuring best practices and code consistency. |
| **eslint-plugin-react-hooks**            | An ESLint plugin that enforces rules of Hooks in React applications, preventing common mistakes when using Hooks. |
| **postcss**                              | A tool for transforming CSS with JavaScript plugins, enabling features like autoprefixing and future CSS syntax. |
| **prettier**                             | An opinionated code formatter that supports multiple languages, ensuring consistent code style across your project. |
| **prettier-plugin-tailwindcss**          | A Prettier plugin that automatically sorts Tailwind CSS classes, ensuring a consistent class order in your project. |
| **tailwindcss**                          | A utility-first CSS framework for rapidly building custom user interfaces, providing low-level utility classes. |
| **typescript**                           | A typed superset of JavaScript that compiles to plain JavaScript, enabling static type checking and other features. |
| **vite**                                 | A fast build tool and development server for modern web projects, offering features like hot module replacement and optimized builds. |


## Running the application

In order to run the website please run the below command and in your browser type URL defined in
the [Localhost environment](#localhost-environment) section.

```bash
## Run the website using Docker Compose
docker-compose up -d
```
## Environments

### Localhost environment

| Component  | URL                                              |
|------------|--------------------------------------------------|
| Website    | [http://localhost:5173/](http://localhost:5173/)           |

### Production environment

| Component | URL                                                         |
|-----------|-------------------------------------------------------------|
| Website   | [www.maciejbugaj.com](http://147.135.211.148/) |


## Application screens