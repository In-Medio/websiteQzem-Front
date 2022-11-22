const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['localhost']
    },
    async rewrites() {
        return [
            {
                source: '/api/contact',
                destination: '/'
            }
        ]
    }
}