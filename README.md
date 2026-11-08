# Ankur Bhadauria | Data Analyst Portfolio

A single-page portfolio website for a Data Analyst with 8+ years of experience in SQL, data operations, validation, segmentation, automation and reporting. It is built with plain HTML, CSS and JavaScript, so it needs no build step and runs on GitHub Pages.

**Live site:** _add the link here after you turn on GitHub Pages, for example `https://your-username.github.io/your-repo-name/`_

> **Please note:** The projects on this site are personal practice projects on sample data. The job simulations are Forage virtual experience programs. Nothing here is real company data, and the three project concepts are marked as planned, not finished.

## What is on the site

- Hero with animated SQL and chart visuals, and six impact figures with counters
- About, skills, project cards and a career timeline (OPK E Services Pvt. Ltd., 2018 to 2026)
- Retail Sales Performance Dashboard (Power BI practice project) with a detail popup and a PBIX download
- Job simulations (Deloitte Australia, British Airways) with certificate previews
- Education, a six-step analysis workflow, a resume download and a contact form
- Animated data-themed background that respects the "reduce motion" setting

## Project structure

```
ankur-portfolio/
├── index.html            page content
├── styles.css            all styling
├── script.js             animations, popups, counters, contact form
├── README.md
└── assets/
    ├── images/
    │   ├── retail-sales-dashboard.jpg
    │   ├── deloitte-certificate.jpg
    │   └── british-airways-certificate.jpg
    └── files/
        ├── Ankur_Bhadauria_Data_Analyst_Resume.pdf
        └── Retail_Sales_Performance_Dashboard.pbix
```

## Publish it with GitHub Pages

1. Create a new repository on GitHub (for example `portfolio`). Set it to **Public**.
2. Click **Add file, then Upload files**. Drag in the **contents** of this folder (`index.html`, `styles.css`, `script.js`, `README.md` and the `assets` folder). `index.html` must sit at the top level of the repository, not inside another folder.
3. Click **Commit changes**.
4. Open **Settings, then Pages**. Under "Build and deployment" choose **Deploy from a branch**, pick the **main** branch and the **/ (root)** folder, then **Save**.
5. Wait one to two minutes and refresh. GitHub shows your site link at the top of the Pages screen.
6. Paste that link into the "Live site" line above and into your LinkedIn profile.

## Edit the site

| What to change | Where |
|---|---|
| LinkedIn and GitHub links | The two lines at the top of `script.js`. The icons appear on the site once a link is set |
| Email address and phone numbers | Search for `ankur4u03@gmail.com` and the phone numbers in `index.html` |
| Resume | Replace `assets/files/Ankur_Bhadauria_Data_Analyst_Resume.pdf` with your new file, using the same file name |
| Project links (GitHub, "View project") | Project cards in `index.html`. Replace the grey "not added yet" labels with a link such as `<a class="btn s" href="https://github.com/..." target="_blank" rel="noopener">GitHub</a>` |
| Certificate links | Search for "Certificate link: to be added" in `index.html` |
| Colours | The variables at the top of `styles.css` (`--blue`, `--cyan`, `--bg`) |

## Run it on your computer

Double-click `index.html` to open it in your browser. Or, for a closer match to the live site, open a terminal in this folder and run:

```
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- The contact form opens the visitor's email app with the message filled in. It does not send mail from a server.
- Fonts load from Google Fonts. If you are offline, the site falls back to system fonts.
- The Retail Sales Performance Dashboard is a practice project on sample data. See the popup on the site for its notes and limits.

## Author

**Ankur Bhadauria**, Data Analyst.
