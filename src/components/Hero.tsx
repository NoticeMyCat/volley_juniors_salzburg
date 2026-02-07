import React from 'react';

export default function Hero() {
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
    <section id="home" className="relative pt-20 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-500">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center">
            <div className="mb-6 sm:mb-8">
              <p className="text-red-100 font-semibold text-sm sm:text-base uppercase tracking-wider mb-2">
                Willkommen bei
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                ASKÖ Volley<br />Juniors
              </h1>
              <p className="text-red-100 text-xl sm:text-2xl font-medium mt-2">Salzburg</p>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Spaß, Teamgeist und sportliche Erfolge – werde Teil unserer Volleyball-Familie für Kids und Teens!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollTo('about')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                Mehr Erfahren
              </button>
              <button
                onClick={() => scrollTo('registration')}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300"
              >
                Interessiert?
              </button>
            </div>

            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white">4</div>
                <p className="text-white/80 text-xs sm:text-sm font-medium mt-1">Trainingsgruppen</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white">3</div>
                <p className="text-white/80 text-xs sm:text-sm font-medium mt-1">Trainer</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl font-bold text-white">6-17</div>
                <p className="text-white/80 text-xs sm:text-sm font-medium mt-1">Jahre</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/15 backdrop-blur-md w-full h-full rounded-3xl flex items-center justify-center overflow-hidden border border-white/30 shadow-2xl">
                <img
                  src="./image.png"
                  alt="ASKÖ Volley Juniors Logo"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}