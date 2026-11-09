# Personal Portfolio (AR/EN, Dark/Light)
Static site: plain HTML/CSS/JS. No build step, no backend. All paths are relative, so no base-path setup is needed for `https://USER.github.io/REPO/`.

## Edit your content
Open `js/data.js`: name, bio, projects, experience, services, social links, photo. Everything marked "Placeholder" is sample text. Add `assets/cv.pdf` for the CV button and `assets/profile.jpg` (set `photo`).
Also update the `<title>` and Open Graph tags in `index.html` (for sharing, use a PNG/JPG in `og:image` with an absolute URL).

## Contact form
Create a free form at https://formspree.io and paste its URL into `formEndpoint`.

## Run locally
`python3 -m http.server 8000` then open http://localhost:8000

## Deploy
1. Push to a GitHub repo's `main` branch.
2. Settings → Pages → Source: **GitHub Actions**.
3. Each push to `main` deploys automatically (`.github/workflows/deploy.yml`).
