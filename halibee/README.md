# HaLiBee Project Documentation


## Introduction

This is the code base for the HaLiBee web app. HaLiBee is an online platform for freelancers to ubiquituously service clients. The tech stack for this code bas is as follows:

### Next JS
This is the Javascript framework on which this web app is built. It was chosen for its in-built fullstack support, dynamic routing, server-side rendering and ease PWA readiness.

### Tailwind 
This CSS framework was used for the UI styling for the sake of proficiency, it's buit-in dark-mode settings, and its ease of implementing responsive designs.

### Firebase
This is a backend service offered by Google and based on the Google Cloud Platform, it serves as the back end service for this project, offering authentication, 
a noSQL database, and a cloud file storage.

### Chat Engine
This is a react library provided by the online chat service called Chat Engine. It's purpose in this project is to enable real-time chat and file sharing between freelancers and clients.

## Structure

The source files in this project are grouped into three (3) main folders. These are:

### Pages
These files are the front end web pages which a user will interact with. The names of the files match tmatch their route names.

### Components
These are some reusable UI components.

### Modules
These files hold functions and configurations for the functionality of the web app. These include:
#### Theme toggle function
#### Firebase and Chat Engine configurations
#### Helper functions.


# Next JS READ ME
## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
