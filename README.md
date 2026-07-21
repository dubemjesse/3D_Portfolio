# 3D Portfolio

A modern, interactive 3D portfolio website built with React, Three.js, and Vite.

## Author
Jesse Odoh

## Features
- Interactive 3D hero section with animated room scene
- Smooth scrolling with parallax effects
- Responsive design for all screen sizes
- Animated counter section
- Project showcase with glow cards
- Experience timeline
- Tech stack display with 3D models
- Testimonials carousel
- Contact form with 3D computer model
- Footer with social links

## Tech Stack
- **Frontend Framework:** React 19
- **3D Library:** Three.js with React Three Fiber
- **Animations:** GSAP
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons/Assets:** Custom SVGs and 3D GLB models

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dubemjesse/3D_Portfolio.git
   cd 3D_Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```
The production-ready files will be in the `dist` directory.

## Project Structure
```
3D_Portfolio/
├── public/
│   ├── images/        # Images and textures
│   ├── models/        # 3D GLB models
│   └── vite.svg
├── src/
│   ├── components/    # Reusable components
│   ├── constants/     # Project constants (texts, data)
│   ├── sections/      # Main page sections
│   ├── App.jsx        # Root component
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── .env               # Environment variables (don't commit!)
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## License
MIT
