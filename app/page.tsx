"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="font-serif text-2xl tracking-wide text-amber-50">
              Mellisa Goodwin
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase">
              <a href="#about" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">About</a>
              <a href="#reel" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">Reel</a>
              <a href="#credits" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">Credits</a>
              <a href="#training" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">Training</a>
              <a href="#contact" className="text-neutral-400 hover:text-amber-400 transition-colors duration-300">Contact</a>
              <a
                href="https://www.imdb.com/name/nm8475889/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-amber-500 text-neutral-900 font-semibold rounded hover:bg-amber-400 transition-colors duration-300"
              >
                IMDb
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-neutral-400 hover:text-amber-400 transition-colors"
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
            <div className="md:hidden mt-4 pb-4 border-t border-neutral-800 pt-4">
              <div className="flex flex-col gap-4 font-sans text-sm tracking-widest uppercase">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-amber-400 transition-colors">About</a>
                <a href="#reel" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-amber-400 transition-colors">Reel</a>
                <a href="#credits" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-amber-400 transition-colors">Credits</a>
                <a href="#training" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-amber-400 transition-colors">Training</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-neutral-400 hover:text-amber-400 transition-colors">Contact</a>
                <a
                  href="https://www.imdb.com/name/nm8475889/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-amber-500 text-neutral-900 font-semibold rounded text-center hover:bg-amber-400 transition-colors"
                >
                  IMDb
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-6 pt-20 max-w-5xl mx-auto">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-amber-400 mb-6 animate-fade-in">
            Los Angeles Based Actress
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium mb-8 tracking-tight leading-none">
            <span className="block text-neutral-100">Mellisa</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
              Goodwin
            </span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Bringing authenticity and depth to every role. From courtroom dramas to indie films,
            committed to the craft of storytelling.
          </p>

          {/* Quick Stats for Casting */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 font-sans text-sm">
            <div className="text-center">
              <span className="block text-amber-400 font-semibold">SAG-AFTRA</span>
              <span className="text-neutral-500">Union</span>
            </div>
            <div className="text-center">
              <span className="block text-amber-400 font-semibold">Los Angeles</span>
              <span className="text-neutral-500">Based</span>
            </div>
            <div className="text-center">
              <span className="block text-amber-400 font-semibold">Film & TV</span>
              <span className="text-neutral-500">Focus</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#reel"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-neutral-900 font-sans font-semibold rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Demo Reel
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-700 text-neutral-300 font-sans font-semibold rounded-full hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
            >
              Contact for Booking
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-neutral-600 hover:text-amber-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* About Section with Actor Stats */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Headshot Area */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg overflow-hidden border border-neutral-800 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <span className="font-serif text-6xl font-bold text-neutral-900">MG</span>
                    </div>
                    <p className="text-neutral-500 font-sans text-sm tracking-wide">Professional Headshot</p>
                  </div>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-500/20 rounded-lg -z-10"></div>
            </div>

            {/* Bio & Stats */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8">
                About <span className="text-amber-400">Mellisa</span>
              </h2>

              <div className="font-sans text-neutral-300 space-y-6 leading-relaxed mb-12">
                <p className="text-lg">
                  Mellisa Goodwin is a professional actress based in Los Angeles, California,
                  with a passion for bringing complex, authentic characters to life on screen.
                </p>
                <p>
                  Since beginning her professional acting career in 2017, Mellisa has built an impressive
                  body of work spanning television dramas, independent films, and commercial projects.
                  Her breakout role as <em className="text-amber-400">Lisa</em>, the ambitious rival newscaster
                  in <em>Wetlands</em>, showcased her ability to command the screen with nuanced performances.
                </p>
                <p>
                  Most notably, Mellisa portrayed <em className="text-amber-400">Counselor Janet Mayer</em> in
                  the acclaimed NBC series <em>Law & Order: Special Victims Unit</em>, demonstrating her
                  range in the high-stakes courtroom drama "People vs. Richard Wheatley." Her work
                  continues to evolve with roles in independent cinema, including her portrayal of
                  <em className="text-amber-400"> Mikaela</em> in the 2023 short film <em>We Never Sleep</em>.
                </p>
              </div>

              {/* Actor Stats Card */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8">
                <h3 className="font-sans text-sm tracking-widest uppercase text-amber-400 mb-6">
                  Physical Characteristics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-sans text-sm">
                  <StatBox label="Height" value="5'6&quot;" />
                  <StatBox label="Hair" value="Brown" />
                  <StatBox label="Eyes" value="Brown" />
                  <StatBox label="Age Range" value="25-35" />
                  <StatBox label="Ethnicity" value="Caucasian" />
                  <StatBox label="Voice" value="Alto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Reel Section */}
      <section id="reel" className="py-24 md:py-32 px-6 bg-neutral-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Demo <span className="text-amber-400">Reel</span>
            </h2>
            <p className="font-sans text-neutral-400 max-w-2xl mx-auto">
              A showcase of performances across television, film, and commercial work.
            </p>
          </div>

          {/* Video Player Placeholder */}
          <div className="relative aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-amber-500/90 flex items-center justify-center group-hover:bg-amber-400 transition-all duration-300 group-hover:scale-110 shadow-lg shadow-amber-500/30">
                  <svg className="w-10 h-10 text-neutral-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="font-sans text-lg text-neutral-300 mb-2">Demo Reel 2024</p>
                <p className="font-sans text-sm text-neutral-500">2:30 minutes</p>
              </div>
            </div>
            {/* Decorative film strip pattern */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-800/50 flex items-center justify-around">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-4 h-3 bg-neutral-700/50 rounded-sm"></div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-neutral-800/50 flex items-center justify-around">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-4 h-3 bg-neutral-700/50 rounded-sm"></div>
              ))}
            </div>
          </div>

          {/* Reel Categories */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <ReelCard title="Dramatic" duration="1:45" />
            <ReelCard title="Comedy" duration="1:20" />
            <ReelCard title="Commercial" duration="0:60" />
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section id="credits" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Film & <span className="text-amber-400">Television</span>
            </h2>
            <p className="font-sans text-neutral-400 max-w-2xl mx-auto">
              Selected credits from a diverse body of work spanning drama, comedy, and independent cinema.
            </p>
          </div>

          {/* Television Credits */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-500/10 rounded-lg">
                <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12z"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium">Television</h3>
            </div>

            <div className="space-y-4">
              <CreditRow
                title="Law & Order: Special Victims Unit"
                role="Counselor Janet Mayer"
                type="Co-Star"
                year="2021"
                network="NBC"
                episode="People vs. Richard Wheatley"
              />
              <CreditRow
                title="Law & Order"
                role="Attorney"
                type="Guest Star"
                year="2020"
                network="NBC"
              />
              <CreditRow
                title="Wetlands"
                role="Lisa"
                type="Series Regular"
                year="2017"
                network="Streaming"
                episode="Rival Newscaster - Lead Antagonist"
              />
            </div>
          </div>

          {/* Film Credits */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-500/10 rounded-lg">
                <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium">Film</h3>
            </div>

            <div className="space-y-4">
              <CreditRow
                title="We Never Sleep"
                role="Mikaela"
                type="Lead"
                year="2023"
                network="Short Film"
                episode="Festival Circuit"
              />
              <CreditRow
                title="How to Get Girls"
                role="Jessica"
                type="Supporting"
                year="2017"
                network="Feature Film"
              />
            </div>
          </div>

          {/* Theatre Credits */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-500/10 rounded-lg">
                <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-medium">Theatre</h3>
            </div>

            <div className="space-y-4">
              <CreditRow
                title="Available Upon Request"
                role="Stage Credits"
                type=""
                year=""
                network="Los Angeles Theatre"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-24 md:py-32 px-6 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Training & <span className="text-amber-400">Skills</span>
            </h2>
            <p className="font-sans text-neutral-400 max-w-2xl mx-auto">
              Committed to continuous growth and mastery of the craft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Training */}
            <div>
              <h3 className="font-sans text-sm tracking-widest uppercase text-amber-400 mb-8">
                Acting Training
              </h3>
              <div className="space-y-6">
                <TrainingItem
                  title="Scene Study & Technique"
                  institution="Los Angeles Acting Studios"
                  description="Advanced Meisner Technique and scene work"
                />
                <TrainingItem
                  title="On-Camera Technique"
                  institution="Film Acting Workshop"
                  description="Multi-camera and single-camera techniques"
                />
                <TrainingItem
                  title="Improvisation"
                  institution="Improv Training"
                  description="Long-form and short-form improvisation"
                />
                <TrainingItem
                  title="Voice & Speech"
                  institution="Dialect Coach"
                  description="Standard American, regional dialects"
                />
              </div>
            </div>

            {/* Special Skills */}
            <div>
              <h3 className="font-sans text-sm tracking-widest uppercase text-amber-400 mb-8">
                Special Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Legal/Courtroom Procedural",
                  "News Anchor/Reporter",
                  "Improvisation",
                  "Teleprompter",
                  "Hosting",
                  "Commercial Work",
                  "Standard American Dialect",
                  "Southern Accent",
                  "British RP",
                  "Swimming",
                  "Yoga",
                  "Basic Stage Combat",
                  "Licensed Driver",
                  "Valid Passport"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full font-sans text-sm text-neutral-300 hover:border-amber-400/50 hover:text-amber-400 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="font-sans text-sm tracking-widest uppercase text-amber-400 mt-12 mb-8">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full font-sans text-sm text-amber-400">
                  English (Native)
                </span>
                <span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full font-sans text-sm text-neutral-300">
                  Spanish (Conversational)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Get In <span className="text-amber-400">Touch</span>
            </h2>
            <p className="font-sans text-neutral-400 max-w-2xl mx-auto">
              For auditions, bookings, and representation inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Representation Card */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 hover:border-amber-400/30 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium">Representation</h3>
              </div>
              <p className="font-sans text-neutral-400 mb-6">
                For representation inquiries and professional bookings, please contact through official channels.
              </p>
              <a
                href="mailto:contact@mellisagoodwin.com"
                className="inline-flex items-center gap-2 text-amber-400 font-sans font-medium hover:text-amber-300 transition-colors"
              >
                Contact for Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 hover:border-amber-400/30 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium">General Inquiries</h3>
              </div>
              <p className="font-sans text-neutral-400 mb-6">
                For press, media inquiries, and general questions about upcoming projects.
              </p>
              <a
                href="mailto:press@mellisagoodwin.com"
                className="inline-flex items-center gap-2 text-amber-400 font-sans font-medium hover:text-amber-300 transition-colors"
              >
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Social & Professional Links */}
          <div className="mt-12 text-center">
            <h3 className="font-sans text-sm tracking-widest uppercase text-neutral-500 mb-6">
              Professional Profiles
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.imdb.com/name/nm8475889/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-neutral-800/50 border border-neutral-700 rounded-xl hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 group"
                aria-label="IMDb Profile"
              >
                <span className="font-sans font-bold text-neutral-400 group-hover:text-amber-400 transition-colors">IMDb</span>
              </a>
              <a
                href="#"
                className="p-4 bg-neutral-800/50 border border-neutral-700 rounded-xl hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 group"
                aria-label="Actors Access"
              >
                <span className="font-sans font-bold text-neutral-400 group-hover:text-amber-400 transition-colors">Actors Access</span>
              </a>
              <a
                href="#"
                className="p-4 bg-neutral-800/50 border border-neutral-700 rounded-xl hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300 group"
                aria-label="Casting Networks"
              >
                <span className="font-sans font-bold text-neutral-400 group-hover:text-amber-400 transition-colors">Casting Networks</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-serif text-2xl text-amber-50 mb-2">Mellisa Goodwin</p>
              <p className="font-sans text-sm text-neutral-500">Actress • Los Angeles, California</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.imdb.com/name/nm8475889/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-neutral-400 hover:text-amber-400 transition-colors"
              >
                IMDb
              </a>
              <span className="text-neutral-700">|</span>
              <a
                href="#contact"
                className="font-sans text-sm text-neutral-400 hover:text-amber-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800/50 text-center">
            <p className="font-sans text-sm text-neutral-600">
              © {new Date().getFullYear()} Mellisa Goodwin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component: Stat Box
function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">{label}</p>
      <p className="text-neutral-100 font-medium" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

// Component: Reel Card
function ReelCard({ title, duration }: { title: string; duration: string }) {
  return (
    <div className="group bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-amber-400/30 transition-all duration-300 cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-sans font-medium text-neutral-200 group-hover:text-amber-400 transition-colors">{title}</h4>
          <p className="font-sans text-sm text-neutral-500">{duration}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
          <svg className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Component: Credit Row
function CreditRow({
  title,
  role,
  type,
  year,
  network,
  episode
}: {
  title: string;
  role: string;
  type: string;
  year: string;
  network: string;
  episode?: string;
}) {
  return (
    <div className="group bg-neutral-900/30 border border-neutral-800 rounded-xl p-6 hover:border-amber-400/30 transition-all duration-300">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-serif text-xl font-medium text-neutral-100 group-hover:text-amber-400 transition-colors mb-1">
            {title}
          </h4>
          <p className="font-sans text-neutral-400">
            {role}
            {episode && <span className="text-neutral-500"> — {episode}</span>}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {type && (
            <span className="px-3 py-1 text-xs font-sans font-medium bg-amber-500/10 text-amber-400 rounded-full">
              {type}
            </span>
          )}
          <span className="px-3 py-1 text-xs font-sans bg-neutral-800 text-neutral-400 rounded-full">
            {network}
          </span>
          {year && (
            <span className="font-sans text-sm font-semibold text-neutral-300">{year}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Component: Training Item
function TrainingItem({
  title,
  institution,
  description
}: {
  title: string;
  institution: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-amber-500/30 pl-6 hover:border-amber-400 transition-colors duration-300">
      <h4 className="font-sans font-medium text-neutral-200 mb-1">{title}</h4>
      <p className="font-sans text-amber-400 text-sm mb-2">{institution}</p>
      <p className="font-sans text-neutral-500 text-sm">{description}</p>
    </div>
  );
}
