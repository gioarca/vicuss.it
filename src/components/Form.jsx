// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function Form() {
//   const form = useRef();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formValues, setFormValues] = useState({
//     user_name: "",
//     user_email: "",
//     user_job: "",
//     user_time: "",
//     message: "",
//   });
//   const [privacyAccepted, setPrivacyAccepted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prev) => ({ ...prev, [name]: value }));
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (!privacyAccepted)
//       return alert("Devi accettare la privacy policy per continuare.");
//     setIsSubmitting(true);

//     emailjs
//       .sendForm(
//         "service_4zk556a",
//         "template_0t8cg1n",
//         form.current,
//         "nBwk1Dh-6_dCdi75H"
//       )
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           window.location.href = "/thanks";
//         },
//         (error) => {
//           console.error("FAILED...", error.text);
//           setIsSubmitting(false);
//         }
//       );
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="md:flex">
//           <div className="md:w-2/3 p-8">
//             <form ref={form} onSubmit={sendEmail} className="space-y-6">
//               <div className="relative">
//                 <label
//                   htmlFor="user_name"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Nome completo*
//                 </label>
//                 <input
//                   type="text"
//                   id="user_name"
//                   name="user_name"
//                   value={formValues.user_name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                   placeholder="Scrivi il tuo nome completo"
//                 />
//               </div>

//               <div className="relative">
//                 <label
//                   htmlFor="user_email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email*
//                 </label>
//                 <input
//                   type="email"
//                   id="user_email"
//                   name="user_email"
//                   value={formValues.user_email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                   placeholder="Scrivi la tua email"
//                 />
//               </div>

//               <div className="relative">
//                 <label
//                   htmlFor="user_job"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Professione*
//                 </label>
//                 <input
//                   type="text"
//                   id="user_job"
//                   name="user_job"
//                   value={formValues.user_job}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                   placeholder="Che lavoro fai?"
//                 />
//               </div>

//               <div className="relative">
//                 <label
//                   htmlFor="user_time"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Quando vorresti partire?*
//                 </label>
//                 <select
//                   id="user_time"
//                   name="user_time"
//                   value={formValues.user_time}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                 >
//                   <option value="">Seleziona un'opzione</option>
//                   <option value="Prossimo mese">Prossimo mese</option>
//                   <option value="Entro 3 mesi">Entro 3 mesi</option>
//                   <option value="Entro 6 mesi">Entro 6 mesi</option>
//                 </select>
//               </div>

//               <div className="relative">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Messaggio
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formValues.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
//                   placeholder="Scrivi il tuo messaggio"
//                 />
//               </div>

//               {/* Privacy checkbox */}
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="privacy"
//                   checked={privacyAccepted}
//                   onChange={(e) => setPrivacyAccepted(e.target.checked)}
//                   className="mt-1 h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                   required
//                 />
//                 <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
//                   Ho letto e accetto la{" "}
//                   <a
//                     href="https://www.iubenda.com/privacy-policy/12345678"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline text-red-600 hover:text-red-800"
//                   >
//                     Privacy Policy
//                   </a>
//                   *
//                 </label>
//               </div>

//               {/*Obbligatorietà*/}
//               <div>
//                 <p>
//                   <span className="text-red-600">*</span> I campi contrassegnati
//                   con un asterisco sono obbligatori.
//                 </p>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="mt-4 w-full bg-red-800 text-white py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors"
//                 >
//                   {isSubmitting ? (
//                     <span className="flex items-center justify-center">
//                       <svg
//                         className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         />
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         />
//                       </svg>
//                       Inviando...
//                     </span>
//                   ) : (
//                     "Invia la tua richiesta"
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>

//           <div className="md:w-1/3 bg-gradient-to-br from-red-600 to-red-800 text-white p-8 flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Puoi trovarci qui</h3>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <svg
//                     className="w-5 h-5 mt-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                   <div>
//                     <p className="text-gray-200 text-sm mb-1">Email</p>
//                     <a
//                       href="mailto:borghisud@gmail.com"
//                       className="hover:underline"
//                     >
//                       borghisud@gmail.com
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <svg
//                     className="w-5 h-5 mt-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                   <div>
//                     <p className="text-gray-200 text-sm mb-1">Location</p>
//                     <p>Italia Meridionale</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ─── Line Input ───────────────────────────────────────────────────────────────
function LineInput({
  id,
  name,
  type = "text",
  value,
  onChange,
  label,
  placeholder,
  required,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[11px] font-bold uppercase tracking-[0.12em] text-stone-400"
      >
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          placeholder={placeholder}
          className="w-full pb-3 pt-0.5 text-[16px] font-medium text-stone-900 bg-transparent border-0 border-b-2 border-stone-200 outline-none transition-colors duration-200 placeholder:text-stone-300 focus:border-red-600"
        />
        {/* Animated underline */}
        <span
          className="absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 pointer-events-none"
          style={{ width: focused ? "100%" : "0%" }}
        />
      </div>
    </div>
  );
}

