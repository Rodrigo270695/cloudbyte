'use client';

import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
    phoneNumber: string;
    message?: string;
}

export default function WhatsAppButton({ phoneNumber, message = 'Hola, me gustaría obtener más información' }: WhatsAppButtonProps) {
    const handleWhatsAppClick = () => {
        // Formatear el número de teléfono (eliminar espacios, guiones y mantener solo números)
        const formattedPhone = phoneNumber.replace(/[\s\-\+]/g, '');
        
        // Si el número no empieza con el código de país, agregar 51 (Perú)
        const finalPhone = formattedPhone.startsWith('51') ? formattedPhone : `51${formattedPhone}`;
        
        // Codificar el mensaje para la URL (reemplazar espacios y caracteres especiales)
        const encodedMessage = encodeURIComponent(message);
        
        // Crear el enlace de WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${finalPhone}&text=${encodedMessage}`;
        
        // Abrir en una nueva pestaña
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-8 left-8 
                     size-14 rounded-2xl
                     bg-gradient-to-br from-green-500/10 to-green-500/30
                     backdrop-blur-md
                     shadow-[inset_0_0_10px_rgba(34,197,94,0.2)]
                     border border-white/10
                     hover:shadow-[inset_0_0_20px_rgba(34,197,94,0.4)]
                     transition-all duration-500 ease-out
                     group z-50
                     before:absolute before:inset-[2px]
                     before:rounded-2xl before:bg-[#0a192f]
                     before:z-[-1]
                     after:absolute after:inset-0
                     after:rounded-2xl after:bg-gradient-to-br
                     after:from-green-500/0 after:to-green-500/20
                     after:z-[-2] after:blur-md
                     animate-fade-in"
            aria-label="Contactar por WhatsApp"
        >
            <div className="relative flex items-center justify-center">
                {/* Icono de WhatsApp */}
                <FaWhatsapp 
                    className="w-7 h-7 text-green-500
                             transform group-hover:scale-110
                             transition-all duration-300
                             group-hover:text-white"
                />

                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-2xl opacity-0 
                              group-hover:opacity-100 transition-opacity 
                              duration-500 bg-gradient-to-t 
                              from-green-500/0 via-green-500/10 to-green-500/0" />
            </div>
        </button>
    );
}
