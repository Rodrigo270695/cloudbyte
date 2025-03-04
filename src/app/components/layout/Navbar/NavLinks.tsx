interface MenuItem {
    name: string;
    href: string;
    description: string;
    icon: string;
}

interface NavLink {
    title: string;
    href?: string;
    submenu?: MenuItem[];
}

const navLinks: NavLink[] = [
    {
        title: 'Inicio',
        href: '/'
    },
    {
        title: 'Soluciones',
        submenu: [
            {
                name: 'Desarrollo de Software',
                description: 'Aplicaciones web y móviles personalizadas para tu negocio',
                href: '/desarrollo-software',
                icon: '💻'
            },
            {
                name: 'Cloud Computing',
                description: 'Servicios en la nube AWS, Azure y Google Cloud',
                href: '/cloud',
                icon: '☁️'
            },
            {
                name: 'Ciberseguridad',
                description: 'Protección avanzada contra amenazas digitales',
                href: '/ciberseguridad',
                icon: '🛡️'
            },
            {
                name: 'Licenciamiento',
                description: 'Microsoft 365, Adobe, Antivirus y más',
                href: '/licencias',
                icon: '🔑'
            },
            {
                name: 'Hosting & Dominios',
                description: 'Alojamiento web empresarial y gestión de dominios',
                href: '/hosting',
                icon: '🌐'
            },
            {
                name: 'Infraestructura TI',
                description: 'Diseño y gestión de infraestructura empresarial',
                href: '/infraestructura',
                icon: '🏗️'
            },
            {
                name: 'Servicios TI',
                description: 'Administración y monitoreo de servicios TI',
                href: '/servicios-ti',
                icon: '🔧'
            },
            {
                name: 'Respaldo y Recuperación',
                description: 'Soluciones de backup y continuidad de negocio',
                href: '/respaldos',
                icon: '💾'
            },
            {
                name: 'Soporte Empresarial',
                description: 'Asistencia técnica especializada 24/7',
                href: '/soporte',
                icon: '🛠️'
            }
        ]
    },
    {
        title: 'Productos',
        submenu: [
            { 
                name: 'Microsoft 365', 
                href: '/microsoft-365',
                description: 'Suite completa de productividad empresarial',
                icon: '💼'
            },
            { 
                name: 'Azure', 
                href: '/azure',
                description: 'Servicios cloud de Microsoft Azure',
                icon: '📊'
            },
            { 
                name: 'Certificados SSL', 
                href: '/ssl',
                description: 'Certificados digitales para tu sitio web',
                icon: '🔐'
            },
            { 
                name: 'Software Empresarial', 
                href: '/software',
                description: 'Soluciones de software para empresas',
                icon: '💻'
            },
            { 
                name: 'Herramientas DevOps', 
                href: '/devops',
                description: 'Herramientas para desarrollo y operaciones',
                icon: '⚙️'
            }
        ]
    },
    {
        title: 'Recursos',
        submenu: [
            { 
                name: 'Blog', 
                href: '/blog',
                description: 'Artículos y noticias sobre tecnología',
                icon: '📝'
            },
            { 
                name: 'Webinars', 
                href: '/webinars',
                description: 'Seminarios web gratuitos',
                icon: '🎥'
            },
            { 
                name: 'Casos de Éxito', 
                href: '/casos',
                description: 'Historias de clientes satisfechos',
                icon: '🏆'
            },
            { 
                name: 'Documentación', 
                href: '/docs',
                description: 'Guías y documentación técnica',
                icon: '📚'
            }
        ]
    },
    {
        title: 'Empresa',
        submenu: [
            { 
                name: 'Sobre Nosotros', 
                href: '/about',
                description: 'Conoce nuestra historia y valores',
                icon: '🏢'
            },
            { 
                name: 'Clientes', 
                href: '/clientes',
                description: 'Empresas que confían en nosotros',
                icon: '🤝'
            },
            { 
                name: 'Carreras', 
                href: '/carreras',
                description: 'Únete a nuestro equipo',
                icon: '💼'
            },
            { 
                name: 'Contacto', 
                href: '/contacto',
                description: 'Ponte en contacto con nosotros',
                icon: '📞'
            }
        ]
    }
];

export default navLinks;  