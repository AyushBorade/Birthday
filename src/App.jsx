import React from "react";

// Import components
import HeroSection from "./components/HeroSection";
import PhotoBento from "./components/PhotoBento";
import LetterCard from "./components/LetterCard";
import Footer from "./components/Footer";

/**
 * App Component
 * Minimal birthday webpage with React Bits component integrations
 *
 * To enable React Bits components, run these CLI commands:
 * 1. npx shadcn@latest add @react-bits/TextPressure-JS-CSS
 * 2. npx shadcn@latest add @react-bits/ClickSpark-JS-CSS
 * 3. npx shadcn@latest add @react-bits/DotGrid-JS-CSS
 * 4. npx shadcn@latest add @react-bits/MagicBento-JS-CSS
 *
 * Then uncomment the imports below and wrap components accordingly
 */

// Uncomment after installing React Bits components:
// import ClickSpark from "./components/ui/ClickSpark";
// import DotGrid from "./components/ui/DotGrid";

const App = () => {
  return (
    <>
      {/*
        DotGrid Background - Uncomment after installing:
        <div className="dot-grid-bg">
          <DotGrid
            dotColor="#e5e5e5"
            dotSize={1.5}
            gap={25}
            interactive={true}
          />
        </div>
      */}

      {/*
        ClickSpark Cursor - Wrap the entire content after installing:
        <ClickSpark sparkColor="#e8b4b8" sparkSize={10} sparkRadius={15}>
          ...content...
        </ClickSpark>
      */}

      <div className="content-layer min-h-screen bg-neutral-50">
        {/* Hero Section with Birthday Title */}
        <HeroSection />

        {/* Photo Bento Grid */}
        <PhotoBento />

        {/* Love Letter Flip Card */}
        <LetterCard />

        {/* Minimal Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;
