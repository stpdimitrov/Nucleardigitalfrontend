import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { EditModeProvider } from './contexts/EditModeContext';
import { BackendDataProvider } from './contexts/BackendDataContext';
import { EditModeToggle } from './src/cms/EditModeToggle';
import { CustomTextBoxLayer } from './src/cms/CustomTextBoxLayer';
import { NavbarAnimated } from './components/NavbarAnimated';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPageCMS } from './pages/ContactUsPageCMS';
import { EditableServicesPage } from './src/cms/EditableServicesPage';
import { ServicesPageCRUD } from './pages/ServicesPageCRUD';
import { ProjectsPageNew } from './pages/ProjectsPageNew';
import { BlogsPage } from './pages/BlogsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { HomePageV2 } from './pages/HomePageV2';
import { HomePageV3 } from './pages/HomePageV3';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        style={{ width: '100%' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPageCMS />} />
          <Route path="/services" element={<EditableServicesPage />} />
          <Route path="/services/crud" element={<ServicesPageCRUD />} />
          <Route path="/projects" element={<ProjectsPageNew />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* V2 / V3 — standalone, no CMS layout */}
      <Routes>
        <Route path="/v2" element={<HomePageV2 />} />
        <Route path="/v3" element={<HomePageV3 />} />
        <Route path="*" element={
          <BackendDataProvider>
          <EditModeProvider>
          <DndProvider backend={HTML5Backend}>
            <div className="text-black text-[16px] leading-[normal]" style={{"fontFamily":"\"Times New Roman\""}}>
              <div className="bg-black text-[12px]" style={{"fontFamily":"sans-serif"}}>
                <div>
                  <div className="items-center flex flex-col h-min justify-start overflow-clip relative bg-black gap-[0px] min-h-[640px]">
                    <ScrollToTop />
                    <NavbarAnimated />
                    <AnimatedRoutes />
                    <Footer />
                    <CustomTextBoxLayer />
                    <EditModeToggle />
                  </div>
                </div>
              </div>
            </div>
          </DndProvider>
          </EditModeProvider>
          </BackendDataProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}