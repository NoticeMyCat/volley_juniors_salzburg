export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Über Uns
          </h2>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Wir haben unseren Verein gegründet, um Volleyball in Salzburg auf ein neues, professionelles Niveau zu heben. Unser Anspruch ist es, Kindern von Anfang an hochwertige Trainingsbedingungen zu bieten – mit ausgebildeten Trainer:innen, strukturierten Programmen und einem modernen, nachhaltigen Ausbildungskonzept.
            </p>

            <p className="text-lg">
              Wir starten heuer mit Angeboten für 6–11-Jährige: Ballschule, Kidsvolley und Schulprojekte in den Volksschulen. Ab Frühjahr erweitern wir unser Programm mit Beachvolleyball für die Altersgruppe 11–14 Jahre.
            </p>

            <p className="text-lg">
              Unser langfristiges Ziel: eine starke Nachwuchsarbeit, die Talente früh erkennt, gezielt fördert und den Weg für Spitzenvolleyball in Salzburg bereitet – bis hin zu Erfolgen in Nachwuchsbewerben und dem Aufstieg in die Bundesliga.
            </p>

            <p className="text-lg">
              Wir glauben an Professionalität, Begeisterung und klare Entwicklungspfade. Kinder sollen bei uns nicht nur spielen, sondern wachsen – sportlich, persönlich und als Teil eines aktiven Vereinslebens.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Unsere Werte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Professionalität</h4>
                <p className="text-gray-700">
                  Hochwertige Trainerbetreung und modernes Trainingsprogramm für optimale Entwicklung.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Begeisterung</h4>
                <p className="text-gray-700">
                  Wir vermitteln die Freude am Volleyball und fördern echte Leidenschaft für den Sport.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Entwicklung</h4>
                <p className="text-gray-700">
                  Klare Entwicklungspfade, die Talente früh erkennen und gezielt unterstützen.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Gemeinschaft</h4>
                <p className="text-gray-700">
                  Ein aktives Vereinsleben, in dem jedes Kind Teil einer starken Familie ist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
