import { Clock, MapPin, Users } from 'lucide-react';

export default function Training() {
  const trainingSessions = [
    {
      group: 'Mini-Volleyer',
      age: '6-8 Jahre',
      day: 'Montag & Mittwoch',
      time: '16:00 - 17:00',
      description: 'Spielerisches Heranführen an Volleyball mit viel Spaß und Bewegung',
    },
    {
      group: 'Rookie-Team',
      age: '9-11 Jahre',
      day: 'Dienstag & Donnerstag',
      time: '16:30 - 18:00',
      description: 'Erlernen der Grundtechniken und erste Wettkampferfahrungen',
    },
    {
      group: 'Junior-Team',
      age: '12-14 Jahre',
      day: 'Montag & Mittwoch',
      time: '18:00 - 19:30',
      description: 'Technische Verfeinerung und taktisches Verständnis',
    },
    {
      group: 'Youth-Team',
      age: '15-17 Jahre',
      day: 'Dienstag, Donnerstag & Freitag',
      time: '18:30 - 20:30',
      description: 'Leistungsorientiertes Training mit Wettkampfteilnahme',
    },
  ];

  return (
    <section id="training" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Training & Angebote
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten altersgerechte Trainingsgruppen für alle Könnensstufen –
            vom Anfänger bis zum Wettkampfspieler.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {trainingSessions.map((session, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-red-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {session.group}
                  </h3>
                  <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {session.age}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{session.description}</p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  <span className="font-medium">{session.day}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  <span>{session.time} Uhr</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Trainingsort</h3>
              <div className="flex items-start mb-4">
                <MapPin className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-1">Sporthalle Salzburg-Süd</p>
                  <p className="text-white/90">Alpenstraße 107</p>
                  <p className="text-white/90">5020 Salzburg</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                Unsere moderne Sporthalle bietet optimale Bedingungen für alle Altersgruppen.
                Mit professioneller Ausstattung und ausreichend Platz können wir ein
                abwechslungsreiches Training garantieren.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4">Was du brauchst:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Sportkleidung (T-Shirt & Shorts/Hose)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Hallenschuhe mit heller Sohle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Trinkflasche</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Gute Laune und Motivation!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
