# Arun Arumugam — Portfolio

A responsive, static professional portfolio with self-hosted typography, accessible
navigation, and no runtime dependencies. Content is based on the supplied resume
and the confirmed LinkedIn profile: https://www.linkedin.com/in/arunitk8s/.

## Local use

Requires Node.js 22 or newer.

```sh
npm run build
npm run preview
```

Open http://127.0.0.1:4173. Vercel runs `npm run build` and serves only `dist/`.
The source resume, residential address, phone number, and local work files are
not included in the site. Contact is via the supplied professional email and LinkedIn.

## Push reviews

See [.githooks/README.md](.githooks/README.md). Activate after cloning with
`git config --local core.hooksPath .githooks`.

## Content maintenance

Edit `index.html` for professional content, `styles.css` for design, and
`public/assets/` for images and fonts. Avoid invented project metrics or claims.
The portrait is currently an initials treatment, pending a user-supplied photo.

Font: Manrope by Mikhail Sharanda and Mirko Velimirovic, SIL Open Font License.
