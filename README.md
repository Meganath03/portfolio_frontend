# Portfolio Frontend

This is the frontend application for the personal portfolio website.

## Features

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Radix UI components
- Framer Motion for animations
- Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000
```

## Project Structure

```
src/
├── components/     # React components
│   ├── portfolio/  # Portfolio-specific components
│   └── ui/         # Reusable UI components
├── contexts/       # React contexts
├── hooks/          # Custom React hooks
├── lib/            # Utility libraries
├── pages/          # Page components
└── main.tsx        # Application entry point
```

## Deployment

This frontend can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

Make sure to set the `VITE_API_URL` environment variable to point to your backend API. 