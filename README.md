# Cesium Materials

A simple component to handle materials management for Smart Construction Dashboard. The component is used inside a simple app in dev/index.html. see how to run below

## Setup

Install dependencies:

```bash
npm i
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Testing

Tests can be run with the `test` script:

```bash
npm test
```

## Dev Server

To run the local dev server and open the project in a new browser tab:

```bash
npm run serve
```
__NB__: Ensure you already run build above       
There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html.

## Static Site

To build docs run:

```bash
npm run docs
```

To serve the site locally, run:

```bash
npm run docs:serve
```

To watch the site files, and re-build automatically, run:

```bash
npm run docs:watch
```

The site will usually be served at http://localhost:8000.
