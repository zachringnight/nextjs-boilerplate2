export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-playfair text-2xl font-semibold tracking-wide">Mellisa Goodwin</span>
          <div className="hidden md:flex gap-8 font-inter text-sm tracking-wide">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#credits" className="hover:text-amber-400 transition-colors">Credits</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-6 pt-20">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Mellisa<br />
            <span className="text-amber-400">Goodwin</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-stone-400 mb-8 tracking-wide">
            Actress • Los Angeles
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-inter">
            <span className="px-4 py-2 border border-stone-700 rounded-full">Law & Order</span>
            <span className="px-4 py-2 border border-stone-700 rounded-full">Law & Order: SVU</span>
            <span className="px-4 py-2 border border-stone-700 rounded-full">We Never Sleep</span>
          </div>
          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-stone-500 hover:text-amber-400 transition-colors">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-amber-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] bg-gradient-to-br from-stone-800 to-stone-900 rounded-lg flex items-center justify-center border border-stone-700">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <span className="font-playfair text-5xl font-bold text-stone-900">MG</span>
                </div>
                <p className="text-stone-500 font-inter text-sm">Professional Headshot</p>
              </div>
            </div>
            <div className="font-inter text-stone-300 space-y-6 leading-relaxed">
              <p>
                Mellisa Goodwin is a professional actress based in Los Angeles, California.
                Born in 1993, she has been pursuing her passion for acting professionally since 2017.
              </p>
              <p>
                Known for her compelling performances in both television and film, Mellisa has
                appeared in acclaimed series such as <em className="text-amber-400">Law & Order</em> and
                <em className="text-amber-400"> Law & Order: Special Victims Unit</em>, where she portrayed
                Counselor Janet Mayer in the episode "People vs. Richard Wheatley."
              </p>
              <p>
                Her work in independent film includes the 2023 short film <em className="text-amber-400">We Never Sleep</em>,
                where she played the character Mikaela, and <em className="text-amber-400">Wetlands</em> (2017),
                where she achieved recognition for her portrayal of Lisa, a rival newscaster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section id="credits" className="py-24 px-6 bg-stone-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-12 text-center">
            Film & <span className="text-amber-400">Television</span>
          </h2>

          {/* Television */}
          <div className="mb-16">
            <h3 className="font-playfair text-2xl font-semibold mb-8 text-amber-400 flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12z"/>
              </svg>
              Television
            </h3>
            <div className="space-y-6">
              <CreditItem
                title="Law & Order: Special Victims Unit"
                role="Counselor Janet Mayer"
                year="2021"
                episode="People vs. Richard Wheatley"
              />
              <CreditItem
                title="Law & Order"
                role="Various"
                year="2020s"
              />
              <CreditItem
                title="Wetlands"
                role="Lisa (Rival Newscaster)"
                year="2017"
              />
            </div>
          </div>

          {/* Film */}
          <div>
            <h3 className="font-playfair text-2xl font-semibold mb-8 text-amber-400 flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
              </svg>
              Film
            </h3>
            <div className="space-y-6">
              <CreditItem
                title="We Never Sleep"
                role="Mikaela"
                year="2023"
                type="Short Film"
              />
              <CreditItem
                title="How to Get Girls"
                role="Featured Role"
                year="2017"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="2017" label="Career Start" />
            <StatItem number="5+" label="Screen Credits" />
            <StatItem number="LA" label="Based In" />
            <StatItem number="∞" label="Passion" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-stone-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
            Get In <span className="text-amber-400">Touch</span>
          </h2>
          <p className="font-inter text-stone-400 mb-12 leading-relaxed">
            For booking inquiries, representation information, or press requests,
            please reach out through the appropriate channels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.imdb.com/name/nm8475889/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-stone-900 font-inter font-semibold rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
              </svg>
              View IMDb Profile
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-stone-800">
            <p className="font-inter text-stone-500 text-sm">
              Based in Los Angeles, California
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-playfair text-xl">Mellisa Goodwin</p>
          <p className="font-inter text-stone-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function CreditItem({
  title,
  role,
  year,
  episode,
  type
}: {
  title: string;
  role: string;
  year: string;
  episode?: string;
  type?: string;
}) {
  return (
    <div className="group p-6 bg-stone-800/50 rounded-lg border border-stone-700 hover:border-amber-400/50 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <h4 className="font-playfair text-xl font-semibold group-hover:text-amber-400 transition-colors">
            {title}
          </h4>
          <p className="font-inter text-stone-400">
            {role}
            {episode && <span className="text-stone-500"> • "{episode}"</span>}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {type && (
            <span className="px-3 py-1 text-xs font-inter bg-amber-400/20 text-amber-400 rounded-full">
              {type}
            </span>
          )}
          <span className="font-inter text-amber-400 font-semibold">{year}</span>
        </div>
      </div>
    </div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-6">
      <div className="font-playfair text-4xl md:text-5xl font-bold text-amber-400 mb-2">
        {number}
      </div>
      <div className="font-inter text-stone-400 text-sm tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}
