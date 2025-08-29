export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573217710236', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="whatsapp-float">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
        aria-label="Contactar por WhatsApp"
        data-testid="whatsapp-button"
      >
        <i className="fab fa-whatsapp text-2xl mr-2"></i>
        <span className="font-semibold">¡Hablemos!</span>
      </button>
    </div>
  );
}
