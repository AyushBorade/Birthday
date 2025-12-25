# 🤍 Birthday - Minimal Birthday Webpage

A minimal, elegant birthday webpage built with React and React Bits components.

## ✨ Features

- **Minimal Design**: Clean black/white aesthetic with subtle accents
- **Interactive Background**: DotGrid from React Bits
- **TextPressure Effect**: Animated birthday text
- **ClickSpark Cursor**: Interactive cursor effects
- **Magic Bento Grid**: Beautiful photo layout
- **Flip Card Letter**: Interactive love letter

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Install React Bits components**:

   ```bash
   npx shadcn@latest add @react-bits/TextPressure-JS-CSS
   npx shadcn@latest add @react-bits/ClickSpark-JS-CSS
   npx shadcn@latest add @react-bits/DotGrid-JS-CSS
   npx shadcn@latest add @react-bits/MagicBento-JS-CSS
   ```

3. **Add your photos** to `public/assets/`:

   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`
   - `photo5.jpg`

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open in browser**: Visit `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx    # Birthday title with TextPressure
│   ├── PhotoBento.jsx     # Photo grid with MagicBento
│   ├── LetterCard.jsx     # Flip card love letter
│   └── Footer.jsx         # Minimal footer
├── lib/
│   └── utils.js           # Utility functions (cn)
├── App.jsx                # Main app with ClickSpark & DotGrid
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎨 Enabling React Bits Components

After installing the React Bits components, update the imports in your files:

### App.jsx

```jsx
import ClickSpark from "./components/ui/ClickSpark";
import DotGrid from "./components/ui/DotGrid";

// Wrap content with ClickSpark
// Add DotGrid as background
```

### HeroSection.jsx

```jsx
import TextPressure from "./components/ui/TextPressure";

// Replace the h1 with TextPressure component
```

### PhotoBento.jsx

```jsx
import MagicBento from "./components/ui/MagicBento";

// Wrap the photo grid with MagicBento
```

## 📸 Adding Photos

Place your photos in the `public/assets/` folder:

- `photo1.jpg` - Main large photo (featured)
- `photo2.jpg` - Secondary photo
- `photo3.jpg` - Secondary photo
- `photo4.jpg` - Tall photo
- `photo5.jpg` - Wide photo

**Recommended**: Square or portrait photos, at least 800px resolution.

## ✏️ Customizing Content

### Birthday Title

Edit `src/components/HeroSection.jsx` to change the main title and subtitle.

### Love Letter

Edit `src/components/LetterCard.jsx` to personalize the letter content.

### Colors

Edit `tailwind.config.js` to modify the color palette:

```js
colors: {
  primary: { ... },
  accent: {
    light: "#f8e8ee",
    DEFAULT: "#e8b4b8",
    dark: "#c9a0a0",
  },
}
```

## 🛠 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Bits** - Interactive components
  - TextPressure
  - ClickSpark
  - DotGrid
  - MagicBento

## 📱 Responsive

The webpage is fully responsive and works on all devices.

---

Made with ♡