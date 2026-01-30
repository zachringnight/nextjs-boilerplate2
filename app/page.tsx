"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

// Configuration
const CONFIG = {
  demoReelUrl: "",
  instagram: "https://www.instagram.com/mellisagoodwin/",
  imdb: "https://www.imdb.com/name/nm8475889/",
  backstage: "https://www.backstage.com/u/mellisa-goodwin/",
  representationEmail: "contact@mellisagoodwin.com",
  pressEmail: "press@mellisagoodwin.com",
};

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2824] overflow-x-hidden">
      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {CONFIG.demoReelUrl ? (
                <iframe src={CONFIG.demoReelUrl} className="w-full h-full" allowFullScreen title="Demo Reel" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C9A86C] flex items-center justify-center"
                    >
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                    <p className="text-white/80 text-lg mb-6">Demo Reel Coming Soon</p>
                    <a
                      href={CONFIG.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
                    >
                      Watch clips on Instagram
                    </a>
                  </div>
                </div>
              )}
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/70 backdrop-blur-xl rounded-full shadow-lg shadow-black/5 border border-white/50"
      >
        <div className="flex items-center gap-6">
          <a href="#" className="font-serif text-lg text-[#2C2824]">
            MG <span className="text-[#D4A574]">🍯</span>
          </a>
          <div className="hidden md:flex items-center gap-4 text-sm">
            {["About", "Work", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-1.5 text-[#6B635B] hover:text-[#D4A574] hover:bg-[#D4A574]/10 rounded-full transition-all"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href={CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
          </a>
        </div>
      </motion.nav>

      {/* HERO SECTION - Immersive */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          >
            <div className="absolute inset-0 bg-gradient-conic from-[#D4A574]/20 via-transparent to-[#D4A574]/20 rounded-full blur-3xl" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-[#E8CDB5]/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#D4A574]/30 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-[#6B635B] shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-medium tracking-tight leading-[0.85] mb-8"
          >
            <span className="block text-[#2C2824]">Mellisa</span>
            <span className="block bg-gradient-to-r from-[#D4A574] via-[#C9A86C] to-[#D4A574] bg-clip-text text-transparent">
              Goodwin
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-[#6B635B] mb-12 max-w-2xl mx-auto font-light"
          >
            Actress · Singer · Storyteller
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => setVideoModalOpen(true)}
              className="group relative px-8 py-4 bg-[#2C2824] text-white rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.span>
                Watch Reel
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#D4A574] to-[#C9A86C]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[#2C2824] text-[#2C2824] rounded-full font-medium hover:bg-[#2C2824] hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 flex justify-center gap-12 text-center"
          >
            {[
              { value: "SAG-AFTRA", label: "Union" },
              { value: "LA", label: "Based" },
              { value: "2017", label: "Since" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <p className="text-2xl font-serif text-[#D4A574]">{stat.value}</p>
                <p className="text-sm text-[#9B938A]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#D4A574]/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#D4A574] rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ABOUT - Bento Grid */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
              {/* Main Bio Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="md:col-span-2 lg:row-span-2 p-8 bg-gradient-to-br from-[#D4A574] to-[#B8956A] rounded-3xl text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-white/70 text-sm tracking-wider">ABOUT ME</span>
                    <h2 className="font-serif text-4xl md:text-5xl mt-2">Hello, I'm Mellisa 🍯</h2>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Multi-talented actress, singer, and performer based in Los Angeles.
                    From courtroom dramas to indie films, I bring authenticity to every role.
                  </p>
                </div>
              </motion.div>

              {/* Photo Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="lg:row-span-2 bg-gradient-to-br from-[#F5F0E8] to-[#E8CDB5] rounded-3xl flex items-center justify-center relative overflow-hidden"
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#D4A574] to-[#C9A86C] flex items-center justify-center shadow-2xl">
                    <span className="font-serif text-4xl text-white">MG</span>
                  </div>
                  <a
                    href={CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-[#D4A574] text-sm hover:underline"
                  >
                    @mellisagoodwin
                  </a>
                </div>
              </motion.div>

              {/* Stats Cards */}
              <StatCard value="5'6&quot;" label="Height" />
              <StatCard value="25-35" label="Age Range" />
              <StatCard value="Blonde" label="Hair" />
              <StatCard value="Blue" label="Eyes" />

              {/* Known For Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="md:col-span-2 p-6 bg-white rounded-3xl shadow-sm relative overflow-hidden"
              >
                <span className="text-[#9B938A] text-sm tracking-wider">KNOWN FOR</span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Law & Order: SVU", "Law & Order", "We Never Sleep", "Wetlands"].map((show) => (
                    <span key={show} className="px-4 py-2 bg-[#FAF8F5] rounded-full text-[#2C2824] text-sm">
                      {show}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WORK / CREDITS - Horizontal Scroll */}
      <section id="work" className="py-32 bg-[#2C2824] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <AnimatedSection>
            <span className="text-[#D4A574] text-sm tracking-wider">SELECTED WORK</span>
            <h2 className="font-serif text-5xl md:text-6xl mt-2">Credits</h2>
          </AnimatedSection>
        </div>

        <div className="relative">
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: [0, -1000, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex gap-6">
                <CreditCard
                  title="Law & Order: SVU"
                  role="Counselor Janet Mayer"
                  year="2021"
                  type="Co-Star"
                  image="NBC"
                />
                <CreditCard
                  title="Law & Order"
                  role="Attorney"
                  year="2020"
                  type="Guest Star"
                  image="NBC"
                />
                <CreditCard
                  title="We Never Sleep"
                  role="Mikaela"
                  year="2023"
                  type="Lead"
                  image="Horror"
                />
                <CreditCard
                  title="Wetlands"
                  role="Lisa"
                  year="2017"
                  type="Series Regular"
                  image="Drama"
                />
                <CreditCard
                  title="Netflix"
                  role="Singer/Songwriter"
                  year="2023"
                  type="Original Music"
                  image="Music"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12">
          <a
            href={CONFIG.imdb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D4A574] hover:text-[#E8CDB5] transition-colors"
          >
            View full credits on IMDb
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* DEMO REEL */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-[#D4A574] text-sm tracking-wider">SHOWREEL</span>
              <h2 className="font-serif text-5xl md:text-6xl mt-2 text-[#2C2824]">Demo Reel</h2>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setVideoModalOpen(true)}
              className="relative aspect-video bg-[#2C2824] rounded-3xl overflow-hidden cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl"
                >
                  <svg className="w-10 h-10 text-[#2C2824] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="text-white text-xl font-medium">Acting Demo Reel 2024</p>
                  <p className="text-white/60">Click to play</p>
                </div>
                <div className="flex gap-2">
                  {["Dramatic", "Comedy", "Commercial"].map((type) => (
                    <span key={type} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[#D4A574] text-sm tracking-wider">CAPABILITIES</span>
              <h2 className="font-serif text-5xl md:text-6xl mt-2 text-[#2C2824]">Skills & Training</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Acting */}
              <SkillCategory
                title="Acting"
                skills={["Meisner Technique", "On-Camera", "Stage Combat", "Improvisation", "Commercial"]}
              />
              {/* Music */}
              <SkillCategory
                title="Music & Voice"
                skills={["Singing (Alto/Mezzo)", "Songwriting", "Vocal Range: Belt", "Recording Artist"]}
              />
              {/* Dialects */}
              <SkillCategory
                title="Dialects"
                skills={["Standard American", "Southern American", "British RP", "Spanish (Conv.)"]}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-16 flex flex-wrap justify-center gap-3"
            >
              {[
                "Legal/Courtroom",
                "News Anchor",
                "Teleprompter",
                "Hosting",
                "Stunts",
                "Dance",
                "Swimming",
                "Yoga",
                "Valid Passport",
                "Licensed Driver",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, backgroundColor: "#D4A574", color: "#fff" }}
                  className="px-4 py-2 bg-white rounded-full text-[#6B635B] text-sm cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[#D4A574] text-sm tracking-wider">LET'S CONNECT</span>
              <h2 className="font-serif text-5xl md:text-7xl mt-2 text-[#2C2824]">Work with me</h2>
              <p className="mt-6 text-xl text-[#6B635B] max-w-xl mx-auto">
                Available for film, television, commercial, voiceover, and music collaborations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                href={`mailto:${CONFIG.representationEmail}`}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-[#2C2824] text-white rounded-3xl group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4A574] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">Representation</h3>
                <p className="text-white/60">Booking inquiries & management</p>
              </motion.a>

              <motion.a
                href={`mailto:${CONFIG.pressEmail}`}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-white rounded-3xl shadow-lg group"
              >
                <div className="w-14 h-14 bg-[#FAF8F5] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4A574] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6 text-[#D4A574] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#2C2824] mb-2">General Inquiries</h3>
                <p className="text-[#6B635B]">Press, media & collaborations</p>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex justify-center gap-4">
              {[
                { href: CONFIG.instagram, label: "IG", gradient: true },
                { href: CONFIG.imdb, label: "IMDb", gradient: false },
                { href: CONFIG.backstage, label: "BS", gradient: false },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shadow-lg ${
                    link.gradient
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white text-[#D4A574]"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-[#E8CDB5]/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-2xl text-[#2C2824]">
            Mellisa Goodwin <span className="text-[#D4A574]">🍯</span>
          </p>
          <p className="text-[#9B938A] text-sm">
            © {new Date().getFullYear()} · Los Angeles, CA
          </p>
        </div>
      </footer>
    </div>
  );
}

// Animated Section Wrapper
function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Stat Card
function StatCard({ value, label }: { value: React.ReactNode; label: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white rounded-3xl shadow-sm flex flex-col justify-center items-center"
    >
      <p className="font-serif text-3xl text-[#D4A574]">{value}</p>
      <p className="text-sm text-[#9B938A] mt-1">{label}</p>
    </motion.div>
  );
}

// Credit Card
function CreditCard({ title, role, year, type, image }: {
  title: string;
  role: string;
  year: string;
  type: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="flex-shrink-0 w-80 p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 bg-[#D4A574] text-white text-xs rounded-full">{type}</span>
        <span className="text-white/50 text-sm">{year}</span>
      </div>
      <h3 className="font-serif text-2xl text-white mb-2">{title}</h3>
      <p className="text-white/70">{role}</p>
      <p className="text-white/40 text-sm mt-2">{image}</p>
    </motion.div>
  );
}

// Skill Category
function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 bg-white rounded-3xl shadow-sm"
    >
      <h3 className="font-serif text-2xl text-[#2C2824] mb-6">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#D4A574] rounded-full" />
            <span className="text-[#6B635B]">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
