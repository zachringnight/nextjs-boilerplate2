"use client";

import { useState } from "react";

// Configuration - Mellisa can update these URLs
const CONFIG = {
  // Demo Reel - Add YouTube or Vimeo URL here
  demoReelUrl: "", // e.g., "https://www.youtube.com/embed/VIDEO_ID"

  // Social Media Links
  instagram: "https://www.instagram.com/mellisagoodwin/",
  imdb: "https://www.imdb.com/name/nm8475889/",
  backstage: "https://www.backstage.com/u/mellisa-goodwin/",

  // Contact Emails
  representationEmail: "contact@mellisagoodwin.com",
  pressEmail: "press@mellisagoodwin.com",
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeReel, setActiveReel] = useState<string | null>(null);

  const openVideoModal = (reelType?: string) => {
    setActiveReel(reelType || "main");
    setVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2824]">
      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#2C2824]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {CONFIG.demoReelUrl ? (
              <iframe
                src={CONFIG.demoReelUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Demo Reel"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-center p-8 bg-gradient-to-br from-[#FAF8F5] to-[#F5F0E8]">
                <div>
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4A574] to-[#B8956A] flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-4 text-[#2C2824]">Demo Reel Coming Soon</h3>
                  <p className="text-[#6B635B] mb-6 max-w-md mx-auto">
                    {activeReel === "main"
                      ? "The full demo reel is being updated with recent work."
                      : `The ${activeReel} reel is being prepared.`}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href={CONFIG.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-sans font-semibold rounded-full hover:opacity-90 transition-opacity"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Watch on Instagram
                    </a>
                    <a
                      href={CONFIG.imdb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4A574] text-white font-sans font-semibold rounded-full hover:bg-[#B8956A] transition-colors"
                    >
                      View IMDb
                    </a>
                  </div>
                </div>
              </div>
            )}
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close video"
            >
              <svg className="w-5 h-5 text-[#2C2824]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8CDB5]/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="font-serif text-2xl tracking-wide text-[#2C2824]">
              Mellisa <span className="text-[#D4A574]">🍯</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wider">
              <a href="#about" className="text-[#6B635B] hover:text-[#D4A574] transition-colors duration-300">About</a>
              <a href="#reel" className="text-[#6B635B] hover:text-[#D4A574] transition-colors duration-300">Reel</a>
              <a href="#credits" className="text-[#6B635B] hover:text-[#D4A574] transition-colors duration-300">Credits</a>
              <a href="#skills" className="text-[#6B635B] hover:text-[#D4A574] transition-colors duration-300">Skills</a>
              <a href="#contact" className="text-[#6B635B] hover:text-[#D4A574] transition-colors duration-300">Contact</a>
              <a
                href={CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#6B635B] hover:text-[#D4A574] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#6B635B] hover:text-[#D4A574] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#E8CDB5]/30 pt-4">
              <div className="flex flex-col gap-4 font-sans text-sm tracking-wider">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[#6B635B] hover:text-[#D4A574]">About</a>
                <a href="#reel" onClick={() => setMobileMenuOpen(false)} className="text-[#6B635B] hover:text-[#D4A574]">Reel</a>
                <a href="#credits" onClick={() => setMobileMenuOpen(false)} className="text-[#6B635B] hover:text-[#D4A574]">Credits</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-[#6B635B] hover:text-[#D4A574]">Skills</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#6B635B] hover:text-[#D4A574]">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Warm decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#E8CDB5]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4A574]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5F0E8] rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-6 pt-20 max-w-4xl mx-auto">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-[#D4A574] mb-6">
            Actress • Singer • Storyteller
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium mb-6 tracking-tight leading-[0.9]">
            <span className="block text-[#2C2824]">Mellisa</span>
            <span className="block text-[#D4A574]">Goodwin</span>
          </h1>
          <p className="font-sans text-lg text-[#6B635B] mb-10 max-w-xl mx-auto leading-relaxed">
            Bringing warmth and authenticity to every character.
            Los Angeles based, ready for your next project.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => openVideoModal()}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4A574] to-[#B8956A] text-white font-sans font-medium rounded-full hover:shadow-lg hover:shadow-[#D4A574]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Reel
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#D4A574] text-[#D4A574] font-sans font-medium rounded-full hover:bg-[#D4A574] hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Quick Info Pills */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#6B635B] shadow-sm">SAG-AFTRA</span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#6B635B] shadow-sm">Los Angeles</span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#6B635B] shadow-sm">Film & TV</span>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <a href="#about" className="text-[#D4A574]/50 hover:text-[#D4A574] transition-colors">
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#F5F0E8] to-[#E8CDB5] rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C9A86C] flex items-center justify-center shadow-lg">
                      <span className="font-serif text-5xl font-medium text-white">MG</span>
                    </div>
                    <a
                      href={CONFIG.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#D4A574] hover:text-[#B8956A] font-sans text-sm transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      @mellisagoodwin
                    </a>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A574]/20 rounded-full blur-2xl"></div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-[#2C2824]">
                Hello, I'm <span className="text-[#D4A574]">Mellisa</span> 🍯
              </h2>

              <div className="font-sans text-[#6B635B] space-y-5 leading-relaxed">
                <p className="text-lg">
                  I'm a multi-talented actress, singer, and performer based in sunny Los Angeles.
                  My journey in the arts began at a performing arts school when I was just five years old.
                </p>
                <p>
                  You might recognize me as <span className="text-[#D4A574] font-medium">Counselor Janet Mayer</span> from
                  Law & Order: SVU, or as <span className="text-[#D4A574] font-medium">Lisa</span>, the rival newscaster
                  in Wetlands. Most recently, I played <span className="text-[#D4A574] font-medium">Mikaela</span> in the
                  horror short film We Never Sleep.
                </p>
                <p>
                  Beyond acting, I'm also a singer-songwriter — I've written music for Netflix productions
                  and love sharing my musical journey on Instagram.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <p className="font-serif text-3xl text-[#D4A574] mb-1">5'6"</p>
                  <p className="text-sm text-[#9B938A]">Height</p>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <p className="font-serif text-3xl text-[#D4A574] mb-1">25-35</p>
                  <p className="text-sm text-[#9B938A]">Age Range</p>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <p className="font-serif text-3xl text-[#D4A574] mb-1">Alto</p>
                  <p className="text-sm text-[#9B938A]">Vocal Range</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Reel Section */}
      <section id="reel" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-[#2C2824]">
              Demo Reel
            </h2>
            <p className="font-sans text-[#6B635B]">
              A glimpse into my work across film and television
            </p>
          </div>

          {/* Main Video Player */}
          <div
            className="relative aspect-video bg-gradient-to-br from-[#F5F0E8] to-[#E8CDB5] rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
            onClick={() => openVideoModal()}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-[#D4A574] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="font-sans text-[#6B635B]">Click to play</p>
              </div>
            </div>
          </div>

          {/* Reel Categories */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { title: "Dramatic", duration: "1:45" },
              { title: "Comedy", duration: "1:20" },
              { title: "Commercial", duration: "0:60" },
            ].map((reel) => (
              <button
                key={reel.title}
                onClick={() => openVideoModal(reel.title.toLowerCase())}
                className="p-5 bg-[#FAF8F5] rounded-2xl text-left hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-medium text-[#2C2824] group-hover:text-[#D4A574] transition-colors">{reel.title}</h4>
                    <p className="text-sm text-[#9B938A]">{reel.duration}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[#D4A574]/10 transition-colors">
                    <svg className="w-4 h-4 text-[#D4A574]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-12 text-center">
            <a
              href={CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-sans font-medium rounded-full hover:opacity-90 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              More clips on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section id="credits" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-[#2C2824]">
              Credits
            </h2>
            <p className="font-sans text-[#6B635B]">
              Selected work in film, television, and music
            </p>
          </div>

          <div className="space-y-4">
            <CreditCard
              title="Law & Order: SVU"
              role="Counselor Janet Mayer"
              type="Co-Star"
              year="2021"
              network="NBC"
            />
            <CreditCard
              title="Law & Order"
              role="Attorney"
              type="Guest Star"
              year="2020"
              network="NBC"
            />
            <CreditCard
              title="We Never Sleep"
              role="Mikaela"
              type="Lead"
              year="2023"
              network="Short Film"
            />
            <CreditCard
              title="Wetlands"
              role="Lisa"
              type="Series Regular"
              year="2017"
              network="Streaming"
            />
            <CreditCard
              title="Netflix Production"
              role="Singer/Songwriter"
              type="Original Music"
              year="2023"
              network="Netflix"
            />
          </div>

          <div className="mt-10 text-center">
            <a
              href={CONFIG.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D4A574] hover:text-[#B8956A] font-sans font-medium transition-colors"
            >
              View full credits on IMDb
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-[#2C2824]">
              Skills & Training
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Special Skills */}
            <div>
              <h3 className="font-sans text-sm tracking-wider uppercase text-[#D4A574] mb-6">Special Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Singing (Alto/Mezzo)",
                  "Songwriting",
                  "Legal/Courtroom",
                  "News Anchor",
                  "Teleprompter",
                  "Hosting",
                  "Stage Combat",
                  "Stunts",
                  "Improvisation",
                  "Commercial",
                  "Dance",
                  "Swimming",
                  "Yoga",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#FAF8F5] text-[#6B635B] rounded-full text-sm hover:bg-[#E8CDB5]/50 hover:text-[#2C2824] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Dialects */}
            <div>
              <h3 className="font-sans text-sm tracking-wider uppercase text-[#D4A574] mb-6">Dialects & Languages</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Standard American",
                  "Southern American",
                  "British RP",
                  "Spanish (Conversational)",
                ].map((dialect) => (
                  <span
                    key={dialect}
                    className="px-4 py-2 bg-[#FAF8F5] text-[#6B635B] rounded-full text-sm hover:bg-[#E8CDB5]/50 hover:text-[#2C2824] transition-colors cursor-default"
                  >
                    {dialect}
                  </span>
                ))}
              </div>

              <h3 className="font-sans text-sm tracking-wider uppercase text-[#D4A574] mb-6 mt-10">Physical</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF8F5] rounded-xl">
                  <p className="text-sm text-[#9B938A]">Hair</p>
                  <p className="font-medium text-[#2C2824]">Blonde</p>
                </div>
                <div className="p-4 bg-[#FAF8F5] rounded-xl">
                  <p className="text-sm text-[#9B938A]">Eyes</p>
                  <p className="font-medium text-[#2C2824]">Blue</p>
                </div>
                <div className="p-4 bg-[#FAF8F5] rounded-xl">
                  <p className="text-sm text-[#9B938A]">Height</p>
                  <p className="font-medium text-[#2C2824]">5'6"</p>
                </div>
                <div className="p-4 bg-[#FAF8F5] rounded-xl">
                  <p className="text-sm text-[#9B938A]">Ethnicity</p>
                  <p className="font-medium text-[#2C2824]">Caucasian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-[#2C2824]">
            Let's Work Together
          </h2>
          <p className="font-sans text-[#6B635B] mb-12 max-w-xl mx-auto">
            Available for film, television, commercial, and voiceover work.
            I'd love to hear about your project.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href={`mailto:${CONFIG.representationEmail}`}
              className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D4A574]/10 flex items-center justify-center group-hover:bg-[#D4A574]/20 transition-colors">
                <svg className="w-6 h-6 text-[#D4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2 text-[#2C2824]">Representation</h3>
              <p className="text-sm text-[#9B938A]">For booking inquiries</p>
            </a>

            <a
              href={`mailto:${CONFIG.pressEmail}`}
              className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D4A574]/10 flex items-center justify-center group-hover:bg-[#D4A574]/20 transition-colors">
                <svg className="w-6 h-6 text-[#D4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2 text-[#2C2824]">General</h3>
              <p className="text-sm text-[#9B938A]">Press & media inquiries</p>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href={CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-[#D4A574]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={CONFIG.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              aria-label="IMDb"
            >
              <span className="text-[#D4A574] font-bold">IMDb</span>
            </a>
            <a
              href={CONFIG.backstage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              aria-label="Backstage"
            >
              <span className="text-[#D4A574] font-bold text-sm">BS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[#E8CDB5]/30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-serif text-xl text-[#2C2824]">
            Mellisa Goodwin <span className="text-[#D4A574]">🍯</span>
          </p>
          <p className="font-sans text-sm text-[#9B938A]">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

// Credit Card Component
function CreditCard({
  title,
  role,
  type,
  year,
  network,
}: {
  title: string;
  role: string;
  type: string;
  year: string;
  network: string;
}) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-serif text-xl text-[#2C2824] group-hover:text-[#D4A574] transition-colors">
            {title}
          </h4>
          <p className="text-[#6B635B]">{role}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 text-xs bg-[#D4A574]/10 text-[#D4A574] rounded-full font-medium">
            {type}
          </span>
          <span className="px-3 py-1 text-xs bg-[#F5F0E8] text-[#6B635B] rounded-full">
            {network}
          </span>
          <span className="text-sm font-medium text-[#9B938A]">{year}</span>
        </div>
      </div>
    </div>
  );
}
