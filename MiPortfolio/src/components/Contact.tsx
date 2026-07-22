import { Mail, Send, MapPin, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";
import Icon from "./ui/Icon";
import { useContactForm } from "../hooks/useContactForm";
import { CONTACT_DETAILS } from "../data/portfolioData";
import type { ContactDetail } from "../types";

interface ContactIconProps {
  name: ContactDetail["iconName"];
}

function ContactIcon({ name }: ContactIconProps) {
  switch (name) {
    case "mail":
      return <Mail className="w-5 h-5 text-blue-400" />;
    case "linkedin":
      return <Icon name="linkedin" className="w-5 h-5 text-blue-400" />;
    case "github":
      return <Icon name="github" className="w-5 h-5 text-blue-400" />;
    case "mapPin":
      return <MapPin className="w-5 h-5 text-blue-400" />;
    default:
      return null;
  }
}

export default function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section
      id="contacto"
      className="py-20 px-6 md:px-8 relative overflow-hidden bg-slate-950/40 border-t border-white/5"
    >
      <div className="absolute left-1/4 top-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-gray-400 text-xs font-mono uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Contacto
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ponte en <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Contacto</span>
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h3>
              <p className="text-gray-400 leading-relaxed">
                Estoy disponible para trabajos freelance, contratos de desarrollo a medida o posiciones a tiempo completo. Escríbeme y charlemos sobre cómo puedo ayudarte a construir tu próxima idea digital.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              {CONTACT_DETAILS.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.href !== "#" && detail.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-blue-500/30 hover:bg-slate-900 transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-slate-950 rounded-lg border border-white/5 group-hover:scale-105 transition-transform">
                    <ContactIcon name={detail.iconName} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-gray-500 uppercase tracking-wider">{detail.label}</span>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{detail.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative">
              {submitSuccess && (
                <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 rounded-2xl animate-fade-in transition-all duration-300">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-gray-400 text-center max-w-sm">
                    Muchas gracias por escribirme. Me pondré en contacto contigo a la brevedad.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="flex flex-col items-start space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-300">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 bg-slate-950/50 border rounded-xl text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all ${
                      errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span id="name-error" className="flex items-center gap-1 text-xs text-red-400 font-medium pt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-300">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3 bg-slate-950/50 border rounded-xl text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all ${
                      errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                    }`}
                    placeholder="johndoe@ejemplo.com"
                  />
                  {errors.email && (
                    <span id="email-error" className="flex items-center gap-1 text-xs text-red-400 font-medium pt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-300">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 bg-slate-950/50 border rounded-xl text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all ${
                      errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                    }`}
                    placeholder="Escribe tu mensaje aquí..."
                  />
                  {errors.message && (
                    <span id="message-error" className="flex items-center gap-1 text-xs text-red-400 font-medium pt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-bold transition-all duration-200 cursor-pointer shadow-lg hover:shadow-blue-500/20 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
