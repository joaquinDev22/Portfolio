export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/TUNUMERO"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 p-3.5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
    >
      WhatsApp
    </a>
  );
}

