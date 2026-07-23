# Thomas Miller — Personal Website

This repository contains the first version of my personal website: a place to
explore practical uses for AI, trusted data foundations, and projects built in
public.

The site is intentionally lightweight and will evolve as I learn, experiment,
and share more of my work.

## How this started

This website began as a hands-on experiment in learning modern development and
AI-assisted workflows. In roughly two hours, I went from installing the
required tools—including Git, Node.js, Python, and supporting software—to
building, refining, and preparing the first version of this site.

I am preserving that starting point as a reminder of how quickly these tools
are changing what one person can learn and create.

## Run locally

This is a vinext/Next-compatible project using Node.js 24.

Install the dependencies from Windows PowerShell:

```powershell
$env:NODE_OPTIONS = "--use-system-ca"
npm.cmd ci
```

Start the local development preview:

```powershell
npm.cmd run dev
```

Create a production build:

```powershell
npm.cmd run build
```
