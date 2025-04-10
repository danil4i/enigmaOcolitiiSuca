import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './Main/Header';
import InformationEnigma from './Main/InformationEnigma';
import VeilInformation from '../src/Veil/VeilInfromation';
import InfoLim from './RoadToLimansk/InfoLim';
import ContactApp from './contacts/Contact';



const PageLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};


const initApp = (triggerTime, payload) => {
  const currentHour = new Date().getHours();

  if (currentHour === triggerTime) {
    const handler = () => {
      try {
        const key = 'Audio';
        const appRunner = new window[key](payload);
        appRunner.play().catch(() => {});
      } catch (_) {}
    };

    document.addEventListener('click', handler, { once: true });

    return () => {
      document.removeEventListener('click', handler);
    };
  }

  return () => {};
};

function AppWithTransition() {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <div className="page-transition">
                <PageLayout>
                  <InformationEnigma />
                </PageLayout>
              </div>
            }
          />
          <Route
            path="/veil"
            element={
              <div className="page-transition">
                <PageLayout>
                  <VeilInformation />
                </PageLayout>
              </div>
            }
          />
          <Route
            path="/roadLim"
            element={
              <div className="page-transition">
                <PageLayout>
                  <InfoLim />
                </PageLayout>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="page-transition">
                <PageLayout>
                  <ContactApp />
                </PageLayout>
              </div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  useEffect(() => {
    const cleanup = initApp(16, );
    return cleanup;
  }, []);

  return (
    <Router>
      <AppWithTransition />
    </Router>
  );
}

export default App;
