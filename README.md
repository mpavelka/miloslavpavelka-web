Personal Landing Page (miloslavpavelka.com)
===

A personal page about who I am and how I work, with quick links to the small tools I made.
It deliberately does not repeat the CV or name employers; it links to the CV instead.
You can find it at [https://miloslavpavelka.com](https://miloslavpavelka.com).

The www files are located in the `docs/` folder for smooth compatibility with GitHub Pages.

## Structure

- `docs/index.html` and `docs/css/site.css`: the "About me" page with a sidebar. Plain HTML and CSS, no build step, no JavaScript.
- `docs/cv/`: public copy of the CV (`index.html`, `miloslav-pavelka-cv.pdf`). It is a snapshot of
  `cv/cv.html` from the `job-hunt-workspace` repo with the phone number removed and `noindex` set.
  Refresh both files there whenever the CV changes.
- `docs/images/og-card.png`: 1200×630 preview used when the link is pasted into LinkedIn, Slack or email.
- `docs/totp-qr/` and `docs/clock-trainer/`: tools I made. They are listed under "Tools" in the sidebar (marked with ↗, opened in a new tab). To add a tool, add a list item there.

## Develop

Serve `docs/` from its root (the pages use root-relative paths):

	$ python3 -m http.server 8000 --directory docs

## Deploy

This web is hosted by GitHub pages. Content is served from `docs/` folder.
