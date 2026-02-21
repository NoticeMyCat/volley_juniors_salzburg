import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function Registration() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="registration" className="scroll-mt-16 py-12 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Anmeldung
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Werde Teil der ASKÖ Volley Juniors Familie!
            Fülle einfach das untenstehende Formular aus.
          </p>
        </div>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Container pre-sized to minimize CLS */}
          <div className="relative w-full min-h-[800px] bg-gray-50 flex items-center justify-center">

            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/80 z-10 transition-opacity duration-300">
                <Loader2 className="w-10 h-10 text-red-600 animate-spin mb-4" />
                <p className="text-gray-600 font-medium animate-pulse">Formular wird geladen...</p>
              </div>
            )}

            {/* External Form Iframe */}
            <iframe
              src="https://formular.vereinsplaner.com/b3abcc58-734f-4417-8742-cdf5751d2397"
              title="ASKÖ Volley Juniors Salzburg Registrierungsformular"
              className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setIsLoading(false)}
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
