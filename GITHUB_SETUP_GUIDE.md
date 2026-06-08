# 🚀 How to Launch ARDH Technologies on GitHub Pages

## What You'll Get
A free, live website at: `https://YOUR-USERNAME.github.io/ardh-technologies/`

---

## Step 1 — Create a GitHub Account
1. Go to **https://github.com**
2. Click **Sign up** → enter your email, password, username
3. Verify your email

---

## Step 2 — Create a New Repository
1. After logging in, click the **+** button (top-right) → **New repository**
2. Name it: `ardh-technologies`
3. Set it to **Public** (required for free GitHub Pages)
4. Do NOT tick "Add README"
5. Click **Create repository**

---

## Step 3 — Upload Your Files
GitHub has a drag-and-drop upload feature — no coding needed!

1. On your new repository page, click **uploading an existing file** (or "Add file → Upload files")
2. Open your `ardh-technologies` folder on your computer
3. **Drag ALL files and folders** into the GitHub upload box:
   - `index.html`
   - `style.css`
   - `script.js`
   - `images/` folder (with `founder.jpg`)
   - `achievements/` folder (with `award.jpg` and `book_release.jpg`)
4. Scroll down → add a commit message like `Initial website launch`
5. Click **Commit changes**

---

## Step 4 — Enable GitHub Pages
1. Go to your repository → click **Settings** (top tab)
2. In the left sidebar, click **Pages**
3. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 1–2 minutes
6. GitHub will show you your live URL: `https://YOUR-USERNAME.github.io/ardh-technologies/`

---

## Step 5 — Add a Custom Domain (Optional)
If you own a domain like `ardhtech.com`:
1. In Settings → Pages → Custom domain, enter your domain
2. At your domain registrar, add a CNAME record pointing to `YOUR-USERNAME.github.io`

---

## 📸 How to Add a New Achievement Later

### 1. Prepare your photo
- Save your photo as a `.jpg` or `.png` file
- Name it descriptively: e.g., `conference_2026.jpg`

### 2. Upload to GitHub
1. Go to your repo → click on the `achievements` folder
2. Click **Add file → Upload files**
3. Upload your new photo → Commit

### 3. Edit index.html on GitHub
1. Click on `index.html` in your repo
2. Click the **pencil ✏️ icon** (Edit this file)
3. Find this comment: `<!-- Slide 2: Book Release -->`
4. Copy the entire slide block below it (from `<div class="slide"` to the closing `</div>`)
5. Paste it just before the `<!-- Placeholder Slide: Add More -->` comment
6. Update the content:
   ```html
   <div class="slide" data-index="2">
     <div class="slide-inner">
       <div class="slide-img-wrap">
         <img src="achievements/YOUR-PHOTO-NAME.jpg" alt="Your Achievement" class="slide-img">
       </div>
       <div class="slide-content">
         <span class="slide-badge">🏆 Your Badge</span>
         <h3 class="slide-title">Your Achievement Title</h3>
         <p class="slide-desc">Describe your achievement here.</p>
         <span class="slide-year">2026</span>
       </div>
     </div>
   </div>
   ```
7. Also update the data-index numbers for the "Add More" slide (increase by 1)
8. Add a new dot button in the slideshow controls:
   ```html
   <button class="dot" data-slide="2"></button>
   ```
9. Click **Commit changes** — your site updates automatically!

---

## 📧 Connect the Contact Form (Optional)
To receive real emails from the form:
1. Go to **https://formspree.io** → sign up free
2. Create a new form → get your form endpoint URL
3. In `index.html`, change:
   ```html
   <form class="contact-form" id="contactForm">
   ```
   to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR-ID" method="POST">
   ```
4. In `script.js`, you can remove the fake timeout and let the form submit normally.

---

## Quick Reference: Your File Structure
```
ardh-technologies/
├── index.html          ← Main page (edit this to update content)
├── style.css           ← All styling (colors, fonts, layout)
├── script.js           ← Slideshow, form, animations
├── images/
│   └── founder.jpg     ← Your profile photo
└── achievements/
    ├── award.jpg       ← Best Paper Award photo
    ├── book_release.jpg ← Book launch photo
    └── (add more here!)
```

---

*Built for ARDH Technologies · Anuraj V · 2026*
