export default function ContactForm() {
  return (
    <form className="max-w-md mx-auto flex flex-col gap-4">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-slate-300 mb-1">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={4}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
          placeholder="Escribe tu mensaje..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg transition-colors cursor-pointer"
      >
        Enviar consulta
      </button>
    </form>
  );
}

