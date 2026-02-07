export default function Imprint() {
  return (
    <section id="imprint" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 sm:mb-12">
          Impressum
        </h1>

        <div className="text-gray-600 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0 mb-4">Verantwortlich für den Inhalt</h2>
            <p className="text-sm">
              ASKÖ Volley Juniors Salzburg<br />
              Alpenstraße 107<br />
              5020 Salzburg<br />
              Österreich
            </p>
            <p className="text-sm">
              <strong>E-Mail:</strong> info@volley-juniors-salzburg.at
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Verein</h2>
            <p>
              ASKÖ Volley Juniors Salzburg ist ein Sportverein, der Volleyballtraining für Kinder und Jugendliche anbietet.
              Der Verein ist registriert beim Österreichischen Volleyballverband und folgt dessen Richtlinien und Bestimmungen.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
              Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
            <p>
              Die Informationen auf dieser Website werden ohne Gewähr bereitgestellt.
              Wir lehnen jede Haftung für Schäden ab, die durch die Nutzung der Website oder deren Inhalte entstehen.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
            <p>
              Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem österreichischen Urheberrecht.
              Eine Vervielfältigung, Verarbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
              der schriftlichen Zustimmung des Autors oder Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Technische Infrastruktur</h2>
            <p>
              Diese Website wird gehostet und verwaltet mit modernen Cloud-Technologien.
              Wir setzen auf sichere und zuverlässige Infrastruktur zur Sicherheit Ihrer Daten.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Rechtliche Hinweise</h2>
            <p>
              Dieses Impressum und die Datenschutzerklärung regeln das Verhältnis zwischen ASKÖ Volley Juniors Salzburg
              und den Nutzern dieser Website nach österreichischem Recht.
            </p>
            <p className="text-sm">
              <strong>Stand:</strong> {new Date().toLocaleDateString('de-AT')}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
