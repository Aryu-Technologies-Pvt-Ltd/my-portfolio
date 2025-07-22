# Portfolio Website

This project contains a small portfolio built with [Next.js](https://nextjs.org/).

## Getting Started

Install dependencies and start the development server:

```bash
cd next-portfolio
npm install
npm run dev
```

Then open `http://localhost:3000` to view the site.

To build the static site for deployment (e.g. on Netlify), run:

```bash
npm run build
```

The generated files will be in the `next-portfolio/out` directory, which can be
deployed as a static site.

## Deploying on Netlify

This repository includes a `netlify.toml` file so Netlify knows how to build
and serve the site. If you configure Netlify manually, set the following:

* **Base directory:** `next-portfolio`
* **Build command:** `npm run build`
* **Publish directory:** `out`

Netlify will host the contents of `next-portfolio/out` so all pages load
correctly.

## Usage

Open any of the HTML files in your browser. If you want to serve the site locally, you can use a simple static server, for example with Python:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000` in your browser.