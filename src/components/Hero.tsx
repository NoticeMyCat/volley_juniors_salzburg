import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Requirement B: Intersection Observer to pause/play based on visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section entered view: play from start
            video.currentTime = 0;
            video.play().catch(err => console.warn("Autoplay prevented:", err));
          } else {
            // Section out of view: pause and reset
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the section is visible
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Requirement A: Reset loop at 30 seconds
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime >= 30) {
      video.currentTime = 0;
      video.play().catch(err => console.warn("Autoplay prevented:", err));
    }
  };

  // Requirement A: Reset loop when video finishes inherently
  const handleEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(err => console.warn("Autoplay prevented:", err));
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    // Architecture: Semantic HTML section, Performance: min-height to prevent CLS
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100vh] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-gray-900 pt-20 pb-16"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        poster="./image.png"
      >
        <source src="./hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Architecture: Grid/Flexbox approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="mb-6 sm:mb-8">
              <p className="text-red-400 font-bold text-sm sm:text-base uppercase tracking-widest mb-3">
                Willkommen bei
              </p>
              {/* SEO: H1 typography optimization */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
                Volley Juniors<br />
                <span className="text-red-500">Salzburg</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md font-medium">
              Spaß, Teamgeist und sportliche Erfolge – werde Teil unserer Volleyball-Familie für Kids und Teens!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('about')}
                className="px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-red-600/20"
              >
                Mehr Erfahren
              </button>
              <button
                onClick={() => scrollTo('registration')}
                className="px-8 py-4 border-2 border-white/80 text-white rounded-full font-bold text-lg hover:bg-white hover:text-red-900 transition-all duration-300 backdrop-blur-sm"
              >
                Interessiert?
              </button>
            </div>

            <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-6">
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-2xl transform hover:-translate-y-1 transition-transform">
                <div className="text-3xl sm:text-4xl font-black text-red-500">4</div>
                <p className="text-white/90 text-sm font-semibold mt-2 uppercase tracking-wide">Gruppen</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-2xl transform hover:-translate-y-1 transition-transform">
                <div className="text-3xl sm:text-4xl font-black text-red-500">3</div>
                <p className="text-white/90 text-sm font-semibold mt-2 uppercase tracking-wide">Trainer</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-2xl transform hover:-translate-y-1 transition-transform">
                <div className="text-3xl sm:text-4xl font-black text-red-500">6-17</div>
                <p className="text-white/90 text-sm font-semibold mt-2 uppercase tracking-wide">Jahre</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10 lg:mt-0">
            {/* Visual Identity Logo */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-[80px] animate-pulse"></div>
              <div className="relative w-full h-full flex items-center justify-center drop-shadow-2xl hover:scale-105 transition-transform duration-700">
                <img
                  src="./image.png"
                  alt="Volley Juniors Salzburg Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}