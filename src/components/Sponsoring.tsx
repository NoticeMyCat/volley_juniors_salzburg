import { Heart, Award, Users, Target } from 'lucide-react';

export default function Sponsoring() {
  return (
    <section id="sponsoring" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sponsoring
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Unterstütze uns bei unserer Mission, jungen Volleyballern zu helfen, ihre Träume zu verfolgen
            und ein starkes Gemeinschaftsgefühl aufzubauen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start">
              <div className="bg-red-100 rounded-full p-3 mr-4 flex-shrink-0">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Warum Sponsoring?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Als relativ neuer Verein arbeiten wir daran, jungen Menschen die beste Volleyball-Erfahrung
                  zu bieten. Deine Unterstützung hilft uns, hochwertige Trainingsgeräte zu beschaffen,
                  Trainingsmöglichkeiten zu erweitern und unseren Spielern unvergessliche Erlebnisse zu schaffen.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start">
              <div className="bg-yellow-100 rounded-full p-3 mr-4 flex-shrink-0">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unsere Ziele</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wir möchten wachsen und mehr Kindern Zugang zu professionellem Volleyballtraining geben.
                  Mit deiner Hilfe können wir bessere Trainingsmöglichkeiten, talentierte Trainer und
                  spannende Turniere und Events für unsere jungen Spieler bereitstellen.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 sm:p-12 text-white mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Sponsoringmöglichkeiten</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-3">Bronz</div>
              <ul className="space-y-3 text-sm text-white/90 mb-6">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Logo auf Website</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Erwähnung in Newsletters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Dankeschön-Sertifikat</span>
                </li>
              </ul>
              <p className="text-sm text-white/80">Perfekt für kleinere Unternehmen</p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 transform md:scale-105">
              <div className="text-3xl font-bold mb-3">Silber</div>
              <ul className="space-y-3 text-sm text-white/90 mb-6">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Großes Logo auf Website & Events</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Social Media Shoutout</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Erwähnung in Pressemitteilungen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Premium Danke</span>
                </li>
              </ul>
              <p className="text-sm text-white/80">Beste Sichtbarkeit</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-3">Gold</div>
              <ul className="space-y-3 text-sm text-white/90 mb-6">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Alles aus Silber</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Exklusives Event Sponsoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Personalisierte Angebote</span>
                </li>
              </ul>
              <p className="text-sm text-white/80">Für Hauptsponsoren</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Für Unternehmen</h4>
            </div>
            <p className="text-gray-600 mb-6">
              Zeige dein Engagement für die Jugend und die lokale Gemeinschaft. Durch deine Unterstützung
              wirst du Teil einer wachsenden Volleyball-Familie und erhältst große Sichtbarkeit.
            </p>
            <a
              href="mailto:info@volley-juniors-salzburg.at?subject=Sponsoring Anfrage"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Anfrage senden
            </a>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-start mb-4">
              <div className="bg-green-100 rounded-full p-3 mr-4 flex-shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Einzelpersonen & Gönner</h4>
            </div>
            <p className="text-gray-600 mb-6">
              Du möchtest talentierten Volleyballern unterstützen? Mit einer kleineren Spende kannst du
              direkt zum Erfolg unserer Spieler beitragen. Jeder Euro zählt!
            </p>
            <a
              href="mailto:info@volley-juniors-salzburg.at?subject=Unterstützung anfragen"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-3">Häufig gestellte Fragen</h4>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Sind Spenden steuerlich absetzbar?</p>
              <p className="text-gray-600 text-sm">
                Ja, als registrierter Verein können wir dir eine Spendenbescheinigung ausstellen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Wie wird das Geld verwendet?</p>
              <p className="text-gray-600 text-sm">
                Deine Spende geht direkt in Trainingsgeräte, Trainingsmöglichkeiten und Events für unsere
                Spieler.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Kann ich mich als Sponsor anpassen?</p>
              <p className="text-gray-600 text-sm">
                Natürlich! Kontaktiere uns, um ein individuelles Sponsoring-Paket zu erstellen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
