# Personal Website

This is a personal website built with HTML, CSS, JavaScript, and Vite. It is already configured for deployment to GitHub Pages.

## Local Development

Install dependencies first:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

The production output will be generated in `dist/`.

## Deploying to GitHub Pages

This project already includes the GitHub Pages deployment files:

- `.github/workflows/deploy.yml`
- `public/.nojekyll`

Once the project is pushed to a GitHub repository, it can be deployed automatically.

### 1. Initialize the Git Repository

If this folder is not already a Git repository, run the following in the project root:

```bash
git init
git add .
git commit -m "Initial personal website"
```

### 2. Create a GitHub Repository

The repository name can be either:

- `<your-username>.github.io`
- Any regular repository name, for example `personal-website`

This project uses relative asset paths, so both options work correctly.

### 3. Connect the Remote Repository and Push

Replace the URL below with your own repository address:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 4. Enable GitHub Pages

In your GitHub repository:

1. Open `Settings`
2. Open `Pages`
3. Under `Build and deployment`, choose `GitHub Actions`

After that, every push to `main` or `master` will automatically trigger a new deployment.

## Project Structure

- `index.html`: Home page
- `cv.html`: CV page
- `blog.html`: Blog listing page
- `posts/`: Individual blog post pages
- `public/`: Static assets such as images, PDFs, JSON, and HTML components
- `js/`: Frontend JavaScript
- `css/`: Stylesheets

## Notes

- The site is configured to use relative paths for GitHub Pages, so it does not depend on a fixed repository name.
- `dist/` contains generated build output and should not be edited manually.
