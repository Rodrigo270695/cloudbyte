import emailjs from '@emailjs/browser';

// Configura tus IDs de EmailJS (obtenidos de tu cuenta)
const SERVICE_ID = 'service_09g6cod';  // El ID del servicio que configuraste
const TEMPLATE_ID = 'template_eln99pq'; // Usa el ID exacto de tu plantilla
const PUBLIC_KEY = 'NiIodfGhjNPSRlooZ';   // Tu clave pública

export async function sendEmail(formData: {
    name: string;
    email: string;
    company: string;
    phone: string;
    service: string;
    message: string;
}) {
    try {        
        // Enviar correo usando EmailJS (que usará tu servidor SMTP)
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: formData.name,
                reply_to: formData.email,
                company: formData.company,
                phone: formData.phone,
                service: formData.service,
                message: formData.message
            },
            PUBLIC_KEY
        );

        if (response.status === 200) {
            return { success: true };
        } else {
            return { error: 'Error al enviar el mensaje' };
        }
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return { error: 'Error al enviar el mensaje' };
    }
}