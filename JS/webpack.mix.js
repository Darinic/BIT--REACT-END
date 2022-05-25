let mix = require('laravel-mix')

mix.js('src/App.js', 'public')
.sass('src/scss/style.scss', 'css')
.setPublicPath('public')