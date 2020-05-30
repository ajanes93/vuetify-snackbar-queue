const path = require('path')

module.exports = {
    styleguideDir: 'docs',
    exampleMode: 'collapse',
    renderRootJsx: path.join(__dirname, 'styleguidist/styleguide.root.js'),
    require: [
        path.join(__dirname, 'styleguidist/global.requires.js')
    ],
    ribbon: {
        url: 'https://github.com/ajanes93/vuetify-snackbar-queue',
        text: 'Look at the repo!'
    },
    template: {
        head: {
            links: [
                {
                    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
                    rel: 'stylesheet'
                }
            ]
        }
    },
    title: 'Vuetify Snackbar Queue',
    theme: {
        maxWidth: '100%',
        sidebarWidth: 300,
        color: {
            link: '#a90055',
            linkHover: '#003473',
            // sidebarBackground: '#ffffff',
            errorBackground: '#ed1c24'
        }
    },
    usageMode: 'expand',
    version: '0.2.1',
}
