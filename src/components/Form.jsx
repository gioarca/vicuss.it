import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    user_job: "",
    user_time: "",
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!privacyAccepted)
      return alert("Devi accettare la privacy policy per continuare.");
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_4zk556a",
        "template_0t8cg1n",
        form.current,
        "nBwk1Dh-6_dCdi75H"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          window.location.href = "/thanks";
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/3 p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome completo*
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formValues.user_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Scrivi il tuo nome completo"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formValues.user_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Scrivi la tua email"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="user_job"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Professione*
                </label>
                <input
                  type="text"
                  id="user_job"
                  name="user_job"
                  value={formValues.user_job}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Che lavoro fai?"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="user_time"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Quando vorresti partire?*
                </label>
                <select
                  id="user_time"
                  name="user_time"
                  value={formValues.user_time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Seleziona un'opzione</option>
                  <option value="Prossimo mese">Prossimo mese</option>
                  <option value="Entro 3 mesi">Entro 3 mesi</option>
                  <option value="Entro 6 mesi">Entro 6 mesi</option>
                </select>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Scrivi il tuo messaggio"
                />
              </div>

              {/* Privacy checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-1 h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                  Ho letto e accetto la{" "}
                  <a
                    href="https://www.iubenda.com/privacy-policy/12345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-red-600 hover:text-red-800"
                  >
                    Privacy Policy
                  </a>
                  *
                </label>
              </div>

              {/*Obbligatorietà*/}
              <div>
                <p>
                  <span className="text-red-600">*</span> I campi contrassegnati
                  con un asterisco sono obbligatori.
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full bg-red-800 text-white py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Inviando...
                    </span>
                  ) : (
                    "Invia la tua richiesta"
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="md:w-1/3 bg-gradient-to-br from-red-600 to-red-800 text-white p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Puoi trovarci qui</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-5 h-5 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-200 text-sm mb-1">Email</p>
                    <a
                      href="mailto:borghisud@gmail.com"
                      className="hover:underline"
                    >
                      borghisud@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-5 h-5 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-200 text-sm mb-1">Location</p>
                    <p>Italia Meridionale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
