const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;


module.exports = {
    // plugins: [
    //     new PrerenderSPAPlugin({
    //         // Index.html is in the root directory.
    //         staticDir: path.join(__dirname, 'dist/ngxs-coffee'),
    //         routes: ['/', '/menu', '/cart'],
    //         // Optional minification.
    //         minify: {
    //             collapseBooleanAttributes: true,
    //             collapseWhitespace: true,
    //             decodeEntities: true,
    //             keepClosingSlash: true,
    //             sortAttributes: true
    //         },

    //         renderer: new Renderer({
    //             renderAfterTime: 500
    //         })
    //     })
    // ]
};