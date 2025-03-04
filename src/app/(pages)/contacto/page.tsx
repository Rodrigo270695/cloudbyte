"use client"
import { sendEmail } from '@/app/actions/sendEmail';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import FadeIn from '@/app/components/animations/FadeIn';
import Badge from '@/app/components/ui/Badge';
import ScrollToTop from '@/app/components/ScrollToTop';

// Form field type
type FormData = {
    name: string;
    email: string;
    company: string;
    phone: string;
    service: string;
    message: string;
}

const services = [
    { value: "servicios-ti", label: "Servicios TI" },
    { value: "ciberseguridad", label: "Ciberseguridad" },
    { value: "cloud-computing", label: "Cloud Computing" },
    { value: "desarrollo-software", label: "Desarrollo de Software" },
    { value: "soporte", label: "Soporte Técnico" },
    { value: "infraestructura", label: "Infraestructura TI" },
    { value: "respaldos", label: "Soluciones de Respaldo" },
    { value: "licencias", label: "Licenciamiento" },
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const result = await sendEmail(formData);
            
            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success('Mensaje enviado correctamente');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    service: '',
                    message: ''
                });
            }
        } catch (error) {
            toast.error('Error al enviar el mensaje');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen">
            {/* Hero Section - Mejorando el contraste y la legibilidad */}
            <section className="relative h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/contacto.jpg"
                        alt="Contáctanos"
                        fill
                        className="object-cover brightness-[0.2]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b 
                                  from-black/80 via-[#0a192f]/90 to-[#0a192f]" />
                </div>

                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <Badge text="CONTÁCTANOS" color="blue" />
                            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                                Ponte en Contacto
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
                                Permítenos ayudarte a transformar tu negocio con nuestras soluciones tecnológicas innovadoras y personalizadas.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Contact Form Section - Mejorando el layout y la experiencia visual */}
            <section className="py-24 bg-gradient-to-b from-[#0a192f] to-[#0f2942]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Información de Contacto - Mejorando la presentación */}
                        <div className="lg:sticky lg:top-8 lg:self-start">
                            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
                                Información de Contacto
                            </h2>
                            <div className="space-y-8 text-gray-300">
                                <div className="flex items-start space-x-6 group transition-all duration-300 hover:text-blue-400">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Ubicación</h3>
                                        <p className="text-lg">Chiclayo, Perú</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group transition-all duration-300 hover:text-blue-400">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Correo Electrónico</h3>
                                        <p className="text-lg">soporte@cloud-byte.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group transition-all duration-300 hover:text-blue-400">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Teléfono</h3>
                                        <p className="text-lg">+51 976 709 804</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Mejorando la interactividad y el feedback visual */}
                        <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="mt-1 block w-full rounded-lg border border-gray-600/50 
                                                     bg-white/[0.03] px-4 py-3 text-white placeholder-gray-400
                                                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                                     transition-all duration-200 hover:border-gray-500"
                                            placeholder="Tu nombre completo"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                            Correo Electrónico
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="mt-1 block w-full rounded-lg border border-gray-600/50 
                                                     bg-white/[0.03] px-4 py-3 text-white placeholder-gray-400
                                                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                                     transition-all duration-200 hover:border-gray-500"
                                            placeholder="tu@email.com"
                                            autoComplete="off"
                                            data-temp-mail-org="0"
                                            style={{ backgroundImage: 'none' }}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                                            Empresa
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                                            className="mt-1 block w-full rounded-lg border border-gray-600/50 
                                                     bg-white/[0.03] px-4 py-3 text-white placeholder-gray-400
                                                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                                     transition-all duration-200 hover:border-gray-500"
                                            placeholder="Nombre de tu empresa"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="mt-1 block w-full rounded-lg border border-gray-600/50 
                                                     bg-white/[0.03] px-4 py-3 text-white placeholder-gray-400
                                                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                                     transition-all duration-200 hover:border-gray-500"
                                            placeholder="+51 123 456 789"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                                        Servicio
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                                        className="mt-1 block w-full rounded-lg border border-gray-600/50 
                                                 bg-white/[0.03] px-4 py-3 text-white placeholder-gray-400
                                                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                                 transition-all duration-200 hover:border-gray-500
                                                 [&>option]:bg-[#0f2942] [&>option]:text-white"
                                    >
                                        <option value="" className="bg-[#0f2942] text-white">
                                            Selecciona un servicio
                                        </option>
                                        {services.map((service) => (
                                            <option 
                                                key={service.value} 
                                                value={service.value}
                                                className="bg-[#0f2942] text-white"
                                            >
                                                {service.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="mt-1 block w-full rounded-lg border border-gray-600/50 
                                                 bg-white/[0.03] px-4 py-3 text-white placeholder-gray-400
                                                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                                 transition-all duration-200 hover:border-gray-500 resize-none"
                                        placeholder="¿Cómo podemos ayudarte?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg
                                             font-medium text-lg transition-all duration-300
                                             hover:from-blue-700 hover:to-blue-800 
                                             focus:outline-none focus:ring-2 focus:ring-blue-500/50
                                             disabled:opacity-50 disabled:cursor-not-allowed
                                             transform hover:-translate-y-0.5"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : 'Enviar Mensaje'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollToTop />
        </main>
    );
}