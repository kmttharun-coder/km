# Tharun K M - Portfolio

A personal portfolio website built with plain HTML, CSS and JavaScript. No frameworks or build tools are needed.

## Live Preview

Open `index.html` in any modern browser, or host it with GitHub Pages (see below).

## Features

- Responsive layout for desktop, tablet and mobile
- Animated typing text in the hero section
- Mobile hamburger menu
- Highlights the current section in the navigation bar
- Scroll reveal animations and skill progress bars
- Contact form (demo mode)
- Respects the "reduce motion" accessibility setting

## Project Structure

```
portfolio/
├── index.html    # Page structure and content
├── style.css     # All styling and responsive rules
├── script.js     # Interactivity and animations
└── README.md     # This file
```

## How to Customize

1. **Your details:** Edit the text in `index.html` (name, about text, skills, education).
2. **Projects:** In the `#projects` section, change the titles, descriptions, tags and links. Replace `href="#"` with your real Live Demo and GitHub URLs.
3. **Colors:** Change the variables at the top of `style.css` under `:root`, such as `--accent` and `--accent-2`.
4. **Skill levels:** Adjust the `--level` value (for example `75%`) on each skill bar in `index.html`.
5. **Typing text:** Edit the `phrases` array in `script.js`.
6. **Social links:** Update the LinkedIn and GitHub links in the contact section.

## Making the Contact Form Work

The form currently shows a thank-you message only and does not send email. To receive messages, use a free service such as [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com). Set the form's `action` attribute to the service's URL, or follow its instructions in `script.js`.

## Uploading to GitHub

1. Create a new **public** repository on GitHub, for example `portfolio`.
2. Upload the files (`index.html`, `style.css`, `script.js`, `README.md`) to the **root** of the repository. They should appear on the first screen, not inside a folder.

Or use the terminal:

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

## Hosting with GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** > **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute or two, your site will be live at `https://<your-username>.github.io/portfolio/`.

## Troubleshooting

- **Site not showing:** Make sure `index.html` is in the repository root and the Pages branch is `main` with `/ (root)` selected.
- **Repository is private:** GitHub Pages on a free account needs a public repository. Change it under **Settings** > **General**.
- **Push asks for a password:** Use a Personal Access Token instead of your account password, or sign in with `gh auth login`.
- **Build fails:** Check the **Actions** tab for the error details.

## Technologies Used

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- Vanilla JavaScript (IntersectionObserver, DOM APIs)

## Author

**Tharun K M**
AI & Data Science student, Krishnagiri, Tamil Nadu
Email: kmttharun@gmail.com

