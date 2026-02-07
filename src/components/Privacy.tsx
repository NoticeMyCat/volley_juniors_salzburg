export default function Privacy() {
  return (
    <section id="privacy" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 sm:mb-12">
          Datenschutzerklärung
        </h1>

        <div className="text-gray-600 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-0 mb-4">1. Allgemeines zur Datenverarbeitung</h2>
            <p>
              ASKÖ Volley Juniors Salzburg (nachfolgend "wir", "uns" oder "unser") betreibt diese Website.
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre Daten vertraulich und nach den geltenden Datenschutzgesetzen.
            </p>
            <p>
              Verantwortlicher für die Datenverarbeitung:
            </p>
            <p className="text-sm">
              ASKÖ Volley Juniors Salzburg<br />
              Alpenstraße 107<br />
              5020 Salzburg<br />
              info@volley-juniors-salzburg.at
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">2. Erhebung und Verarbeitung von Daten</h2>
            <p>
              Wir erheben und verarbeiten personenbezogene Daten nur in dem Umfang, wie es für die Erbringung unserer Dienste notwendig ist.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Automatische Datenerfassung</h3>
            <p>
              Bei jedem Zugriff auf unsere Website werden automatisch Informationen erfasst:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>IP-Adresse</li>
              <li>Zeitstempel des Zugriffs</li>
              <li>Browser und Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-4">
              Diese Daten werden für technische und statistische Zwecke verwendet und nicht an Dritte weitergegeben.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Kontaktformular</h3>
            <p>
              Wenn Sie unser Kontaktformular nutzen, werden die folgenden Daten erhoben:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Nachrichteninhalt</li>
            </ul>
            <p className="mt-4">
              Diese Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
              Wir speichern Ihre Nachricht für eine angemessene Zeit, um Ihre Anfrage zu bearbeiten.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Anmeldung zu Trainingskursen</h3>
            <p>
              Bei der Anmeldung zu Trainings erheben wir:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Vor- und Nachname</li>
              <li>E-Mail-Adresse</li>
              <li>Geburtsdatum</li>
              <li>Kontaktdaten Erziehungsberechtigter (bei Minderjährigen)</li>
            </ul>
            <p className="mt-4">
              Diese Daten werden für die Verwaltung der Trainings und zur Kommunikation mit Ihnen verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">3. Rechtsgrundlage für die Verarbeitung</h2>
            <p>
              Die Verarbeitung Ihrer Daten basiert auf:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Ihrer expliziten Einwilligung (Art. 6 Abs. 1 a DSGVO)</li>
              <li>Der Erfüllung eines Vertrages (Art. 6 Abs. 1 b DSGVO)</li>
              <li>Der Erfüllung einer rechtlichen Verpflichtung (Art. 6 Abs. 1 c DSGVO)</li>
              <li>Der Wahrung berechtigter Interessen (Art. 6 Abs. 1 f DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">4. Speicherdauer</h2>
            <p>
              Wir speichern Ihre personenbezogenen Daten nur solange, wie es für die genannten Zwecke erforderlich ist:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Kontaktformular-Anfragen: Bis zur Beantwortung und angemessene Zeit danach</li>
              <li>Trainingsanmeldungen: Für die Dauer der Teilnahme und darüber hinaus zur Erfüllung rechtlicher Verpflichtungen</li>
              <li>Website-Zugriffsdaten: Maximal 90 Tage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <p>
              Diese Website verwendet nur notwendige Cookies für technische Funktionen.
              Wir setzen keine Tracking- oder Marketing-Cookies ein.
              Sie können Cookies in Ihren Browsereinstellungen deaktivieren.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
              <li>Berichtigung fehlerhafter Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen (sofern keine Aufbewahrungspflichten bestehen)</li>
              <li>Die Verarbeitung Ihrer Daten einzuschränken</li>
              <li>Der Verarbeitung zu widersprechen</li>
              <li>Ihre Daten in einem strukturierten, maschinenlesbaren Format zu erhalten (Datenportabilität)</li>
            </ul>
            <p className="mt-4">
              Um diese Rechte auszuüben, kontaktieren Sie uns unter: info@volley-juniors-salzburg.at
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">7. Datensicherheit</h2>
            <p>
              Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor Missbrauch und unbefugtem Zugriff zu schützen.
              Alle Übertragungen erfolgen über sichere, verschlüsselte Kanäle.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">8. Weitergabe an Dritte</h2>
            <p>
              Ihre personenbezogenen Daten werden nicht an Dritte weitergegeben, es sei denn:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Sie haben explizit zugestimmt</li>
              <li>Wir sind rechtlich dazu verpflichtet</li>
              <li>Dies ist für die Erfüllung unserer Dienste notwendig</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">9. Externe Links</h2>
            <p>
              Diese Website kann Links zu externen Websites enthalten. Wir sind nicht verantwortlich für die Datenschutzpraktiken dieser Websites.
              Bitte lesen Sie deren Datenschutzerklärungen.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">10. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu aktualisieren.
              Die aktuelle Fassung finden Sie immer auf dieser Seite.
            </p>
            <p className="text-sm">
              <strong>Stand: {new Date().toLocaleDateString('de-AT')}</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">11. Kontakt zum Datenschutz</h2>
            <p>
              Wenn Sie Fragen zu unserer Datenschutzerklärung haben oder Ihre Rechte ausüben möchten, kontaktieren Sie uns:
            </p>
            <p className="text-sm">
              ASKÖ Volley Juniors Salzburg<br />
              E-Mail: info@volley-juniors-salzburg.at
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
