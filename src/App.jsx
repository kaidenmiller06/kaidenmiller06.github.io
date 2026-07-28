import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience';
import Footer from './components/sections/Footer';
import Portfolio from './components/sections/Portfolio';

/**
 * The main application component.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Projects />
              <Experience />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Portfolio />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;