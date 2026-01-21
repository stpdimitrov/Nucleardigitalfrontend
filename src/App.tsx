'use client';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarAnimated } from './components/NavbarAnimated';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogsPage } from './pages/BlogsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-black text-[16px] leading-[normal]" style={{"fontFamily":"\"Times New Roman\""}}>
        <div className="bg-black text-[12px]" style={{"fontFamily":"sans-serif"}}>
          <div>
            <div className="items-center flex flex-col h-min justify-start overflow-clip relative bg-black gap-[0px] min-h-[640px]">
              <NavbarAnimated />
              
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}