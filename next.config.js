/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Solo si quieres ignorar ESLint durante la construcción
    },
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-icons': 'react-icons/fa'
        };
        return config;
    }
}

module.exports = nextConfig 