# itsthebeard.com — Placeholder Site

Coming soon / launch holding page for **It's The Beard** — premium merch and grooming goods for the bearded brotherhood.

Sister brand to [Original Beard King](https://www.originalbeardking.com).

---

## Files

```
index.html    ← The entire site (single self-contained file)
README.md     ← This file
```

---

## Deploying to GitHub Pages (Step-by-Step)

### Step 1 — Create a new GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name the repo: `itsthebeard` (or `itsthebeard.com`)
3. Set it to **Public**
4. **Do not** check "Add a README file" (you already have one)
5. Click **Create repository**

---

### Step 2 — Push your files to GitHub

Open Terminal in the folder containing your `index.html` and `README.md`, then run:

```bash
git init
git add .
git commit -m "Initial commit - coming soon page"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/itsthebeard.git
git push -u origin main
```

> Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

---

### Step 3 — Enable GitHub Pages

1. In your repo on GitHub, click **Settings** (top nav)
2. In the left sidebar, click **Pages**
3. Under **Build and deployment → Source**, select **Deploy from a branch**
4. Under **Branch**, select `main` and folder `/ (root)`
5. Click **Save**

After ~60 seconds, your site will be live at:
`https://YOUR_GITHUB_USERNAME.github.io/itsthebeard`

---

### Step 4 — Connect your custom domain (itsthebeard.com)

#### In GitHub:
1. Still in **Settings → Pages**, scroll to **Custom domain**
2. Type `itsthebeard.com` and click **Save**
3. GitHub will create a `CNAME` file in your repo automatically

#### In your DNS registrar (wherever you registered itsthebeard.com):
Add the following **A records** pointing to GitHub's servers:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

And a **CNAME record** for `www`:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | YOUR_GITHUB_USERNAME.github.io |

> DNS changes can take 10 minutes to 48 hours to propagate.

#### Enable HTTPS:
Once DNS propagates, go back to **Settings → Pages** and check **Enforce HTTPS**.

---

## Setting Up the Email Capture Form

The site uses Google Forms (same approach as originalbeardking.com):

1. Create a new Google Form at [forms.google.com](https://forms.google.com)
   - Add a single "Email address" question
   - Link it to a Google Sheet to collect signups

2. Click the three-dot menu → **Get pre-filled link**
   - Fill in a dummy email, click **Get link**, and copy it
   - Your form ID looks like: `1FAIpQLSe...` in the URL

3. In `index.html`, find and replace:
   ```
   YOUR_FORM_ID_HERE   →   your actual form ID
   YOUR_FIELD_ID       →   your actual entry ID (from the pre-filled link URL)
   ```

   The form action URL format is:
   ```
   https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
   ```
   And the email field name is `entry.XXXXXXXXX` (the number from the pre-filled link).

---

## Making Updates

After any edits to `index.html`:

```bash
git add .
git commit -m "Update copy / styling"
git push
```

GitHub Pages will automatically redeploy within about 60 seconds.

---

## Brand Notes

- **Fonts:** Cinzel, Crimson Text, Oswald (matching originalbeardking.com family)
- **Color palette:** Matches Original Beard King — ink backgrounds, amber/copper accents, parchment tones
- **Sister site link:** Points to `https://www.originalbeardking.com` — update if the URL ever changes