// ─── Pill Select ──────────────────────────────────────────────────────────────
function PillSelect({ name, value, onChange, label, options, required }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-stone-400">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </span>
      <div className="flex flex-wrap gap-2 pt-1">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange({ target: { name, value: o.value } })}
            className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-150 ${
              value === o.value
                ? "bg-red-600 border-red-600 text-white"
                : "bg-white border-stone-200 text-stone-500 hover:border-red-300 hover:text-red-600"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
      {/* Hidden input per emailjs */}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}

// ─── Contenuto del form (riusabile) ───────────────────────────────────────────
function FormContent({
  form,
  formValues,
  handleChange,
  privacyAccepted,
  setPrivacyAccepted,
  isSubmitting,
  sendEmail,
}) {
  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-8">
      {/* Nome + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <LineInput
          id="user_name"
          name="user_name"
          label="Nome completo"
          placeholder="Mario Rossi"
          value={formValues.user_name}
          onChange={handleChange}
          required
        />
        <LineInput
          id="user_email"
          name="user_email"
          type="email"
          label="Email"
          placeholder="mario@email.it"
          value={formValues.user_email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Professione + Quando */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <LineInput
          id="user_job"
          name="user_job"
          label="Professione"
          placeholder="Designer, Developer..."
          value={formValues.user_job}
          onChange={handleChange}
          required
        />
        <PillSelect
          name="user_time"
          label="Quando vorresti venire"
          value={formValues.user_time}
          onChange={handleChange}
          required
          options={[
            { value: "Prossimo mese", label: "Presto" },
            { value: "Entro 3 mesi", label: "3 mesi" },
            { value: "Entro 6 mesi", label: "6 mesi" },
          ]}
        />
      </div>

      {/* Messaggio */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-[11px] font-bold uppercase tracking-[0.12em] text-stone-400"
        >
          Messaggio
        </label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          rows={3}
          placeholder="Raccontaci qualcosa di te e cosa stai cercando..."
          className="w-full pb-2 pt-0.5 text-[16px] font-medium text-stone-900 bg-transparent border-0 border-b-2 border-stone-200 outline-none resize-none transition-colors duration-200 placeholder:text-stone-300 focus:border-red-600"
        />
      </div>

      {/* Divisore */}
      <div className="border-t border-stone-100" />

      {/* Privacy */}
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            required
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10 m-0"
          />
          <div
            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-150 pointer-events-none ${
              privacyAccepted
                ? "bg-red-600 border-red-600"
                : "border-stone-300 bg-white"
            }`}
          >
            {privacyAccepted && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 12 12"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 6l3 3 5-5"
                />
              </svg>
            )}
          </div>
        </div>
        <label
          htmlFor="privacy"
          className="text-sm text-stone-500 leading-relaxed cursor-pointer select-none"
        >
          Ho letto e accetto la{" "}
          <a
            href="https://www.iubenda.com/privacy-policy/12345678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-semibold hover:text-red-700 underline underline-offset-2 transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-red-600 ml-0.5">*</span>
        </label>
      </div>

      <p className="text-xs text-stone-400 -mt-4">
        <span className="text-red-600">*</span> Campi obbligatori
      </p>

      {/* CTA */}
      <button
        type="submit"
        disabled={isSubmitting || !privacyAccepted}
        className="w-full bg-red-600 hover:bg-red-700 active:scale-[0.99] disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed text-white font-bold text-base py-4 rounded-xl transition-all duration-200 relative"
      >
        <span
          className={`transition-opacity duration-150 ${
            isSubmitting ? "opacity-0" : "opacity-100"
          }`}
        >
          Invia la richiesta →
        </span>
        {isSubmitting && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5"
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
          </span>
        )}
      </button>
    </form>
  );
}

// ─── Form principale ───────────────────────────────────────────────────────────
export default function Form({ embedded = false }) {
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
        "nBwk1Dh-6_dCdi75H",
      )
      .then(
        () => {
          window.location.href = "/thanks";
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsSubmitting(false);
        },
      );
  };

  const sharedProps = {
    form,
    formValues,
    handleChange,
    privacyAccepted,
    setPrivacyAccepted,
    isSubmitting,
    sendEmail,
  };

  // ── Versione embedded: solo la card ───────────────────────────────────────
  if (embedded) {
    return (
      <div className="max-w-[560px] mx-auto">
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
          <div className="h-1 bg-red-600" />
          <div className="p-8 md:p-10">
            <FormContent {...sharedProps} />
          </div>
        </div>
        <p className="text-center text-sm text-stone-400 mt-5">
          Preferisci la mail?{" "}
          <a
            href="mailto:borghisud@gmail.com"
            className="text-stone-600 font-semibold hover:text-red-600 transition-colors"
          >
            borghisud@gmail.com
          </a>
        </p>
      </div>
    );
  }

  // ── Versione standalone: pagina intera ────────────────────────────────────
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-[560px]">
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
          <div className="h-1 bg-red-600" />
          <div className="p-8 md:p-10">
            <FormContent {...sharedProps} />
          </div>
        </div>

        <p className="text-center text-sm text-stone-400 mt-5">
          Preferisci la mail?{" "}
          <a
            href="mailto:borghisud@gmail.com"
            className="text-stone-600 font-semibold hover:text-red-600 transition-colors"
          >
            borghisud@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
