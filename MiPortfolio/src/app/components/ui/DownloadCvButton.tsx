export default function DownloadCvButton() {
  return (
    <a
      href="/cv.pdf"
      download="CV_Joaquin.pdf"
      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm cursor-pointer"
    >
      Descargar CV
    </a>
  );
}

