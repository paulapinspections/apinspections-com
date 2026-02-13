# Git Setup Instructions

## Initialize Git Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Home Inspector Template v1.0"

# Create main branch (if not already main)
git branch -M main

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/homeinspector-template.git

# Push to GitHub
git push -u origin main
```

## Create Client Branch

```bash
# Create and switch to client branch
git checkout -b client/client-name

# Make your customizations
# Edit src/site/config.ts
# Replace images in public/brand/

# Commit changes
git add .
git commit -m "Customize for [Client Name]"

# Push client branch
git push -u origin client/client-name
```

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the branch (main or client/client-name)
5. Configure environment variables:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `SITE_URL`
6. Click "Deploy"

## Multiple Client Workflow

### Option 1: Branches (Recommended for shared codebase)
```bash
# Client 1
git checkout -b client/acme-inspections
# Customize and deploy

# Client 2 (start from main)
git checkout main
git checkout -b client/beta-inspections
# Customize and deploy
```

### Option 2: Separate Repos (Independent deployments)
```bash
# Clone template for new client
git clone https://github.com/yourusername/homeinspector-template.git client-acme
cd client-acme

# Create new repo
gh repo create client-acme-inspections --private

# Change remote
git remote set-url origin https://github.com/yourusername/client-acme-inspections.git

# Push
git push -u origin main
```

## Updating Template

To pull template updates into a client branch:

```bash
# On client branch
git checkout client/client-name

# Fetch latest from main
git fetch origin main

# Merge (carefully - may have conflicts)
git merge origin/main

# Or cherry-pick specific commits
git cherry-pick <commit-hash>
```

## Common Commands

```bash
# Check status
git status

# See what changed
git diff

# View commit history
git log --oneline

# Discard changes
git checkout -- filename

# Create tag for release
git tag -a v1.0.0 -m "Release 1.0.0"
git push origin v1.0.0
```

## .gitignore Already Configured

The following are already excluded:
- `node_modules/`
- `.next/`
- `.env.local` and other .env files
- Build outputs
- OS files

**Note**: Your `.env.example` IS tracked (template), but `.env.local` is NOT (secrets).
