import { useState } from 'react';
import { FileText, Download, Send, CheckCircle } from 'lucide-react';

export default function Registration() {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    email: '',
    phone: '',
    group: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        childName: '',
        childAge: '',
        parentName: '',
        email: '',
        phone: '',
        group: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="registration" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Anmeldung
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Werde Teil der ASKÖ Volley Juniors Familie!
            Fülle das Formular aus oder lade unser Anmeldeformular herunter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Schnell & Einfach</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-4 flex-shrink-0">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Formular ausfüllen</h4>
                    <p className="text-white/90 text-sm">
                      Fülle das Online-Formular aus oder lade das PDF herunter
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-4 flex-shrink-0">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Wir melden uns</h4>
                    <p className="text-white/90 text-sm">
                      Innerhalb von 2 Werktagen erhältst du eine Bestätigung
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-4 flex-shrink-0">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Los geht's!</h4>
                    <p className="text-white/90 text-sm">
                      Komm zum Schnuppertraining und lerne uns kennen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-red-600 mr-3" />
                <h4 className="text-xl font-bold text-gray-900">Anmeldeformular (PDF)</h4>
              </div>
              <p className="text-gray-600 mb-6">
                Du kannst auch unser PDF-Formular herunterladen, ausfüllen und per E-Mail an uns senden.
              </p>
              <button className="w-full bg-white border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Formular herunterladen
              </button>
            </div>

            <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Schnuppertraining möglich!</h4>
              <p className="text-gray-600 text-sm">
                Du bist dir noch unsicher? Kein Problem! Komm zu einem kostenlosen Schnuppertraining
                und lerne unser Team und die Trainingsabläufe kennen.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Online-Anmeldung</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-green-100 rounded-full p-4 mb-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Vielen Dank!</h4>
                <p className="text-gray-600">
                  Deine Anmeldung wurde erfolgreich übermittelt.
                  Wir melden uns in Kürze bei dir!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="childName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name des Kindes *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    required
                    value={formData.childName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Max Mustermann"
                  />
                </div>

                <div>
                  <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-2">
                    Alter des Kindes *
                  </label>
                  <input
                    type="number"
                    id="childAge"
                    name="childAge"
                    required
                    value={formData.childAge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="10"
                    min="6"
                    max="17"
                  />
                </div>

                <div>
                  <label htmlFor="group" className="block text-sm font-semibold text-gray-700 mb-2">
                    Gewünschte Trainingsgruppe *
                  </label>
                  <select
                    id="group"
                    name="group"
                    required
                    value={formData.group}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="mini">Mini-Volleyer (6-8 Jahre)</option>
                    <option value="rookie">Rookie-Team (9-11 Jahre)</option>
                    <option value="junior">Junior-Team (12-14 Jahre)</option>
                    <option value="youth">Youth-Team (15-17 Jahre)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name Erziehungsberechtigte/r *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Maria Mustermann"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="email@beispiel.at"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="+43 660 1234567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nachricht (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Hast du noch Fragen oder Anmerkungen?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Anmeldung absenden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
