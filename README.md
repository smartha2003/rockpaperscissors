Rock-Paper-Scissors game 🎮

# 🚀 Deploying Full-Stack App (Backend: Railway, Frontend: Vercel)

## 📦 Backend Deployment with Railway

### 1. **Prepare Your Backend Repo**
- Tech stack: Node.js + Express  
- Make sure your backend has:
  - `package.json`
  - `index.js` or `app.js`
  - A working route like `/play`

### 2. **Push to GitHub**
```bash
git init
git remote add origin https://github.com/your-username/your-backend-repo.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 3. **Deploy to Railway**
- Go to [https://railway.app](https://railway.app)
- Click **"New Project"** → **"Deploy from GitHub"**
- Select your backend repo
- Railway auto-installs dependencies and builds the project
- Once deployed, grab the **Public URL**

> ✅ Your backend is now live (e.g., `https://your-backend.up.railway.app/play`)

---

## 🌐 Frontend Deployment with Vercel

### 1. **Prepare Your Frontend Repo**
- Tech stack: React / Next.js  
- In your frontend, make sure you fetch from your Railway backend:
  ```ts
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/play?move=rock`);
  ```

### 2. **Push to GitHub**
```bash
git init
git remote add origin https://github.com/your-username/your-frontend-repo.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 3. **Deploy to Vercel**
- Go to [https://vercel.com](https://vercel.com)
- Click **"Add New Project"** → import your frontend repo
- Set the following **Environment Variable** in Vercel:
  - `NEXT_PUBLIC_API_URL=https://your-backend.up.railway.app`

### 4. **Deploy**
- Click **Deploy** and wait for build to finish
- Done! Your frontend is live on `https://your-project.vercel.app`

---

## ✅ All Set!
Your full-stack app is now live and connected:
- **Frontend:** Vercel  
- **Backend:** Railway  
- **Communication:** via REST API calls
