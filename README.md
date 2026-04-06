# Fitness Tracker Dashboard

A modern dark-mode dashboard web app built with React + Tailwind CSS to track activity calories using the MET formula.

## Features

- Responsive and clean dashboard layout
- Input form for weight, exercise type, and duration
- MET-based calorie calculation
- Activity analysis message
- Total calories, last activity, and entry count cards
- localStorage persistence
- Bar chart of last 5 activities (Recharts)
- Daily progress bar (goal: 500 kcal)
- Smooth transitions and card animations

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open the app (usually):

```
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deploy on Vercel

### Option 1: Vercel Dashboard

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com/).
3. Click **Add New Project** and import your repository.
4. Keep default settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**.

### Option 2: Vercel CLI

1. Install Vercel CLI globally:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

3. For production deployment:

```bash
vercel --prod
```
