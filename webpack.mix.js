let mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve('./resources/assets'),
            path.resolve('./node_modules')
        ]
    }
});

mix.less('resources/less/index.less', 'public/css/index.css');
mix.less('resources/less/contact.less', 'public/css/contact.css');
mix.less('resources/less/buy.less', 'public/css/buy.css');
mix.less('resources/less/data.less', 'public/css/data.css');
mix.less('resources/less/monthly.less', 'public/css/monthly.css');

mix.copy('resources/images', 'public/images');
