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

        // Need to change to remotePatterns when deploying webapplication
        // remotePatterns: [
        //     {
        //       protocol: 'https',
        //       hostname: 'example.com',
        //       port: '',
        //       pathname: '/account123/**',
        //     }
    },
}