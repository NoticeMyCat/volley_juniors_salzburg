
import { Mail, Send } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

export default function Contact() {
  const { formData, updateFormData, status: formStatus, errorMessage: formError, submitForm: handleFormSubmit } = useContactForm();

  return (
    <section id="contact" className="sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-red-100 rounded-full p-4 sm:p-5">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Schreib uns eine E-Mail
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Hast du Fragen zum Training oder zur Anmeldung? Kontaktiere uns – wir melden uns schnellstmöglich bei dir!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
          {formStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold text-center">
                Danke! Deine Nachricht wurde erfolgreich versendet.
              </p>
            </div>
          )}

          {formStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-semibold text-center">
                {formError}
              </p>
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
                maxLength={100}
                pattern="^[A-Za-zÀ-ÿ\s\.\-]+$"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                E-Mail
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
                maxLength={100}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Nachricht
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400 resize-none"
                maxLength={1000}
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-95"
            >
              <Send className="w-5 h-5" />
              {formStatus === 'submitting' ? 'Wird versendet...' : 'E-Mail versendet'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
