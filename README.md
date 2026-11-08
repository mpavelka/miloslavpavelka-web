Personal Landing Page (miloslavpavelka.com)
===

A short self-presentation for the job search: who I am, what I have built, the CV, and how to get in touch.
You can find it at [https://miloslavpavelka.com](https://miloslavpavelka.com).

The www files are located in the `docs/` folder for smooth compatibility with GitHub Pages.

## Structure

- `docs/index.html` and `docs/css/site.css`: the homepage. Plain HTML and CSS, no build step, no JavaScript.
- `docs/cv/`: public copy of the CV (`index.html`, `miloslav-pavelka-cv.pdf`). It is a snapshot of
  `cv/cv.html` from the `job-hunt-workspace` repo with the phone number removed and `noindex` set.
  Refresh both files there whenever the CV changes.
- `docs/images/og-card.png`: 1200×630 preview used when the link is pasted into LinkedIn, Slack or email.
- `docs/totp-qr/` and `docs/clock-trainer/`: small stand-alone tools, linked from the footer.

## Develop

Serve `docs/` from its root (the pages use root-relative paths):

	$ python3 -m http.server 8000 --directory docs

## Deploy

This web is hosted by GitHub pages. Content is served from `docs/` folder.
