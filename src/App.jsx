import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Experience } from "./components/Experience";
import { Book } from "./components/Book";

import { Navbar } from "./components/Navbar";
import AboutAuthor from "./components/AboutAuthor";
import BookDesc from "./components/BookDesc";
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Contact from "./components/Contact";

const AnimatedSection = ({ children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={control}
      className=" px-10"
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="bg-main-grad">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <AnimatedSection>
                <AboutAuthor />
              </AnimatedSection>
            }
          />
          <Route
            path="/books"
            element={
              <>
                {/* First Section */}
                <div className="section h-screen flex flex-col md:flex-row items-center md:items-stretch px-4 md:px-10">
                  {/* Left Component (Book Display) */}
                  <div className="md:w-1/2 w-full flex justify-center items-center">
                    <Canvas className="w-full h-96 md:h-full">
                      <Suspense fallback={null}>
                        <Experience BookComponent={Book} />
                      </Suspense>
                    </Canvas>
                  </div>

                  {/* Right Component (Book Description) */}
                  <div className="md:w-1/2 w-full flex justify-center items-center text-center md:text-left">
                    <AnimatedSection>
                      <BookDesc />
                    </AnimatedSection>
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <AnimatedSection>
                <Contact />
              </AnimatedSection>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
